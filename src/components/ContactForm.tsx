"use client";

import { Send, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  // Replace "YOUR_FORM_ID" with your actual Formspree Form ID
  // You can find this in the "Integration" tab of your form settings on Formspree
  const [state, handleSubmit] = useForm("xnjznbqe");

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
      <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
      
      {state.succeeded ? (
        <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
          <p className="text-gray-400 max-w-xs">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                placeholder="John"
              />
              <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="text-red-400 text-xs" />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
                placeholder="Doe"
              />
              <ValidationError prefix="Last Name" field="lastName" errors={state.errors} className="text-red-400 text-xs" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all"
              placeholder="john@example.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs" />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
            <select
              id="subject"
              name="subject"
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition-all appearance-none"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Partnership">Partnership</option>
              <option value="Careers">Careers</option>
              <option value="Other">Other</option>
            </select>
            <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-400 text-xs" />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-gray-500 transition-all resize-none"
              placeholder="How can we help you?"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs" />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? "Sending..." : "Send Message"}
            {!state.submitting && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
      )}
    </div>
  );
}
