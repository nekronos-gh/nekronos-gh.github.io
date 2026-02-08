import type React from "react"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-xs text-muted-foreground mb-6">
          <span className="text-accent">{"$"}</span>{" "}
          <span>cat blog.md</span>
          <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse align-middle" aria-hidden="true" />
        </div>
        {children}
      </div>
    </main>
  )
}
