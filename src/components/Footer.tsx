"use client";

import { socialLinks, developerProfile } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Mail, BarChart3 } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-trading-green/20 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-trading-green" />
              </div>
              <span className="font-mono font-bold text-text-primary text-sm">
                DEV<span className="text-trading-green">.FOLIO</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              {developerProfile.bio}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm text-text-secondary uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {["Dashboard", "Skills", "Projects", "Experience", "GitHub", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-text-muted text-sm hover:text-trading-green transition-colors font-mono"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm text-text-secondary uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || Mail;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-trading-green hover:border-trading-green/50 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs font-mono">
            &copy; {new Date().getFullYear()} {developerProfile.name}. All rights reserved.
          </p>
          <p className="text-text-muted text-xs font-mono">
            Built with Next.js, Tailwind CSS & Recharts
          </p>
        </div>
      </div>
    </footer>
  );
}
