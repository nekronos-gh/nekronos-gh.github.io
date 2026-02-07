import { TuiBox } from "./tui-box"

const projects = [
  {
    name: "Rule110 Fast",
    url: "https://github.com/nekronos-gh/rule110",
    description:
      "Optimized cellular automaton simulation using AVX2 SIMD intrinsics with OpenMP multi-threading. Maximized memory throughput via alignment and hardware directives using C++23 features.",
    tags: ["C++23", "AVX2", "SIMD", "OpenMP"],
  },
  {
    name: "TinyFile",
    url: "https://github.com/nekronos-gh/TinyFile",
    description:
      "File compression service using hybrid IPC architecture combining POSIX Message Queues and Shared Memory. Implemented state-machine based Ring Buffer with zero-copy memory access.",
    tags: ["C", "POSIX", "IPC", "Zero-Copy"],
  },
]

export function SectionProjects() {
  return (
    <section id="projects" className="scroll-m-12">
      <TuiBox title="Technical Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-border rounded-sm p-4 bg-secondary hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-accent text-xs">{">"}</span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-primary hover:underline"
                >
                  {project.name}
                </a>
                <span className="text-muted-foreground text-xs">{"[link]"}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block border border-border rounded-sm px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
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
