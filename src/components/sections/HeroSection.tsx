"use client";

import { developerProfile } from "@/data/portfolio";
import { StatsCards } from "@/components/ui/StatsCards";
import { TickerTape } from "@/components/ui/TickerTape";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, GraduationCap } from "lucide-react";

export function HeroSection() {
  return (
    <section id="dashboard" className="relative min-h-screen grid-bg">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/50 via-transparent to-[#0a0e17] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-8">
        {/* Market status bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-4 mb-12 font-mono text-xs"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-trading-green pulse-dot" />
            <span className="text-trading-green">MARKET OPEN</span>
          </div>
          <span className="text-text-muted">|</span>
          <span className="text-text-muted">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
          <span className="text-text-muted">|</span>
          <span className="text-text-muted">Portfolio v1.0</span>
        </motion.div>

        {/* Hero content */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-trading-green/30 bg-trading-green/5 text-trading-green text-sm font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-trading-green" />
              Available for opportunities
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-text-primary">{developerProfile.name}</span>
              <br />
              <span className="text-text-secondary text-3xl md:text-4xl lg:text-5xl">
                {developerProfile.title}
              </span>
            </h1>

            <p className="text-text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
              {developerProfile.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {developerProfile.location}
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                {developerProfile.university} &apos;{developerProfile.graduationYear.toString().slice(-2)}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6 font-mono text-xs text-text-muted">
            <span className="w-2 h-2 rounded-full bg-accent-blue" />
            PORTFOLIO OVERVIEW
          </div>
          <StatsCards />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-text-muted cursor-pointer"
            onClick={() =>
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-xs font-mono">SCROLL TO EXPLORE</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Ticker Tape */}
      <div className="mt-8">
        <TickerTape />
      </div>
    </section>
  );
}
