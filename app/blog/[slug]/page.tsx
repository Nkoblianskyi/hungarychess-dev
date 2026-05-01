import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getBlogPost, getAllSlugs, blogPosts } from "@/lib/blog-data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | HungaryChess`,
    description: post.excerpt,
  }
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <>
      {/* Article Header */}
      <section className="pt-20 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">&larr;</span>
            Vissza a blogra
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {post.readTime} perc olvasás
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance max-w-4xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl pb-14">
            {post.excerpt}
          </p>
        </div>

        {/* Full-width hero image */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={1400}
              height={560}
              className="w-full h-64 md:h-96 object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                  Tartalom
                </p>
                <ul className="flex flex-col gap-3">
                  {post.content.map((_, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-4 h-px bg-border flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">
                        {i + 1}. bekezdés
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main content */}
            <article className="lg:col-span-9 max-w-3xl">
              <div className="flex flex-col gap-8">
                {post.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Bottom tag */}
              <div className="mt-16 pt-10 border-t border-border">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                  Kategória
                </p>
                <span className="text-sm font-medium text-accent">
                  {post.category}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="border-t border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="py-10 pr-0 md:pr-12">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className="group block">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    &larr; Előző cikk
                  </span>
                  <p className="font-serif text-xl font-bold text-foreground mt-3 leading-snug group-hover:text-primary transition-colors text-balance">
                    {prevPost.title}
                  </p>
                </Link>
              ) : (
                <Link href="/blog" className="group block">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    &larr; Vissza a listára
                  </span>
                  <p className="font-serif text-xl font-bold text-foreground mt-3 leading-snug group-hover:text-primary transition-colors">
                    Összes cikk
                  </p>
                </Link>
              )}
            </div>

            <div className="py-10 pl-0 md:pl-12 text-left md:text-right">
              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} className="group block">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Következő cikk &rarr;
                  </span>
                  <p className="font-serif text-xl font-bold text-foreground mt-3 leading-snug group-hover:text-primary transition-colors text-balance">
                    {nextPost.title}
                  </p>
                </Link>
              ) : (
                <Link href="/blog" className="group block">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Vissza a listára &rarr;
                  </span>
                  <p className="font-serif text-xl font-bold text-foreground mt-3 leading-snug group-hover:text-primary transition-colors">
                    Összes cikk
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
