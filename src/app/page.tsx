import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProfileSummary } from "@/components/sections/profile-summary";
import { SkillsShowcase } from "@/components/sections/skills-showcase";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { ProjectPortfolio } from "@/components/sections/project-portfolio";
import { EducationCertifications } from "@/components/sections/education-certifications";
import { PassionGoal } from "@/components/sections/passion-goal";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* ProfileSummary is rendered first and has its own top padding */}
        <ProfileSummary /> 
        <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Sections below ProfileSummary will use container padding */}
          <Separator className="my-8" />
          <SkillsShowcase />
          <Separator className="my-8" />
          <ExperienceTimeline />
          <Separator className="my-8" />
          <ProjectPortfolio />
          <Separator className="my-8" />
          <EducationCertifications />
          <Separator className="my-8" />
          <PassionGoal />
        </div>
      </main>
      <Footer />
    </div>
  );
}
