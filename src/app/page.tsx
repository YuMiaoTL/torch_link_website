import Link from "next/link";
import HomeBackground from "@/components/HomeBackground";
import { ArrowRight, Cpu, Network, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HomeBackground />
      </div>

      {/* Overlay Gradient for better text readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black pointer-events-none" />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col min-h-screen">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10">
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              TorchLink
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Illuminating the path to ultra-fast data transmission with cutting-edge <span className="text-cyan-400 font-semibold">Silicon Photonics</span> and <span className="text-cyan-400 font-semibold">Optoelectronic Devices</span>.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                href="/careers"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-black font-bold rounded-full overflow-hidden transition-all hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]"
              >
                <span className="relative z-10">Careers</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all hover:border-white/30"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Pioneering the Light Age</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We bridge the gap between electronics and photonics, delivering bandwidth density and energy efficiency for the AI era.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.2)]">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Silicon Photonics</h3>
                <p className="text-gray-400 leading-relaxed">
                  Leveraging CMOS compatibility to integrate complex optical circuits on silicon chips, reducing cost and power consumption.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.2)]">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Optoelectronics</h3>
                <p className="text-gray-400 leading-relaxed">
                  High-performance lasers, modulators, and photodetectors designed for next-generation data centers and AI clusters.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(236,72,153,0.2)]">
                <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-6 group-hover:bg-pink-500/30 transition-colors">
                  <Network className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Optical Interconnects</h3>
                <p className="text-gray-400 leading-relaxed">
                  Breaking the copper barrier with ultra-high bandwidth density and low latency optical links for communication.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="py-12 border-t border-white/10 bg-black text-center md:text-left">
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
                <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
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
