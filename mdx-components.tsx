import type { MDXComponents } from "mdx/types";
import Mermaid from "@/components/mdx/mermaid";
import AsciiArt from "@/components/mdx/ascii-art";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <div className="flex items-center gap-2 mb-4 mt-8">
        <span className="text-muted-foreground">{"#"}</span>
        <h1 className="text-primary font-bold text-2xl">{children}</h1>
      </div>
    ),
    h2: ({ children }) => (
      <div className="flex items-center gap-2 mb-3 mt-6">
        <span className="text-muted-foreground">{"##"}</span>
        <h2 className="text-primary font-bold text-xl">{children}</h2>
      </div>
    ),
    h3: ({ children }) => (
      <div className="flex items-center gap-2 mb-2 mt-4">
        <span className="text-muted-foreground">{"###"}</span>
        <h3 className="text-primary font-bold text-lg">{children}</h3>
      </div>
    ),
    p: ({ children }) => (
      <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    code: (props: any) => {
      return (
        <code
          className="bg-secondary border border-border rounded-sm px-1.5 py-0.5 text-sm font-mono text-primary"
          {...props}
        />
      );
    },
    pre: ({ children, ...props }: any) => {
      const childProps = children?.props;
      const className = childProps?.className ?? "";
      const isMermaid = className === "language-mermaid";
      const isAsciiArt = className === "language-asciiart";

      if (isMermaid) {
        return <Mermaid chart={childProps.children} />;
      }

      if (isAsciiArt) {
        return <AsciiArt chart={childProps.children} />;
      }

      return (
        <pre
          className="bg-secondary border border-border rounded-sm p-4 mb-4 overflow-x-auto text-sm text-terminal font-mono"
          {...props}
        >
          {children}
        </pre>
      );
    },
    ul: ({ children }) => <ul className="mb-4 space-y-1">{children}</ul>,
    ol: ({ children }) => (
      <ol className="mb-4 space-y-1 counter-reset-list">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-muted-foreground flex gap-2">
        <span className="text-border select-none">*</span>
        <span>{children}</span>
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-primary pl-4 mb-4 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
    hr: () => (
      <div
        className="flex items-center gap-4 mt-12 mb-20 select-none"
        aria-hidden="true"
      >
        <div className="h-px flex-1 bg-border" />
        <span className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase opacity-50">
          ---
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>
    ),
    table: ({ children }) => (
      <div className="w-full overflow-x-auto my-6 rounded-sm border border-border">
        <table className="w-full text-sm text-left border-collapse">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-secondary/40 text-muted-foreground font-semibold border-b border-border">
        {children}
      </thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-border bg-transparent">
        {children}
      </tbody>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-secondary/20 transition-colors">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 align-middle font-medium">{children}</th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 align-middle text-primary">{children}</td>
    ),
    ...components,
  };
}
