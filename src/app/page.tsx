import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

export default async function HomePage() {
  const client = createClient();
  let home = null;
  try {
    home = await client.getSingle("home");
  } catch {
    // No home document yet; render placeholder
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="max-w-3xl mx-auto text-center">
        {home ? (
          <>
            <h1 className="text-4xl font-bold mb-4">
              {home.data.title ?? "Welcome"}
            </h1>
            {home.data.tagline && (
              <div className="text-xl text-gray-600 mb-8">
                <PrismicRichText field={home.data.tagline} />
              </div>
            )}
            {home.data.cta_text && (
              <div className="mb-8">
                <PrismicRichText field={home.data.cta_text} />
              </div>
            )}
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-4">Welcome</h1>
            <p className="text-xl text-gray-600 mb-8">
              Add a Home document in Prismic to customize this section.
            </p>
          </>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/about"
            className="rounded bg-gray-900 text-white px-6 py-2 hover:bg-gray-800"
          >
            About us
          </Link>
          <Link
            href="/contact"
            className="rounded bg-gray-900 text-white px-6 py-2 hover:bg-gray-800"
          >
            Contact
          </Link>
          <Link
            href="/careers"
            className="rounded bg-gray-900 text-white px-6 py-2 hover:bg-gray-800"
          >
            Careers
          </Link>
        </div>
      </section>
    </div>
  );
}
