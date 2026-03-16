"use client";

import { developerStats, developerProfile } from "@/data/portfolio";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function TickerTape() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const tickerItems = [
    ...developerStats.map((s) => ({
      label: s.label,
      value: `${s.value}${s.suffix || ""}`,
      change: s.change,
    })),
    { label: "Portfolio Rating", value: "A+", change: 5.2 },
    { label: "Bug-Free Rate", value: "98.5%", change: 2.1 },
    { label: "Code Quality", value: "94/100", change: 3.7 },
    { label: "Uptime", value: "99.9%", change: 0.1 },
  ];

  // Double the items for seamless loop
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="w-full overflow-hidden border-y border-border py-2.5 bg-card/50"
    >
      <div className="ticker-tape flex whitespace-nowrap gap-8">
        {allItems.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="flex items-center gap-2 font-mono text-sm"
          >
            <span className="text-text-muted">{item.label}:</span>
            <span className="text-text-primary font-semibold">
              {item.value}
            </span>
            <span
              className={`text-xs ${
                item.change >= 0 ? "text-trading-green" : "text-trading-red"
              }`}
            >
              {item.change >= 0 ? "+" : ""}
              {item.change}%
            </span>
            <span className="text-border-subtle mx-2">|</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
