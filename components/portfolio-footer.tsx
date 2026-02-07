export function PortfolioFooter() {
	return (
		<footer id="contact" className="mt-8 scroll-m-12">
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
					</div>
				</div>

				{/* ASCII table divider */}
				<div
					className="text-xs text-border select-none px-4"
					aria-hidden="true"
				>
					{
						"├──────────────────────────────────────────────────────────────────┤"
					}
				</div>

				<div className="px-4 py-3">
					<blockquote className="text-xs text-muted-foreground italic">
						{'"Forty-two," said Deep Thought, with infinite majesty and calm.'}
					</blockquote>
				</div>

				{/* ASCII table divider */}
				<div
					className="text-xs text-border select-none px-4"
					aria-hidden="true"
				>
					{
						"├──────────────────────────────────────────────────────────────────┤"
					}
				</div>

				<div className="px-4 py-3">
					<p className="text-xs text-muted-foreground">
						{'$ echo "Built with monospace aesthetics and terminal vibes"'}
					</p>
					<p className="text-xs text-muted-foreground mt-1">{"$ date"}</p>
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
