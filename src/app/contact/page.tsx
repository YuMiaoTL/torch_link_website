import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { isFilled } from "@prismicio/client";

export default async function ContactPage() {
  const client = createClient();
  let contact = null;
  try {
    contact = await client.getSingle("contact");
  } catch {
    // No contact document yet
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-2xl mx-auto">
        {contact ? (
          <>
            <h1 className="text-4xl font-bold mb-6">
              {contact.data.title ?? "Contact"}
            </h1>
            {isFilled.richText(contact.data.body) && (
              <div className="prose prose-lg max-w-none">
                <PrismicRichText field={contact.data.body} />
              </div>
            )}
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-6">Contact</h1>
            <p className="text-gray-600">
              Add a Contact document in Prismic to customize this page.
            </p>
          </>
        )}
      </article>
    </div>
  );
}
