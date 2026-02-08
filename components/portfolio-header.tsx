export function PortfolioHeader() {
	return (
		<header className="mb-8">
			<pre
				className="text-primary text-xs leading-tight hidden sm:block mb-4"
				style={{
					fontFamily:
						'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
				}}
				aria-hidden="true"
			>
				{`
 ███████╗██████╗ ██╗   ██╗ █████╗ ██████╗ ██████╗  ██████╗ 
 ██╔════╝██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔══██╗██╔═══██╗
 █████╗  ██║  ██║██║   ██║███████║██████╔╝██║  ██║██║   ██║
 ██╔══╝  ██║  ██║██║   ██║██╔══██║██╔══██╗██║  ██║██║   ██║
 ███████╗██████╔╝╚██████╔╝██║  ██║██║  ██║██████╔╝╚██████╔╝
 ╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝`}
			</pre>

			<h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
				Eduardo Rodríguez Sánchez
			</h1>
			<p className="text-primary text-sm sm:text-base">
				{">"} Computer Engineer | HPC Researcher | PhD Applicant
			</p>
		</header>
	);
}

export function StickyNav() {
	return (
		<nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2 flex flex-wrap gap-x-1 text-sm text-muted-foreground">
			<span className="text-border">[</span>
			<a href="#about" className="text-primary hover:underline">
				about
			</a>
			<span className="text-border">|</span>
			<a href="#education" className="text-primary hover:underline">
				education
			</a>
			<span className="text-border">|</span>
			<a href="#research" className="text-primary hover:underline">
				research
			</a>
			<span className="text-border">|</span>
			<a href="#experience" className="text-primary hover:underline">
				experience
			</a>
			<span className="text-border">|</span>
			<a href="#projects" className="text-primary hover:underline">
				projects
			</a>
			<span className="text-border">|</span>
			<a href="#skills" className="text-primary hover:underline">
				skills
			</a>
			<span className="text-border">|</span>
			<a href="#awards" className="text-primary hover:underline">
				awards
			</a>
			<span className="text-border">|</span>
			<a href="#contact" className="text-primary hover:underline">
				contact
			</a>
			<span className="text-border">]</span>
		</nav>
	);
}
