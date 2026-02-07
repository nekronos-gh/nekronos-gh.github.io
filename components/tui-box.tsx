import React from "react"
interface TuiBoxProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function TuiBox({ title, children, className = "" }: TuiBoxProps) {
  return (
    <div className={`relative ${className}`}>
      {title && (
        <div className="flex items-center gap-2 mb-1">
          <span className="text-muted-foreground">{"##"}</span>
          <span className="text-primary font-bold">{title}</span>
        </div>
      )}
      <div className="border border-border rounded-sm p-4 bg-card text-card-foreground">
        {children}
      </div>
    </div>
  )
}

export function TuiDivider() {
  return (
    <div className="text-border select-none my-6 overflow-hidden" aria-hidden="true">
      {"─".repeat(80)}
    </div>
  )
}

export function TuiTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-border rounded-sm px-2 py-0.5 text-xs text-muted-foreground bg-secondary">
      {children}
    </span>
  )
}
