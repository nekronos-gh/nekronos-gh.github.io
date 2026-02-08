import { TuiBox } from "./tui-box"

interface Role {
  subtitle: string
  details: string[]
}

interface ExperienceEntry {
  title: string
  company: string
  location: string
  dates: string
  roles: Role[]
}

const experience: ExperienceEntry[] = [
  {
    title: "Software Developer",
    company: "Ericsson",
    location: "Madrid, Spain",
    dates: "Dec 2024 - Aug 2025",
    roles: [
      {
        subtitle: "5G Core Research and Development",
        details: [
          "Developed features for User Plane Analytics and optimization in 5G core networks",
          "Implemented antenna geo-redundancy algorithms and multi-thread contention reduction",
          "Resolved critical trouble reports including segment violation errors",
        ],
      },
      {
        subtitle: "5G RIB Solution Design",
        details: [
          "Led migration and adaptation of 5G Routing Information Base (RIB) codebase",
          "Redesigned implementation for intra-forward communication within Kubernetes networks",
          "Eliminated external network dependencies for core routing functions",
        ],
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Samsung Electronics (Zhilabs)",
    location: "Madrid, Spain",
    dates: "Jun 2023 - Oct 2024",
    roles: [
      {
        subtitle: "Recursive Descent Binary Parser",
        details: [
          "Developed binary parser for efficient network trace data extraction",
          "Enhanced troubleshooting capabilities with quick, reliable data access",
        ],
      },
      {
        subtitle: "Parallel Network Traffic Simulation",
        details: [
          "Upgraded simulator from sequential to parallel execution across multiple antennas",
          "Enabled scalable testing of complex network scenarios",
        ],
      },
      {
        subtitle: "High-Performance Network Trace Proxy",
        details: [
          "Achieved 86 Gb/s throughput for unencrypted packet forwarding",
          "Presented as Bachelor's Thesis during Summer 2024",
        ],
      },
      {
        subtitle: "RAN Assistant",
        details: [
          "Participated from PoC stage in multi-agent system design",
          "Leveraged LLM, NLP, ML, and heuristics for Telco Q&A, anomaly detection, and root cause analysis",
        ],
      },
    ],
  },
]

export function SectionExperience() {
  return (
    <section id="experience" className="scroll-m-16">
      <TuiBox title="Professional Experience">
        <div className="flex flex-col gap-8">
          {experience.map((entry) => (
            <div key={entry.company}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-sm font-bold text-foreground">{entry.title}</h3>
                <span className="text-xs text-muted-foreground shrink-0">{entry.dates}</span>
              </div>
              <p className="text-xs text-primary mt-0.5">
                {entry.company} <span className="text-muted-foreground">{"// "}{entry.location}</span>
              </p>

              <div className="mt-3 flex flex-col gap-4">
                {entry.roles.map((role) => (
                  <div key={role.subtitle}>
                    <p className="text-xs text-accent font-bold mb-1">
                      {"### "}{role.subtitle}
                    </p>
                    <ul className="flex flex-col gap-1">
                      {role.details.map((detail) => (
                        <li key={detail} className="text-xs text-muted-foreground">
                          <span className="text-border mr-2">{"*"}</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TuiBox>
    </section>
  )
}
