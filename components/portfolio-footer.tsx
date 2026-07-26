import { Github, Linkedin, Mail } from "lucide-react";

export function PortfolioFooter() {
  return (
    <footer id="contact" className="mt-8 scroll-m-16">
      <div className="border border-border rounded-sm bg-card text-card-foreground">
        <div
          className="flex w-full text-xs text-border select-none px-4 pt-3 font-mono"
          aria-hidden="true"
        >
          <span>┌</span>
          <span className="flex-1 border-t border-border mx-1 translate-y-1/2" />
          <span>┐</span>
        </div>

        <div className="px-4 py-3">
          <div className="flex justify-center items-center gap-3 text-xs">
            <a
              href="https://github.com/nekronos-gh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-1"
            >
              <Github size={14} />
              GitHub
            </a>

            <span className="text-border">|</span>

            <a
              href="https://www.linkedin.com/in/eduardo-rodriguez-sanchez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-1"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>

            <span className="text-border">|</span>

            <a
              href="mailto:rod.san.eduardo@gmail.com"
              className="text-primary hover:underline flex items-center gap-1"
            >
              <Mail size={14} />
              Email
            </a>
          </div>
        </div>

        <div
          className="flex w-full text-xs text-border select-none px-4 pb-3 font-mono"
          aria-hidden="true"
        >
          <span>└</span>
          <span className="flex-1 border-t border-border mx-1 translate-y-1/2" />
          <span>┘</span>
        </div>
      </div>
    </footer>
  );
}
