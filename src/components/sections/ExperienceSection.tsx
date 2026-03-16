"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { experiences } from "@/data/portfolio";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  Award,
  Trophy,
  GitPullRequest,
} from "lucide-react";

const typeIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  internship: Briefcase,
  hackathon: Trophy,
  certification: Award,
  "open-source": GitPullRequest,
};

const typeColorMap: Record<string, { bg: string; text: string; border: string }> = {
  internship: {
    bg: "bg-accent-blue/10",
    text: "text-accent-blue",
    border: "border-accent-blue/30",
  },
  hackathon: {
    bg: "bg-accent-amber/10",
    text: "text-accent-amber",
    border: "border-accent-amber/30",
  },
  certification: {
    bg: "bg-accent-purple/10",
    text: "text-accent-purple",
    border: "border-accent-purple/30",
  },
  "open-source": {
    bg: "bg-trading-green/10",
    text: "text-trading-green",
    border: "border-trading-green/30",
  },
};

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper
      id="experience"
      title="Experience Analytics"
      subtitle="Career milestones and achievements tracked as performance metrics"
    >
      <div ref={ref} className="space-y-5">
        {experiences.map((exp, index) => {
          const Icon = typeIconMap[exp.type] || Briefcase;
          const colors = typeColorMap[exp.type] || typeColorMap.internship;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="trading-card p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Left: Icon + Type */}
                <div className="flex items-center gap-4 md:flex-col md:items-center md:w-20 shrink-0">
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}
                  >
                    {exp.type}
                  </span>
                </div>

                {/* Center: Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-semibold text-text-primary text-lg">
                      {exp.title}
                    </h3>
                    <span className="text-xs font-mono text-text-muted">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm mb-1">
                    {exp.organization}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-4">
                    {exp.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="bg-card-hover rounded-lg px-4 py-3 min-w-[100px]"
                      >
                        <AnimatedCounter
                          value={metric.value}
                          suffix={metric.suffix}
                          className="text-2xl font-bold font-mono text-text-primary block"
                        />
                        <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
