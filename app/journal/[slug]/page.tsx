import { client } from "@/sanity/client";
import { postBySlugQuery, postsQuery } from "@/sanity/queries";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

export const revalidate = 60;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  publishedAt: string;
  excerpt: string;
  body: PortableTextBlock[];
}

export async function generateStaticParams() {
  const posts: Post[] = await client.fetch(postsQuery);
  return posts.map((post) => ({ slug: post.slug.current }));
}

const components = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-base text-[#333330] leading-[1.85] font-light mb-6">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="serif text-3xl text-[#111111] mt-16 mb-6">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="serif text-2xl text-[#111111] mt-12 mb-4">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 border-[#0070ad] pl-6 my-8 serif italic text-xl text-[#444440] leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-medium text-[#111111]">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer"
        className="text-[#0070ad] underline underline-offset-4 hover:opacity-70 transition-opacity">
        {children}
      </a>
    ),
  },
};

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post: Post = await client.fetch(postBySlugQuery, { slug: params.slug });
  if (!post) notFound();

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <>
      <Nav />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto w-full px-8 md:px-16">

          {/* Header */}
          <div className="py-24 border-b border-[#e8e8e4]">
            <div className="flex items-center gap-6 mb-10">
              <Link href="/" className="label-text text-[#888884] hover:text-[#111111] transition-colors">
                ← Home
              </Link>
              <span className="text-[#e8e8e4]">|</span>
              <Link href="/journal" className="label-text text-[#888884] hover:text-[#111111] transition-colors">
                Journal
              </Link>
              {post.category && (
                <>
                  <span className="text-[#e8e8e4]">|</span>
                  <span className="label-text text-[#0070ad]">{post.category}</span>
                </>
              )}
            </div>
            <h1 className="serif text-[clamp(2.5rem,6vw,6rem)] leading-[1.05] text-[#111111] max-w-4xl mb-8">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-lg text-[#444440] font-light leading-relaxed max-w-2xl mb-8">
                {post.excerpt}
              </p>
            )}
            <p className="label-text text-[#888884]">{formatDate(post.publishedAt)}</p>
          </div>

          {/* Body */}
          <div className="py-16 max-w-2xl">
            {post.body && <PortableText value={post.body} components={components} />}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
