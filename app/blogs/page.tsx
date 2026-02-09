import Link from "next/link"
import { TuiBox, TuiDivider } from "@/components/tui-box"

import { metadata as helloWorldMeta } from "@/content/hello-world.mdx"

const posts = [
  { slug: "hello-world", metadata: helloWorldMeta },
]

export default function BlogListingPage() {
  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <span className="text-muted-foreground">{"##"}</span>
        <h1 className="text-primary font-bold text-2xl">Blog</h1>
      </div>

      <div className="space-y-4">
        {posts.map(({ slug, metadata }) => (
          <Link key={slug} href={`/blogs/${slug}`} className="block">
            <TuiBox>
              <div className="flex flex-col gap-1">
                <span className="text-primary font-bold hover:underline">
                  {metadata.title}
                </span>
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
  )
}
