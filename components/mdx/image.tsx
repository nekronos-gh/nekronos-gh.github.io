"use client";

import NextImage from "next/image";
import { useState } from "react";

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function Image({
  src,
  alt,
  width = 1720,
  height = 880,
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`p-4 rounded-lg transition-all duration-300 mx-auto ${
        isLoading ? "blur-sm scale-105" : "blur-0 scale-100"
      }`}
      onLoad={() => setIsLoading(false)}
    />
  );
}
