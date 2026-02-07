import { PortfolioHeader, StickyNav } from "@/components/portfolio-header"
import { SectionAbout } from "@/components/section-about"
import { SectionEducation } from "@/components/section-education"
import { SectionResearch } from "@/components/section-research"
import { SectionExperience } from "@/components/section-experience"
import { SectionProjects } from "@/components/section-projects"
import { SectionSkills } from "@/components/section-skills"
import { SectionInterests } from "@/components/section-interests"
import { SectionAwards } from "@/components/section-awards"
import { PortfolioFooter } from "@/components/portfolio-footer"
import { TuiDivider } from "@/components/tui-box"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Cursor blink line */}
        <div className="text-xs text-muted-foreground mb-6">
          <span className="text-accent">{"$"}</span>{" "}
          <span>cat portfolio.md</span>
          <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse align-middle" aria-hidden="true" />
        </div>

        <PortfolioHeader />

        <StickyNav />

        <TuiDivider />
        <SectionAbout />

        <TuiDivider />
        <SectionEducation />

        <TuiDivider />
        <SectionResearch />

        <TuiDivider />
        <SectionExperience />

        <TuiDivider />
        <SectionProjects />

        <TuiDivider />
        <SectionSkills />

        <TuiDivider />
        <SectionInterests />

        <TuiDivider />
        <SectionAwards />

        <TuiDivider />
        <PortfolioFooter />

        {/* End prompt */}
        <div className="text-xs text-muted-foreground mt-6 mb-4">
          <span className="text-accent">{"$"}</span>{" "}
          <span className="inline-block w-2 h-4 bg-primary animate-pulse align-middle" aria-hidden="true" />
        </div>
      </div>
    </main>
  )
}
