import Link from "next/link"
import { TuiDivider } from "@/components/tui-box"

const slugs = ["hello-world"]

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export const dynamicParams = false

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Content, metadata } = await import(`@/content/${slug}.mdx`)

  return (
    <>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-muted-foreground">{"##"}</span>
        <h1 className="text-primary font-bold text-2xl">{metadata.title}</h1>
      </div>
      <p className="text-xs text-muted-foreground mb-6">{metadata.date}</p>

      <article className="prose-terminal">
        <Content />
      </article>

      <TuiDivider />

      <Link href="/blogs" className="text-primary hover:underline text-sm">
        {"<"} back to blogs
      </Link>
    </>
  )
}
