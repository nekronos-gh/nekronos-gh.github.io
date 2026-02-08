import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <div className="flex items-center gap-2 mb-4 mt-8">
        <span className="text-muted-foreground">{"##"}</span>
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
        <span className="text-muted-foreground">{"##"}</span>
        <h3 className="text-primary font-bold text-lg">{children}</h3>
      </div>
    ),
    p: ({ children }) => (
      <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-secondary border border-border rounded-sm px-1.5 py-0.5 text-sm text-primary font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-secondary border border-border rounded-sm p-4 mb-4 overflow-x-auto text-sm">
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 space-y-1">{children}</ul>
    ),
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
    ...components,
  }
}
