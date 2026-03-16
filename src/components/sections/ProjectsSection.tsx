"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { projects } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  ExternalLink,
  Github,
  Code,
  Star,
  Layers,
} from "lucide-react";

type StatusFilter = "all" | "active" | "completed" | "in-development";

export function ProjectsSection() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const filteredProjects =
    statusFilter === "all"
      ? projects
      : projects.filter((p) => p.status === statusFilter);

  return (
    <SectionWrapper
      id="projects"
      title="Project Portfolio"
      subtitle="Projects displayed as market assets with performance metrics"
    >
      {/* Status Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {(
          [
            { key: "all", label: "All Assets" },
            { key: "active", label: "Active" },
            { key: "completed", label: "Completed" },
            { key: "in-development", label: "In Development" },
          ] as { key: StatusFilter; label: string }[]
        ).map((filter) => (
          <button
            key={filter.key}
            onClick={() => setStatusFilter(filter.key)}
            className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
              statusFilter === filter.key
                ? "bg-trading-green/20 text-trading-green border border-trading-green/30"
                : "bg-card border border-border text-text-muted hover:text-text-primary hover:border-border-subtle"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredProjects.map((project, index) => {
          const isPositive = project.change >= 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="trading-card overflow-hidden group"
            >
              {/* Card Header */}
              <div className="p-5 pb-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-bold text-lg text-text-primary">
                        ${project.ticker}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                          project.status === "active"
                            ? "bg-trading-green/10 text-trading-green"
                            : project.status === "in-development"
                            ? "bg-accent-amber/10 text-accent-amber"
                            : "bg-accent-blue/10 text-accent-blue"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm">
                      {project.name}
                    </p>
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm font-mono font-semibold ${
                      isPositive ? "text-trading-green" : "text-trading-red"
                    }`}
                  >
                    {isPositive ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {isPositive ? "+" : ""}
                    {project.change}%
                  </div>
                </div>

                <p className="text-text-muted text-xs leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mini Chart */}
              <div className="h-24 px-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={project.priceHistory}>
                    <defs>
                      <linearGradient
                        id={`gradient-${project.id}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor={isPositive ? "#10b981" : "#ef4444"}
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor={isPositive ? "#10b981" : "#ef4444"}
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" hide />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        background: "#1a1f2e",
                        border: "1px solid #374151",
                        borderRadius: 6,
                        fontFamily: "monospace",
                        fontSize: 11,
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={isPositive ? "#10b981" : "#ef4444"}
                      fill={`url(#gradient-${project.id})`}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Metrics Row */}
              <div className="px-5 py-3 border-t border-border grid grid-cols-3 gap-2">
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-text-muted" />
                  <div>
                    <p className="text-[10px] text-text-muted font-mono">
                      Complexity
                    </p>
                    <p className="text-xs font-mono font-semibold text-text-primary">
                      {project.metrics.complexity}/100
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-3 h-3 text-text-muted" />
                  <div>
                    <p className="text-[10px] text-text-muted font-mono">
                      Stars
                    </p>
                    <p className="text-xs font-mono font-semibold text-text-primary">
                      {project.metrics.stars}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Code className="w-3 h-3 text-text-muted" />
                  <div>
                    <p className="text-[10px] text-text-muted font-mono">
                      Lines
                    </p>
                    <p className="text-xs font-mono font-semibold text-text-primary">
                      {(project.metrics.linesOfCode / 1000).toFixed(1)}K
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="px-5 py-3 border-t border-border flex gap-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-card-hover hover:bg-border text-text-secondary hover:text-text-primary text-xs font-mono transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-trading-green/10 hover:bg-trading-green/20 text-trading-green text-xs font-mono transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
