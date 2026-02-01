"use client";

import Hyperspeed from "@/components/Hyperspeed";
import { hyperspeedPresets } from "@/components/HyperSpeedPresets";

export default function HomeBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Hyperspeed effectOptions={hyperspeedPresets.one} />
    </div>
  );
}
