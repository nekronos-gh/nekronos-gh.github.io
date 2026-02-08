import { TuiBox } from "./tui-box"

const projects = [
  {
    name: "Rule110 Fast",
    url: "https://github.com/nekronos-gh/rule110",
    description:
      "Optimized cellular automaton simulation using AVX2 SIMD intrinsics with OpenMP multi-threading. Maximized memory throughput via alignment and hardware directives using C++",
    // TODO: stick tags to the bottom
    tags: ["C++23", "AVX2", "SIMD", "OpenMP"],
  },
  {
    name: "TinyFile",
    url: "https://github.com/nekronos-gh/TinyFile",
    description:
      "File compression servcursoice using hybrid IPC architecture combining POSIX Message Queues and Shared Memory. Implemented state-machine based Ring Buffer with zero-copy memory access.",
    tags: ["C", "POSIX", "IPC"],
  },
]

export function SectionProjects() {
  return (
    <section id="projects" className="scroll-m-16">
      <TuiBox title="Technical Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border rounded-sm p-4 bg-secondary hover:border-primary transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-accent text-xs">{">"}</span>
                <span className="text-sm font-bold text-primary group-hover:underline">
                  {project.name}
                </span>
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
            </a>
          ))}
        </div>
      </TuiBox>
    </section>
  )
}
