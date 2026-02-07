import { TuiBox } from "./tui-box"

const skillCategories = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "Go", "Python"],
  },
  {
    category: "Low-level / Systems",
    items: ["Linux", "Virtualization", "CPU Architecture", "GDB", "Valgrind"],
  },
  {
    category: "High-Performance Computing",
    items: ["Multithreading", "Vectorization (AVX)", "Profiling", "Benchmarking"],
  },
  {
    category: "Distributed Systems",
    items: ["Kubernetes", "Load Balancing", "Distributed Storage", "5G Networking"],
  },
  {
    category: "Observability",
    items: ["Grafana", "Prometheus", "gRPC"],
  },
  {
    category: "Languages",
    items: ["Spanish (Native)", "English (Fluent)"],
  },
]

export function SectionSkills() {
  return (
    <section id="skills" className="scroll-m-12">
      <TuiBox title="Technical Skills">
        <div className="flex flex-col gap-4">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <p className="text-xs font-bold text-foreground mb-2">
                <span className="text-accent mr-1">{"$"}</span>
                {cat.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block border border-border rounded-sm px-2 py-1 text-xs text-primary bg-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TuiBox>
    </section>
  )
}
