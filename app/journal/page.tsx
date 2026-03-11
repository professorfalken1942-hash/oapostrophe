import { client } from "@/sanity/client";
import { postsQuery } from "@/sanity/queries";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  publishedAt: string;
  excerpt: string;
}

export const revalidate = 60;

export default async function JournalPage() {
  const posts: Post[] = await client.fetch(postsQuery);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <>
      <Nav />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto w-full px-8 md:px-16 py-24">

          <div className="mb-24">
            <p className="label-text text-[#888884] mb-6">Journal</p>
            <h1 className="serif text-[clamp(2.5rem,6vw,6rem)] leading-[1.0] text-[#111111]">
              Thoughts,<br />essays,<br />notes.
            </h1>
          </div>

          {posts.length === 0 ? (
            <p className="text-[#888884] font-light">Nothing published yet. Check back soon.</p>
          ) : (
            <div className="flex flex-col divide-y divide-[#e8e8e4]">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/journal/${post.slug.current}`}
                  className="group grid md:grid-cols-4 gap-8 py-10 items-start hover:opacity-70 transition-opacity"
                >
                  <div className="flex flex-col gap-1">
                    <span className="label-text text-[#888884]">{formatDate(post.publishedAt)}</span>
                    {post.category && (
                      <span className="label-text text-[#0070ad]">{post.category}</span>
                    )}
                  </div>
                  <h2 className="serif text-2xl text-[#111111] md:col-span-2 group-hover:text-[#0070ad] transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm text-[#888884] leading-relaxed font-light">{post.excerpt}</p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
