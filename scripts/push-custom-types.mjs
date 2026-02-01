#!/usr/bin/env node
/**
 * Push custom types to Prismic using the Custom Types API.
 * Use this when Slice Machine login fails.
 *
 * Requires: PRISMIC_WRITE_API_TOKEN from Prismic Settings > API & Security > Write APIs
 * Run: node scripts/push-custom-types.mjs
 */

import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_NAME = process.env.PRISMIC_REPOSITORY || "torchlink";
const WRITE_TOKEN = process.env.PRISMIC_WRITE_API_TOKEN;
const CUSTOMTYPES_DIR = join(__dirname, "../customtypes");
const API_URL = "https://customtypes.prismic.io";

if (!WRITE_TOKEN) {
  console.error(`
Error: PRISMIC_WRITE_API_TOKEN is required.

1. Go to https://torchlink.prismic.io/settings/api
2. Open the "Write APIs" tab
3. Generate an access token
4. Add to .env.local:
   PRISMIC_WRITE_API_TOKEN=your-write-api-token
5. Run: node scripts/push-custom-types.mjs
`);
  process.exit(1);
}

async function pushCustomType(customType) {
  const endpoint = `${API_URL}/customtypes/insert`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      repository: REPO_NAME,
      Authorization: `Bearer ${WRITE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customType),
  });

  if (response.status === 201) {
    return { success: true, action: "created" };
  }
  if (response.status === 409) {
    const updateResponse = await fetch(`${API_URL}/customtypes/update`, {
      method: "POST",
      headers: {
        repository: REPO_NAME,
        Authorization: `Bearer ${WRITE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customType),
    });
    if (updateResponse.ok) {
      return { success: true, action: "updated" };
    }
    const err = await updateResponse.text();
    return { success: false, error: err };
  }

  const err = await response.text();
  return { success: false, error: err };
}

async function main() {
  const dirs = readdirSync(CUSTOMTYPES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  if (dirs.length === 0) {
    console.log("No custom types found in customtypes/");
    return;
  }

  console.log(`Pushing ${dirs.length} custom types to ${REPO_NAME}...\n`);

  for (const name of dirs) {
    const filePath = join(CUSTOMTYPES_DIR, name, "index.json");
    try {
      const content = readFileSync(filePath, "utf-8");
      const customType = JSON.parse(content);
      const result = await pushCustomType(customType);

      if (result.success) {
        console.log(`  ✓ ${name} (${result.action})`);
      } else {
        console.error(`  ✗ ${name}: ${result.error}`);
      }
    } catch (err) {
      console.error(`  ✗ ${name}: ${err.message}`);
    }
  }

  console.log("\nDone.");
}

main();
