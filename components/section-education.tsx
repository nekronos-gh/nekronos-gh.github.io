import { TuiBox } from "./tui-box"

interface EducationEntry {
  degree: string
  school: string
  location: string
  dates: string
  gpa?: string
  details: string[]
}

const education: EducationEntry[] = [
  {
    degree: "M.S. in High Performance Computing",
    school: "Universite du Luxembourg",
    location: "Belval, Luxembourg",
    dates: "Sep 2025 - May 2026",
    details: [
      "Double degree program (EUMaster4HPC)",
      "First year at Universite du Luxembourg, second year at Sofia University St. Kliment Ohridski",
      "Focus on parallel computing, distributed systems, and HPC architectures",
    ],
  },
  {
    degree: "B.S. in Computer Science",
    school: "Georgia Institute of Technology",
    location: "Georgia, USA",
    dates: "Aug 2023 - May 2024",
    gpa: "4.0/4.0",
    details: [
      "Comprehensive study of computer systems architecture with focus on distributed computing",
      "Coursework: Advanced Operating Systems, Embedded Systems, Database Implementation, Cyber Security",
    ],
  },
  {
    degree: "B.S. in Computer Engineering",
    school: "Universidad Carlos III de Madrid (UC3M)",
    location: "Madrid, Spain",
    dates: "Sep 2020 - Jun 2023",
    gpa: "9.1/10",
    details: [
      "Strong foundation in mathematics, AI, software engineering, and cybersecurity",
      "Capstone: HERMES - A C++ proxy for load-balancing millions of connections",
      "Coursework: OS, Networks, Distributed Systems, Computer Architecture, ML, Cryptography",
    ],
  },
]

export function SectionEducation() {
  return (
    <section id="education" className="scroll-m-12">
      <TuiBox title="Education">
        <div className="flex flex-col gap-6">
          {education.map((entry) => (
            <div key={entry.degree}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-sm font-bold text-foreground">{entry.degree}</h3>
                <span className="text-xs text-muted-foreground shrink-0">{entry.dates}</span>
              </div>
              <p className="text-xs text-primary mt-0.5">
                {entry.school} <span className="text-muted-foreground">{"// "}{entry.location}</span>
              </p>
              {entry.gpa && (
                <p className="text-xs text-accent mt-1">
                  {"GPA: "}<span className="font-bold">{entry.gpa}</span>
                </p>
              )}
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
