import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { GithubSection } from "@/components/sections/GithubSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <div className="border-t border-[#1f2937]" />
        <SkillsSection />
        <div className="border-t border-[#1f2937]" />
        <ProjectsSection />
        <div className="border-t border-[#1f2937]" />
        <ExperienceSection />
        <div className="border-t border-[#1f2937]" />
        <GithubSection />
        <div className="border-t border-[#1f2937]" />
        <ResumeSection />
        <div className="border-t border-[#1f2937]" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
