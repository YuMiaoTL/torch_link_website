import { createClient } from "@/prismicio";
import { KeyTextField, RichTextField, LinkField } from "@prismicio/client";
import JobListing from "@/components/JobListing";
import HomeBackground from "@/components/HomeBackground";

// Define the expected shape of the Job document data
interface JobDocumentData {
  title: KeyTextField;
  location: KeyTextField;
  salary: KeyTextField;
  job_type: KeyTextField;
  indeed_apply_url: LinkField;
  description: RichTextField;
  responsibilities: RichTextField;
  qualifications: RichTextField;
}

interface JobDocument {
  id: string;
  uid: string;
  data: JobDocumentData;
}

export default async function CareersPage() {
  const client = createClient();
  let jobs: JobDocument[] = [];
  
  try {
    const response = await client.getByType("job", {
      orderings: [{ field: "my.job.title", direction: "asc" }],
    });
    jobs = response.results as unknown as JobDocument[];
  } catch (e) {
    console.error("Failed to fetch jobs", e);
  }

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <HomeBackground />
      </div>

      {/* Overlay Gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/50 via-black/80 to-black pointer-events-none" />

      <main className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-500">
              Join the Revolution
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Help us build the future of ultra-fast optical connectivity. We're looking for brilliant minds to solve the world's toughest engineering challenges.
            </p>
          </div>

          {jobs.length > 0 ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
              {jobs.map((job) => (
                <JobListing
                  key={job.id}
                  uid={job.uid}
                  title={job.data.title}
                  location={job.data.location}
                  salary={job.data.salary}
                  jobType={job.data.job_type}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-in fade-in zoom-in duration-500">
              <p className="text-gray-400 text-lg">
                No open positions at the moment. Please check back later.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
