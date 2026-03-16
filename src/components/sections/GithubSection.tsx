"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { githubStats } from "@/data/portfolio";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
  Cell,
} from "recharts";
import { GitCommitHorizontal, BookOpen, Star, Users } from "lucide-react";

const overviewStats = [
  {
    label: "Total Commits",
    value: githubStats.totalCommits,
    icon: GitCommitHorizontal,
    color: "text-trading-green",
    bgColor: "bg-trading-green/10",
  },
  {
    label: "Repositories",
    value: githubStats.totalRepos,
    icon: BookOpen,
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
  },
  {
    label: "Total Stars",
    value: githubStats.totalStars,
    icon: Star,
    color: "text-accent-amber",
    bgColor: "bg-accent-amber/10",
  },
  {
    label: "Followers",
    value: githubStats.followers,
    icon: Users,
    color: "text-accent-purple",
    bgColor: "bg-accent-purple/10",
  },
];

export function GithubSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper
      id="github"
      title="GitHub Analytics"
      subtitle="Code contribution metrics and repository performance"
    >
      <div ref={ref}>
        {/* Overview Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {overviewStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="trading-card p-4"
              >
                <div className={`w-9 h-9 rounded-lg ${stat.bgColor} flex items-center justify-center mb-3`}>
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <AnimatedCounter
                  value={stat.value}
                  className="text-2xl font-bold font-mono text-text-primary block"
                />
                <span className="text-xs font-mono text-text-muted">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Commits Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="trading-card p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-trading-green" />
              <h3 className="font-mono text-sm text-text-secondary">
                MONTHLY COMMITS
              </h3>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={githubStats.monthlyCommits}>
                <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#64748b", fontSize: 11, fontFamily: "monospace" }}
                  axisLine={{ stroke: "#1f2937" }}
                />
                <YAxis
                  tick={{ fill: "#64748b", fontSize: 11, fontFamily: "monospace" }}
                  axisLine={{ stroke: "#1f2937" }}
                />
                <Tooltip
                  contentStyle={{
                    background: "#1a1f2e",
                    border: "1px solid #374151",
                    borderRadius: 8,
                    fontFamily: "monospace",
                    fontSize: 12,
                  }}
                  labelStyle={{ color: "#f1f5f9" }}
                />
                <Bar dataKey="commits" radius={[4, 4, 0, 0]} barSize={24}>
                  {githubStats.monthlyCommits.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        index === githubStats.monthlyCommits.length - 1
                          ? "#10b981"
                          : "#1f4d3d"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Contribution Trend */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="trading-card p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              <h3 className="font-mono text-sm text-text-secondary">
                CONTRIBUTION TREND
              </h3>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={githubStats.contributionData}>
                <defs>
                  <linearGradient id="contribGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
                <XAxis
                  dataKey="week"
                  tick={{ fill: "#64748b", fontSize: 11, fontFamily: "monospace" }}
                  axisLine={{ stroke: "#1f2937" }}
                />
                <YAxis
                  tick={{ fill: "#64748b", fontSize: 11, fontFamily: "monospace" }}
                  axisLine={{ stroke: "#1f2937" }}
                />
                <Tooltip
                  contentStyle={{
                    background: "#1a1f2e",
                    border: "1px solid #374151",
                    borderRadius: 8,
                    fontFamily: "monospace",
                    fontSize: 12,
                  }}
                  labelStyle={{ color: "#f1f5f9" }}
                />
                <Area
                  type="monotone"
                  dataKey="contributions"
                  stroke="#06b6d4"
                  fill="url(#contribGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="trading-card p-6 lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-amber" />
              <h3 className="font-mono text-sm text-text-secondary">
                TOP LANGUAGES
              </h3>
            </div>
            <div className="space-y-4">
              {githubStats.topLanguages.map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="font-mono text-sm text-text-primary">
                        {lang.name}
                      </span>
                    </div>
                    <span className="font-mono text-sm text-text-secondary">
                      {lang.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-card-hover rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isInView ? { width: `${lang.percentage}%` } : {}
                      }
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
