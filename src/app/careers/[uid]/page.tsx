import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { KeyTextField, RichTextField } from "@prismicio/client";
import { notFound } from "next/navigation";
import { MapPin, Banknote, Briefcase, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import HomeBackground from "@/components/HomeBackground";

// Define the expected shape of the Job document data
interface JobDocumentData {
  title: KeyTextField;
  location: KeyTextField;
  salary: KeyTextField;
  job_type: KeyTextField;
  description: RichTextField;
  responsibilities: RichTextField;
  qualifications: RichTextField;
}

interface JobDocument {
  id: string;
  uid: string;
  data: JobDocumentData;
}

type Params = { uid: string };

export default async function JobPage({ params }: { params: Params }) {
  const client = createClient();
  let job: JobDocument | null = null;

  try {
    const document = await client.getByUID("job", params.uid);
    job = document as unknown as JobDocument;
  } catch (e) {
    notFound();
  }

  if (!job) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <HomeBackground />
      </div>

      {/* Overlay Gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/70 via-black/90 to-black pointer-events-none" />

      <main className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/careers" 
            className="group inline-flex items-center text-gray-400 hover:text-cyan-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Careers
          </Link>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden animate-in fade-in zoom-in duration-500">
            <div className="p-8 md:p-12 border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {job.data.title || "Untitled Position"}
              </h1>
              
              <div className="flex flex-wrap gap-6 text-gray-300">
                {job.data.location && (
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{job.data.location}</span>
                  </div>
                )}
                {job.data.job_type && (
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span>{job.data.job_type}</span>
                  </div>
                )}
                {job.data.salary && (
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <Banknote className="w-4 h-4 text-cyan-400" />
                    <span>{job.data.salary}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-12">
              {job.data.description && job.data.description.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-4 uppercase tracking-wider text-sm">Description</h2>
                  <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white prose-strong:text-white prose-li:text-gray-300 max-w-none">
                    <PrismicRichText field={job.data.description} />
                  </div>
                </section>
              )}

              {job.data.responsibilities && job.data.responsibilities.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-4 uppercase tracking-wider text-sm">Key Responsibilities</h2>
                  <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white prose-strong:text-white prose-li:text-gray-300 max-w-none">
                    <PrismicRichText field={job.data.responsibilities} />
                  </div>
                </section>
              )}

              {job.data.qualifications && job.data.qualifications.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-4 uppercase tracking-wider text-sm">Qualifications</h2>
                  <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white prose-strong:text-white prose-li:text-gray-300 max-w-none">
                    <PrismicRichText field={job.data.qualifications} />
                  </div>
                </section>
              )}

              {/* Apply Button Section */}
              <div className="pt-8 border-t border-white/10">
                 <a
                    href={`mailto:careers@torchlink.com?subject=Application for ${job.data.title}`}
                    className="group relative inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-cyan-500 text-black font-bold rounded-full overflow-hidden transition-all hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                  >
                    <span className="relative z-10">Apply for this Position</span>
                    <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </a>
                  <p className="mt-4 text-sm text-gray-500">
                    Or email your resume to <span className="text-cyan-400">careers@torchlink.com</span>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Params }) {
  const client = createClient();
  try {
    const job = await client.getByUID("job", params.uid) as unknown as JobDocument;
    return {
      title: `${job.data.title} | Careers`,
      description: `Join our team as a ${job.data.title}`,
    };
  } catch {
    return {
      title: "Job Not Found",
    };
  }
}
