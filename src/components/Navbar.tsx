"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Menu,
  X,
  Activity,
  Briefcase,
  FolderKanban,
  Github,
  FileDown,
  Mail,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "skills", label: "Skills", icon: Activity },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "github", label: "GitHub", icon: Github },
  { id: "resume", label: "Resume", icon: FileDown },
  { id: "contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map((item) => item.id);
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollTo("dashboard")}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-trading-green/20 flex items-center justify-center group-hover:bg-trading-green/30 transition-colors">
                <BarChart3 className="w-4 h-4 text-trading-green" />
              </div>
              <span className="font-mono font-bold text-text-primary text-sm">
                DEV<span className="text-trading-green">.FOLIO</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-mono transition-all duration-200 ${
                      isActive
                        ? "bg-trading-green/10 text-trading-green"
                        : "text-text-muted hover:text-text-primary hover:bg-card-hover"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Live indicator */}
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-text-muted">
              <span className="w-2 h-2 rounded-full bg-trading-green pulse-dot" />
              LIVE
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-card/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left font-mono transition-all ${
                      isActive
                        ? "bg-trading-green/10 text-trading-green"
                        : "text-text-secondary hover:bg-card-hover hover:text-text-primary"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
