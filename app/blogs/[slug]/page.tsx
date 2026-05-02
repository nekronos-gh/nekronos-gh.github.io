import Link from "next/link";
import { TuiDivider } from "@/components/tui-box";

const slugs = ["first-of-many", "ukl"];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Content, metadata } = await import(`@/content/${slug}.mdx`);

  return (
    <>
      <article className="prose-terminal">
        <Content />
      </article>

      <TuiDivider />

      <Link href="/blogs" className="text-primary hover:underline text-sm">
        {"<"} back to blogs
      </Link>
    </>
  );
}
