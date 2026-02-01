import {
  createClient as baseCreateClient,
  type ClientConfig,
  type Route,
} from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";

export const repositoryName =
  process.env.PRISMIC_REPOSITORY ?? "torchlink";

export const routes: Route[] = [
  { type: "home", path: "/" },
  { type: "about", path: "/about" },
  { type: "contact", path: "/contact" },
  { type: "job", path: "/careers" },
];

export function createClient(config: ClientConfig = {}) {
  const client = baseCreateClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? {
            next: { tags: ["prismic"] },
            cache: "force-cache",
          }
        : { next: { revalidate: 60 } },
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
}
