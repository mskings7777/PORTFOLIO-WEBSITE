"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { skills, skillGrowthData, radarSkillData } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
  { key: "concepts", label: "Concepts" },
] as const;

type Category = (typeof categories)[number]["key"];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const chartRef = useRef<HTMLDivElement>(null);
  const isChartInView = useInView(chartRef, { once: true, margin: "-50px" });

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  // Build bar data
  const barData = filteredSkills.map((s) => ({
    name: s.name,
    proficiency: s.proficiency,
  }));

  return (
    <SectionWrapper
      id="skills"
      title="Skills Analytics"
      subtitle="Technical proficiency breakdown and growth metrics"
    >
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
              activeCategory === cat.key
                ? "bg-trading-green/20 text-trading-green border border-trading-green/30"
                : "bg-card border border-border text-text-muted hover:text-text-primary hover:border-border-subtle"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div ref={chartRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isChartInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="trading-card p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <h3 className="font-mono text-sm text-text-secondary">
              SKILL OVERVIEW
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={radarSkillData}>
              <PolarGrid stroke="#1f2937" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: "#94a3b8", fontSize: 12, fontFamily: "monospace" }}
              />
              <Radar
                name="Skills"
                dataKey="A"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.15}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Growth Line Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isChartInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="trading-card p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-trading-green" />
            <h3 className="font-mono text-sm text-text-secondary">
              SKILL GROWTH TRAJECTORY
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={skillGrowthData}>
              <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tick={{ fill: "#64748b", fontSize: 11, fontFamily: "monospace" }}
                axisLine={{ stroke: "#1f2937" }}
              />
              <YAxis
                tick={{ fill: "#64748b", fontSize: 11, fontFamily: "monospace" }}
                axisLine={{ stroke: "#1f2937" }}
                domain={[0, 100]}
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
              <Line
                type="monotone"
                dataKey="frontend"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ r: 3, fill: "#10b981" }}
                name="Frontend"
              />
              <Line
                type="monotone"
                dataKey="backend"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 3, fill: "#3b82f6" }}
                name="Backend"
              />
              <Line
                type="monotone"
                dataKey="tools"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={{ r: 3, fill: "#8b5cf6" }}
                name="Tools"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Bar Chart - Proficiency Breakdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isChartInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="trading-card p-6 lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-amber" />
              <h3 className="font-mono text-sm text-text-secondary">
                PROFICIENCY BREAKDOWN
              </h3>
            </div>
            <span className="text-xs font-mono text-text-muted">
              {filteredSkills.length} skills
            </span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData} layout="vertical">
              <CartesianGrid
                stroke="#1f2937"
                strokeDasharray="3 3"
                horizontal={false}
              />
              <XAxis
                type="number"
                domain={[0, 100]}
                tick={{ fill: "#64748b", fontSize: 11, fontFamily: "monospace" }}
                axisLine={{ stroke: "#1f2937" }}
              />
              <YAxis
                type="category"
                dataKey="name"
                width={110}
                tick={{ fill: "#94a3b8", fontSize: 11, fontFamily: "monospace" }}
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
                formatter={(value: unknown) => [`${value}%`, "Proficiency"]}
              />
              <Bar
                dataKey="proficiency"
                fill="#10b981"
                radius={[0, 4, 4, 0]}
                barSize={18}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
