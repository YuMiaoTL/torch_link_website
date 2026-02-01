import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { isFilled } from "@prismicio/client";

export default async function AboutPage() {
  const client = createClient();
  let about = null;
  try {
    about = await client.getSingle("about");
  } catch {
    // No about document yet
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-2xl mx-auto">
        {about ? (
          <>
            <h1 className="text-4xl font-bold mb-6">
              {about.data.title ?? "About us"}
            </h1>
            {isFilled.richText(about.data.body) && (
              <div className="prose prose-lg max-w-none mb-8">
                <PrismicRichText field={about.data.body} />
              </div>
            )}
            {isFilled.image(about.data.image) && (
              <div className="mt-8">
                <PrismicNextImage
                  field={about.data.image}
                  className="rounded-lg w-full"
                />
              </div>
            )}
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-6">About us</h1>
            <p className="text-gray-600">
              Add an About document in Prismic to customize this page.
            </p>
          </>
        )}
      </article>
    </div>
  );
}
