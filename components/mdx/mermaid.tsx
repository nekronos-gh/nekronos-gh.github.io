"use client";

import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";


export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize with a dark theme to match your setup
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
    });

    if (ref.current) {
      // Force Mermaid to render the graph inside this specific div
      mermaid.run({ nodes: [ref.current] });
    }
  }, [chart]);

  return (
    // The key forces React to re-mount if the chart text changes (great for hot-reloading!)
    <div key={chart} ref={ref} className="flex justify-center my-6">
      {chart}
    </div>
  );
}
