import Link from "next/link";
import { TuiBox, TuiDivider } from "@/components/tui-box";
import { readingTime } from "@/lib/utils";
import fs from "fs";
import path from "path";

import { metadata as firstOfMany } from "@/content/first-of-many.mdx";
import { metadata as ukl } from "@/content/ukl.mdx";
import { metadata as tesla } from "@/content/tesla.mdx";
import { metadata as mullerthal } from "@/content/mullerthal.mdx";

const posts = [
  { slug: "mullerthal", metadata: mullerthal },
  { slug: "tesla", metadata: tesla },
  { slug: "ukl", metadata: ukl },
  { slug: "first-of-many", metadata: firstOfMany },
].map((post) => {
  const mdxContent = fs.readFileSync(
    path.join(process.cwd(), "content", `${post.slug}.mdx`),
    "utf-8"
  );
  return {
    ...post,
    readTime: readingTime(mdxContent),
  };
});

export default function BlogListingPage() {
  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <span className="text-muted-foreground">{"#"}</span>
        <h1 className="text-primary font-bold text-2xl">Blogs</h1>
      </div>

      <div className="space-y-4">
        {posts.map(({ slug, metadata, readTime }) => (
          <Link key={slug} href={`/blogs/${slug}`} className="block">
            <TuiBox>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold hover:underline">
                    {metadata.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {readTime}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {metadata.date}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {metadata.description}
                </p>
              </div>
            </TuiBox>
          </Link>
        ))}
      </div>

      <TuiDivider />

      <Link href="/" className="text-primary hover:underline text-sm">
        {"<"} back to home
      </Link>
    </>
  );
}
