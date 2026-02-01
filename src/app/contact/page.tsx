import HomeBackground from "@/components/HomeBackground";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <HomeBackground />
      </div>

      {/* Overlay Gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/50 via-black/80 to-black pointer-events-none" />

      <main className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-500">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have questions about our technology or want to explore partnership opportunities? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Contact Info */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email Us</p>
                      <a href="mailto:info@torchlink.com" className="text-lg font-medium text-white hover:text-cyan-400 transition-colors">
                        info@torchlink.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Location</p>
                      <p className="text-lg font-medium text-white">
                        Cupertino, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-white">Join Our Team</h3>
                <p className="text-gray-400 mb-6">
                  Interested in shaping the future of optical connectivity? Check out our open positions.
                </p>
                <a 
                  href="/careers" 
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
                >
                  View Careers
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition-all appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
