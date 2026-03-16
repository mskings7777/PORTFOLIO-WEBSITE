"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { socialLinks, developerProfile } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Github,
  Linkedin,
  Twitter,
  Mail,
  CheckCircle,
  MapPin,
} from "lucide-react";

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <SectionWrapper
      id="contact"
      title="Contact Terminal"
      subtitle="Send a message or connect through social platforms"
    >
      <div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
      >
        {/* Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="trading-card p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {"Let's Connect"}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent-blue" />
                </div>
                <div>
                  <p className="text-text-muted text-xs font-mono">EMAIL</p>
                  <p className="text-text-primary">developer@email.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-accent-purple/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent-purple" />
                </div>
                <div>
                  <p className="text-text-muted text-xs font-mono">LOCATION</p>
                  <p className="text-text-primary">
                    {developerProfile.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-text-muted text-xs font-mono mb-3">
                SOCIAL PROFILES
              </p>
              <div className="flex gap-2">
                {socialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon] || Mail;
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
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-3"
        >
          <div className="trading-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-trading-green" />
              <h3 className="font-mono text-sm text-text-secondary">
                SEND MESSAGE
              </h3>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <CheckCircle className="w-12 h-12 text-trading-green mb-4" />
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  Message Sent!
                </h4>
                <p className="text-text-muted text-sm">
                  {"I'll get back to you as soon as possible."}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-card-hover border border-border focus:border-trading-green/50 focus:outline-none text-text-primary text-sm font-mono placeholder:text-text-muted transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-card-hover border border-border focus:border-trading-green/50 focus:outline-none text-text-primary text-sm font-mono placeholder:text-text-muted transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-card-hover border border-border focus:border-trading-green/50 focus:outline-none text-text-primary text-sm font-mono placeholder:text-text-muted transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-trading-green hover:bg-trading-green-light text-black font-mono font-semibold text-sm transition-all hover:shadow-lg hover:shadow-trading-green/20"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
