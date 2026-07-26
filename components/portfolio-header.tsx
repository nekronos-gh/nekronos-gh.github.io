import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function PortfolioHeader() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-8 p-8 flex-wrap">
      {/* Rectangular Avatar - outside the name div */}
      <div className="w-36 h-44 rounded-lg overflow-hidden flex-shrink-0 border-2 border-gray-600 shadow-lg">
        <img
          src="/avatar.jpg"
          alt="Eduardo Rodríguez Sánchez"
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-3xl font-bold text-white">
          ER
        </div>
      </div>

      {/* Name + Info block */}
      <div className="flex flex-col gap-2 break-words min-w-0 text-center sm:text-left">
        <pre className="text-xs font-mono leading-none tracking-tighter hidden sm:block mb-4 overflow-x-auto">
          {`
 ███████╗██████╗ ██╗   ██╗ █████╗ ██████╗ ██████╗  ██████╗ 
 ██╔════╝██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔══██╗██╔═══██╗
 █████╗  ██║  ██║██║   ██║███████║██████╔╝██║  ██║██║   ██║
 ██╔══╝  ██║  ██║██║   ██║██╔══██║██╔══██╗██║  ██║██║   ██║
 ███████╗██████╔╝╚██████╔╝██║  ██║██║  ██║██████╔╝╚██████╔╝
 ╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝`}
        </pre>
        <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">Eduardo Rodríguez Sánchez</p>
        <p className="text-primary text-xs sm:text-base">{">"} Computer Engineer | HPC Researcher | Master Student</p>
      </div>
    </header>
  );
}

export function StickyNav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2 flex flex-wrap justify-center gap-x-1 text-sm text-muted-foreground">
      [ <a href="#about">about</a> | <a href="#projects">projects</a> |{" "}
      <a href="#contact">contact</a> | <a href="/blogs">blogs</a> |{" "}
      <a href="https://raw.githubusercontent.com/nekronos-gh/CV/main/cv.pdf"  target="_blank" rel="noopener noreferrer">CV </a> ]
    </nav>
  );
}
