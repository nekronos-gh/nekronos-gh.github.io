import { TuiBox } from "./tui-box"

const interests = [
  {
    area: "Distributed Systems",
    topics: "Consensus protocols, fault tolerance, distributed storage",
  },
  {
    area: "High-Performance Computing",
    topics: "Parallel algorithms, vectorization, memory optimization",
  },
  {
    area: "Network Systems",
    topics: "5G core architecture, software-defined networking, load balancing",
  },
  {
    area: "Systems Security",
    topics: "Byzantine fault tolerance, secure communication protocols",
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
