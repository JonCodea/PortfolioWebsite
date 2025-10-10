import { Hero } from "@/components/Hero"
import { StickyStory } from "@/components/StickyStory"
import { AboutSection } from "@/sections/AboutSection"
import { SkillsSection } from "@/sections/SkillsSection"
import ResumeSection from "@/sections/ResumeSection"
import { ContactSection } from "@/sections/ContactSection"
import { ProjectsWrapper } from "@/components/ProjectsWrapper" 
import MouseTrail from "@/components/MouseTrail"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div>
      {}
      <MouseTrail />

      {}
      <div className="container-padded">
        <Hero />
      </div>

      {}
      <AboutSection />

      {}
      <ProjectsWrapper />

      {}
      <StickyStory />

      {}
      <SkillsSection />

      {}
      <ResumeSection />

      {}
      <ContactSection />

      {}
      <Footer />
    </div>
  )
}
