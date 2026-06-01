"use client";

import React from "react";

export default function AsciiArt({ chart }: { chart: string }) {
  return (
    <>
      <style>{`
        .ascii-art-wrapper {
          display: flex;
          justify-content: center;
          overflow-x: auto;
          my: 1.5rem;
        }
        .ascii-art {
          font-family: "Courier New", Courier, monospace;
          font-size: 0.85rem;
          line-height: 1.2;
          letter-spacing: 0;
          word-spacing: 0;
          white-space: pre;
          tab-size: 1;
          font-variant-ligatures: none;
          font-variant-numeric: normal;
          font-feature-settings: normal;
          text-rendering: optimizeSpeed;
          -webkit-font-smoothing: none;
          -moz-osx-font-smoothing: unset;
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
        }
        @media (max-width: 640px) {
          .ascii-art {
            font-size: 0.55rem;
            line-height: 1.15;
          }
        }
      `}</style>
      <div className="ascii-art-wrapper my-6">
        <pre className="ascii-art bg-secondary border border-border rounded-sm p-4">
          {chart}
        </pre>
      </div>
    </>
  );
}
