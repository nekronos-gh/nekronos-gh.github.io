import { TuiBox } from "./tui-box"

const interests = [
  {
    area: "Distributed Systems",
    topics: "Distributed computing, Block-chain technologies",
  },
  {
    area: "High-Performance Computing",
    topics: "Parallel algorithms, GPU programming, quantum computing",
  },
  {
    area: "Network Systems",
    topics: "5/6G core architecture, software-defined networking",
  },
  {
    area: "Operating Systems",
    topics: "Micro-kernels, hardware, computer architecure",
  },
]

export function SectionInterests() {
  return (
    <section id="interests" className="scroll-m-16">
      <TuiBox title="Research Interests">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {interests.map((entry) => (
            <div key={entry.area} className="border-l-2 border-primary pl-3 py-1">
              <p className="text-xs font-bold text-foreground">{entry.area}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{entry.topics}</p>
            </div>
          ))}
        </div>
      </TuiBox>
    </section>
  )
}
