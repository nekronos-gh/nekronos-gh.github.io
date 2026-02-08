import { PortfolioHeader, StickyNav } from "@/components/portfolio-header"
import { SectionAbout } from "@/components/section-about"
import { SectionProjects } from "@/components/section-projects"
import { SectionInterests } from "@/components/section-interests"
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
        </div>

        <PortfolioHeader />

        <StickyNav />

        <TuiDivider />
        <SectionAbout />

        <TuiDivider />
        <SectionInterests />

        <TuiDivider />
        <SectionProjects />

        <TuiDivider />
        <PortfolioFooter />

        {/* End prompt */}
        <div className="text-xs text-muted-foreground mt-6 mb-4">
          <span className="text-accent">{"$"}</span>{" "}
          <span className="inline-block w-2 h-4 bg-primary animate-cursor-blink align-middle" aria-hidden="true" />
        </div>
      </div>
    </main>
  )
}
