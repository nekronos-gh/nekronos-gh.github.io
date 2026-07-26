"use client"

import type React from "react"
import { usePathname } from "next/navigation"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const slug = pathname.split('/').pop()
  const fileName = slug === "blogs" ? "blogs.md" : `${slug}.md`

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="relative text-xs text-muted-foreground mb-6">
          <span className="text-accent">{"$"}</span>{" "}
          <span>cat {fileName}</span>
        </div>
        {children}
        <div className="text-xs text-muted-foreground mt-6 mb-4">
          <span className="text-accent">{"$"}</span>{" "}
          <span className="inline-block w-2 h-4 bg-primary animate-cursor-blink align-middle" aria-hidden="true" />
        </div>
      </div>
    </main>
  )
}
