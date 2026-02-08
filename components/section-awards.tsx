import { TuiBox } from "./tui-box"

const awards = [
  "DEFCON CTF World Finalist (Multiple years)",
  "AWS ASEAN AI/ML GameDay - 2nd Place",
  "AWS Korea GameDay - 2nd Place",
  "Multiple domestic CTF competition awards",
  "AWS Community Builder (Container)",
  "HashiCorp Ambassador",
]

const publications = [
  "Bachelor's Thesis: High-Performance Network Trace Proxy (86 Gb/s throughput)",
  "Capstone Project: HERMES - High Performance Engine for Routing and Mirroring Encrypted Streams",
]

export function SectionAwards() {
  return (
    <section id="awards" className="scroll-m-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TuiBox title="Awards & Recognition">
          <ul className="flex flex-col gap-2">
            {awards.map((award) => (
              <li key={award} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-accent shrink-0">{">"}</span>
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </TuiBox>

        <TuiBox title="Publications & Presentations">
          <ul className="flex flex-col gap-2">
            {publications.map((pub) => (
              <li key={pub} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-accent shrink-0">{">"}</span>
                <span>{pub}</span>
              </li>
            ))}
          </ul>
        </TuiBox>
      </div>
    </section>
  )
}
