"use client";

import { developerStats } from "@/data/portfolio";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  TrendingDown,
  Folder,
  GitCommitHorizontal,
  Cpu,
  Clock,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  folder: Folder,
  "git-commit": GitCommitHorizontal,
  cpu: Cpu,
  clock: Clock,
};

export function StatsCards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {developerStats.map((stat, index) => {
        const Icon = iconMap[stat.icon] || Folder;
        const isPositive = stat.change >= 0;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="trading-card p-5 group cursor-default"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 rounded-lg bg-accent-blue/10">
                <Icon className="w-5 h-5 text-accent-blue" />
              </div>
              <div
                className={`flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-full ${
                  isPositive
                    ? "bg-trading-green/10 text-trading-green"
                    : "bg-trading-red/10 text-trading-red"
                }`}
              >
                {isPositive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {isPositive ? "+" : ""}
                {stat.change}%
              </div>
            </div>

            <div className="space-y-1">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                className="text-3xl font-bold font-mono text-text-primary"
              />
              <p className="text-text-muted text-sm">{stat.label}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
