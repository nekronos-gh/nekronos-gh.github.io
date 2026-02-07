import { TuiBox } from "./tui-box"

const research = [
  {
    title: "Research Assistant",
    org: "SnT (Interdisciplinary Centre for Security, Reliability and Trust)",
    location: "Kirchberg, Luxembourg",
    dates: "Oct 2025 - Present",
    details: [
      "Developing prototypes of Byzantine fault-tolerant consensus systems for research evaluation",
      "Implemented PBFT-based replica prototype in C++ on top of an asynchronous networking stack",
      "Contributing to the design and implementation of consensus protocols for coordination across replica groups",
      "Building tooling and test scenarios for reproducible experiments under failure conditions",
    ],
  },
  {
    title: "Capstone Research - HERMES",
    org: "Universidad Carlos III de Madrid",
    location: "Madrid, Spain",
    dates: "",
    details: [
      "Designed and implemented a high-performance proxy for load-balancing millions of encrypted connections",
      "Focused on internal network routing and traffic mirroring at scale",
      "Achieved production-grade performance using C++ and modern systems programming techniques",
    ],
  },
]

export function SectionResearch() {
  return (
    <section id="research" className="scroll-m-12">
      <TuiBox title="Research Experience">
        <div className="flex flex-col gap-6">
          {research.map((entry) => (
            <div key={entry.title}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-sm font-bold text-foreground">{entry.title}</h3>
                {entry.dates && (
                  <span className="text-xs text-muted-foreground shrink-0">{entry.dates}</span>
                )}
              </div>
              <p className="text-xs text-primary mt-0.5">
                {entry.org} <span className="text-muted-foreground">{"// "}{entry.location}</span>
              </p>
              <ul className="mt-2 flex flex-col gap-1">
                {entry.details.map((detail) => (
                  <li key={detail} className="text-xs text-muted-foreground">
                    <span className="text-border mr-2">{"*"}</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </TuiBox>
    </section>
  )
}
