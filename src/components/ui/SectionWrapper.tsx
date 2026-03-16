"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionWrapper({
  children,
  id,
  title,
  subtitle,
  className = "",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id={id}
      className={`relative py-16 md:py-24 px-4 md:px-8 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-trading-green" />
            <span className="text-trading-green font-mono text-sm uppercase tracking-wider">
              {title}
            </span>
          </div>
          {subtitle && (
            <p className="text-text-secondary text-lg mt-2">{subtitle}</p>
          )}
        </div>

        {children}
      </motion.div>
    </section>
  );
}
