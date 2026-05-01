import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog és cikkek",
  description:
    "Sakkcikkek a megnyitóktól a végjátékig, stratégiától a pszichológiáig. Rendszeresen frissülő tartalom minden szintű sakkozónak.",
  keywords: ["sakk blog", "sakkcikkek", "sakk megnyitók", "sakk végjáték", "sakkstratégia cikkek"],
  alternates: { canonical: "https://hungarychess.com/blog" },
  openGraph: {
    title: "Blog és cikkek",
    description: "Sakkcikkek a megnyitóktól a végjátékig. Rendszeresen frissülő tartalom.",
    url: "https://hungarychess.com/blog",
    siteName: "HungaryChess",
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog és cikkek | HungaryChess",
    description: "Sakkcikkek a megnyitóktól a végjátékig. Rendszeresen frissülő tartalom.",
  },
}

const categories = Array.from(new Set(blogPosts.map((p) => p.category)))

export default function BlogPage() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Blog
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mt-4 leading-tight text-balance max-w-2xl">
            Cikkek és elemzések
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Rendszeresen frissülő tartalmak a sakk minden területéről:
            megnyitóktól a végjátékig, taktikától a pszichológiáig.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="text-xs font-semibold uppercase tracking-widest text-muted-foreground border border-border px-3 py-1.5"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-14 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                width={800}
                height={520}
                className="w-full h-72 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {featured.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {featured.readTime} perc olvasás
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
                {featured.title}
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                {featured.excerpt}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-200">
                Cikk olvasása
                <span className="text-base leading-none transition-transform duration-200 group-hover:translate-x-1" aria-hidden>
                  &rarr;
                </span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Remaining articles grid */}
      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                <div className="overflow-hidden mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={380}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime} perc
                  </span>
                </div>
                <h2 className="font-serif text-xl font-bold text-foreground leading-snug text-balance flex-1">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-200">
                  Olvasás
                  <span className="text-base leading-none transition-transform duration-200 group-hover:translate-x-1" aria-hidden>
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-serif text-2xl font-bold text-foreground text-balance max-w-xl">
            Kérdése van, vagy szeretne kapcsolatba lépni velünk?
          </p>
          <Link
            href="/rolunk"
            className="flex-shrink-0 px-8 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/85 transition-colors"
          >
            Kapcsolatfelvétel
          </Link>
        </div>
      </section>
    </>
  )
}
