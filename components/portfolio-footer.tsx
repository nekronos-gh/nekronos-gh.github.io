export function PortfolioFooter() {
	return (
		<footer id="contact" className="mt-8 scroll-m-16">
			<div className="border border-border rounded-sm overflow-hidden bg-card text-card-foreground">
				{/* ASCII table header */}
				<div
					className="text-xs text-border select-none px-4 pt-3"
					aria-hidden="true"
				>
					{
						"┌──────────────────────────────────────────────────────────────────┐"
					}
				</div>

				<div className="px-4 py-3">
					<div className="flex flex-wrap gap-x-1 text-xs">
						<a
							href="https://github.com/nekronos-gh"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							GitHub
						</a>
						<span className="text-border">|</span>
						<a
							href="https://www.linkedin.com/in/eduardo-rodriguez-sanchez/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							LinkedIn
						</a>
					</div>
				</div>

				{/* ASCII table divider */}
				<div className="px-4 py-3">
					<p className="text-xs text-foreground">
						{"Eduardo Rodríguez Sánchez | 2026"}
					</p>
				</div>

				{/* ASCII table footer */}
				<div
					className="text-xs text-border select-none px-4 pb-3"
					aria-hidden="true"
				>
					{
						"└──────────────────────────────────────────────────────────────────┘"
					}
				</div>
			</div>
		</footer>
	);
}
