import { TuiBox } from "./tui-box";

export function SectionAbout() {
	return (
		<section id="about" className="scroll-m-16">
			<TuiBox title="About">
				<p className="text-sm leading-relaxed text-foreground">
					{
						"I'm a Computer Engineer currently pursuing a Master's in High Performance Computing at "
					}
					<span className="text-primary">Universite du Luxembourg</span>
					{" through the "}
					<span className="text-primary">EUMaster4HPC</span>
					{
						" program. I combine strong theoretical foundations with practical industry experience in networking and systems engineering."
					}
				</p>
			</TuiBox>
		</section>
	);
}
