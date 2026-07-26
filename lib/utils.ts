import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { remark } from "remark";
import strip from "strip-markdown";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function readingTime(text: string) {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `~${readTime} min read`;
}
