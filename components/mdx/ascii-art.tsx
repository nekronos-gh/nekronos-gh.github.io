"use client";

import React from "react";

export default function AsciiArt({ chart }: { chart: string }) {
  return (
    <pre
      style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: "0.85rem",
        lineHeight: "1.2",
        letterSpacing: "0",
        wordSpacing: "0",
        whiteSpace: "pre",
        overflowX: "auto",
        tabSize: 1,
        fontVariantLigatures: "none",
        textRendering: "optimizeSpeed",
        WebkitFontSmoothing: "none",
        MozOsxFontSmoothing: "unset",
      }}
      className="bg-secondary border border-border rounded-sm p-4 my-6"
    >
      {chart}
    </pre>
  );
}
