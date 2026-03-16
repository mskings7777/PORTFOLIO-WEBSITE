"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { developerProfile, socialLinks } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileDown,
  ExternalLink,
  Github,
  Linkedin,
} from "lucide-react";

export function ResumeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper
      id="resume"
      title="Resume & Links"
      subtitle="Download resume and access professional profiles"
    >
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="trading-card p-8 max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-trading-green/10 flex items-center justify-center mx-auto mb-6">
            <FileDown className="w-8 h-8 text-trading-green" />
          </div>

          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Get My Resume
          </h3>
          <p className="text-text-muted text-sm mb-8 max-w-md mx-auto">
            Download my latest resume to learn more about my experience,
            skills, and qualifications.
          </p>

          {/* Download Button */}
          <a
            href={developerProfile.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-trading-green hover:bg-trading-green-light text-black font-mono font-semibold text-sm transition-all hover:shadow-lg hover:shadow-trading-green/20"
          >
            <FileDown className="w-4 h-4" />
            Download Resume (PDF)
          </a>

          {/* Quick Links */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-border">
            {socialLinks
              .filter((l) => ["GitHub", "LinkedIn"].includes(l.platform))
              .map((link) => {
                const Icon = link.platform === "GitHub" ? Github : Linkedin;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:border-border-subtle text-text-secondary hover:text-text-primary text-sm font-mono transition-all"
                  >
                    <Icon className="w-4 h-4" />
                    {link.platform}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                );
              })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
