import Link from "next/link";
import { TuiDivider } from "@/components/tui-box";

const slugs = ["first-of-many", "ukl", "tesla"];

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
      <div className="mb-8">
        <Link href="/blogs" className="text-primary hover:underline text-sm">
          {"<"} back to blogs
        </Link>
      </div>

      <article className="prose-terminal">
        <Content />
        <footer className="mt-12 mb-4 text-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/52/No_AI.svg"
            alt="No AI"
            className="inline h-6 opacity-30 select-none"
            title="AI-free content"
          />
        </footer>
      </article>

      <TuiDivider />

      <Link href="/blogs" className="text-primary hover:underline text-sm">
        {"<"} back to blogs
      </Link>
    </>
  );
}
