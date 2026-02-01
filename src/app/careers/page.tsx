import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { isFilled, asLink } from "@prismicio/client";

// Apply on Indeed opens in a new tab so users keep the site open.
const APPLY_LINK_TARGET = "_blank";
const APPLY_LINK_REL = "noopener noreferrer";

export default async function CareersPage() {
  const client = createClient();
  let jobs: Awaited<ReturnType<typeof client.getByType>>["results"] = [];
  try {
    const response = await client.getByType("job", {
      orderings: [{ field: "my.job.title", direction: "asc" }],
    });
    jobs = response.results;
  } catch {
    // No job type or no documents yet
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Careers</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl">
        Open roles are listed below. Click &quot;Apply on Indeed&quot; to go to
        Indeed and complete your application.
      </p>

      {jobs.length > 0 ? (
        <ul className="space-y-6">
          {jobs.map((job) => (
            <li
              key={job.id}
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {job.data.title ?? "Untitled role"}
                  </h2>
                  {isFilled.keyText(job.data.department) && (
                    <p className="text-sm text-gray-500 mt-1">
                      {job.data.department}
                    </p>
                  )}
                  {isFilled.richText(job.data.summary) && (
                    <div className="mt-3 text-gray-600">
                      <PrismicRichText field={job.data.summary} />
                    </div>
                  )}
                </div>
                {isFilled.link(job.data.indeed_apply_url) && (
                  <a
                    href={asLink(job.data.indeed_apply_url) ?? "#"}
                    target={APPLY_LINK_TARGET}
                    rel={APPLY_LINK_REL}
                    className="inline-flex items-center justify-center rounded bg-gray-900 text-white px-6 py-2 hover:bg-gray-800 whitespace-nowrap shrink-0"
                  >
                    Apply on Indeed
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">
          No open positions at the moment. Add Job documents in Prismic to list
          roles here.
        </p>
      )}
    </div>
  );
}
