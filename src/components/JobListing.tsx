"use client";

import { KeyTextField } from "@prismicio/client";
import { MapPin, Banknote, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

interface JobListingProps {
  uid: string;
  title: KeyTextField;
  location: KeyTextField;
  salary: KeyTextField;
  jobType: KeyTextField;
}

export default function JobListing({
  uid,
  title,
  location,
  salary,
  jobType,
}: JobListingProps) {
  return (
    <Link 
      href={`/careers/${uid}`}
      className="group block p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.2)]"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {title || "Untitled Position"}
          </h3>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            {location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-500/70" />
                <span>{location}</span>
              </div>
            )}
            {jobType && (
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-cyan-500/70" />
                <span>{jobType}</span>
              </div>
            )}
            {salary && (
              <div className="flex items-center gap-1.5">
                <Banknote className="w-4 h-4 text-cyan-500/70" />
                <span>{salary}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 text-cyan-400 font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          View Details
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
