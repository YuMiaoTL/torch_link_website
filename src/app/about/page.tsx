import Link from "next/link";
import HomeBackground from "@/components/HomeBackground";
import { ArrowRight, CheckCircle2, Users, Lightbulb, Target } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | TorchLink",
  description: "Learn more about TorchLink...",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <HomeBackground />
      </div>

      {/* Overlay Gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/50 via-black/80 to-black pointer-events-none" />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col min-h-screen">
        

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:pt-48 md:pb-24">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Driving innovation in optoelectronics and semiconductor manufacturing.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-5xl">
            
            {/* Company Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Rapidly Growing & <br/>Silicon Valley Funded
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We are a rapidly growing start-up company funded by Silicon Valley angel investors. We are poised to disrupt the industry with cutting-edge technology and a vision for the future of data transmission.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl h-full flex flex-col justify-center">
                   <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-cyan-400" />
                    Our Focus
                   </h3>
                   <p className="text-gray-300 leading-relaxed">
                     Our focus is optoelectronic device and semiconductor manufacturing, specialized in data-center applications. We aim to solve the bottleneck of data transfer speeds in the AI era.
                   </p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 md:p-12">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">World-Class Team</h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Our team consists of the industry’s most innovative technologists and advisory members in the business of optoelectronic device design, production, packaging, and applications.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                    <span className="text-gray-300">Device Design</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                    <span className="text-gray-300">Production</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                    <span className="text-gray-300">Packaging</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                    <span className="text-gray-300">Applications</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10 bg-black text-center md:text-left mt-auto">
          <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-2xl font-bold text-white mb-4">TorchLink</h4>
              <p className="text-gray-500 max-w-xs">
                Powering the future of connectivity with light.
              </p>
            </div>
            <div className="hidden md:block"></div>
            <div>
              <h5 className="text-white font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="/about" className="text-cyan-400 transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto max-w-6xl px-4 mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} TorchLink. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
