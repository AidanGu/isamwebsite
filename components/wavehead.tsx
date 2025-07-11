"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { ElegantHero } from "./elegant-hero";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-6xl mx-auto pb-40">
      <p className="text-2xl md:text-2xl lg:text-7xl text-white font-bold leading-relaxed text-center whitespace-nowrap">
        Connection Through Canvas
      </p>
      <p className="text-sm md:text-base mt-8 text-white font-normal leading-tight text-center">
        This page provides a deeper dive into the insights presented in our ISAM
        poster. <br />
        Showcasing how Slugworks and DSI transformed makerspace engagement
        through innovative Canvas LMS integration.
      </p>
    </WavyBackground>
  );
}
