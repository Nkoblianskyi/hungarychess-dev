import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      {children}
    </span>
  )
}

function ArrowLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200 group"
    >
      {children}
      <span
        className="text-base leading-none transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden
      >
        &rarr;
      </span>
    </Link>
  )
}

export default function HomePage() {
  const previewPosts = blogPosts.slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-chess.jpg"
            alt="Sakk tábla"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">
              hungarychess.com
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight text-balance">
              A sakk szíve Magyarországon
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-xl">
              Fedezze fel a sakk gazdag magyarországi hagyományait, szabályait,
              stratégiáit és történelmét egy helyen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/tortenet"
                className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/85 transition-colors"
              >
                Fedezze fel a történetet
              </Link>
              <Link
                href="/blog"
                className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary-foreground/10 transition-colors"
              >
                Blog olvasása
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/10" />
      </section>

      {/* INTRO - About Chess in Hungary */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Bevezető</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight text-balance">
                A sakk Magyarországon: tudás, hagyomány és szenvedély
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-base leading-relaxed text-muted-foreground">
                Magyarország a sakk egyik leggazdagabb hagyományú országa
                Európában. A taktikai mélység és a stratégiai gondolkodás
                iránt érzett szenvedély generációkon keresztül öröklődik,
                és a versenyvilágban is folyamatosan jelen van a magyar
                sakkozói szemlélet.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Ez az oldal azért jött létre, hogy megőrizze és tovább
                adja a sakk tudását: a klasszikus megnyitásoktól a modern
                versenyformátumokig, a kezdők első lépéseitől a haladók
                mély stratégiáiig minden érdeklődőnek szól.
              </p>
              <div className="mt-2">
                <ArrowLink href="/tortenet">Teljes történet</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PREVIEWS GRID */}
      <section className="py-24 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <SectionLabel>Tartalmak</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Mit talál az oldalon?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
            {/* History */}
            <article className="p-8 border-b md:border-b md:border-r border-border flex flex-col justify-between min-h-64">
              <div>
                <p className="font-serif text-5xl font-bold text-border">01</p>
                <h3 className="font-serif text-2xl font-bold text-foreground mt-4 leading-tight">
                  Történet
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  A sakk magyarországi gyökerei a középkorig nyúlnak vissza.
                  Megismerheti a legfontosabb korszakokat és fordulópontokat.
                </p>
              </div>
              <div className="mt-6">
                <ArrowLink href="/tortenet">Olvasás</ArrowLink>
              </div>
            </article>

            {/* Rules */}
            <article className="p-8 border-b lg:border-b lg:border-r border-border flex flex-col justify-between min-h-64">
              <div>
                <p className="font-serif text-5xl font-bold text-border">02</p>
                <h3 className="font-serif text-2xl font-bold text-foreground mt-4 leading-tight">
                  Szabályok és verseny
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  A klasszikus szabályoktól a különböző versenyformátumokig,
                  a pontozástól a ranglistás rendszerig minden összefoglalva.
                </p>
              </div>
              <div className="mt-6">
                <ArrowLink href="/szabalyok">Olvasás</ArrowLink>
              </div>
            </article>

            {/* Tactics */}
            <article className="p-8 border-b border-border flex flex-col justify-between min-h-64">
              <div>
                <p className="font-serif text-5xl font-bold text-border">03</p>
                <h3 className="font-serif text-2xl font-bold text-foreground mt-4 leading-tight">
                  Taktika és stratégia
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Taktikai motívumok, stratégiai alapelvek és fejlesztési
                  program sakkozóknak, akik fejlődni szeretnének.
                </p>
              </div>
              <div className="mt-6">
                <ArrowLink href="/taktika">Olvasás</ArrowLink>
              </div>
            </article>

            {/* Technique */}
            <article className="p-8 md:border-r border-border flex flex-col justify-between min-h-64">
              <div>
                <p className="font-serif text-5xl font-bold text-border">04</p>
                <h3 className="font-serif text-2xl font-bold text-foreground mt-4 leading-tight">
                  Technika és tanácsok
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Hasznos tanácsok kezdőknek és haladóknak egyaránt: a
                  gondolkodási folyamat javításától a versenyfelkészülésig.
                </p>
              </div>
              <div className="mt-6">
                <ArrowLink href="/technika">Olvasás</ArrowLink>
              </div>
            </article>

            {/* Blog */}
            <article className="p-8 lg:border-r border-border flex flex-col justify-between min-h-64 col-span-1 md:col-span-1">
              <div>
                <p className="font-serif text-5xl font-bold text-border">05</p>
                <h3 className="font-serif text-2xl font-bold text-foreground mt-4 leading-tight">
                  Blog és cikkek
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Rendszeresen frissülő cikkek a sakk minden területéről:
                  megnyitóktól a végjátékig, a szabályoktól a pszichológiáig.
                </p>
              </div>
              <div className="mt-6">
                <ArrowLink href="/blog">Összes cikk</ArrowLink>
              </div>
            </article>

            {/* Contact */}
            <article className="p-8 bg-primary flex flex-col justify-between min-h-64">
              <div>
                <p className="font-serif text-5xl font-bold text-primary-foreground/20">06</p>
                <h3 className="font-serif text-2xl font-bold text-primary-foreground mt-4 leading-tight">
                  Kapcsolat
                </h3>
                <p className="text-sm text-primary-foreground/75 mt-3 leading-relaxed">
                  Kérdése van? Írjon nekünk a kapcsolati oldalon keresztül,
                  és hamarosan válaszolunk.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/rolunk"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground hover:gap-3 transition-all duration-200 group"
                >
                  Kapcsolatfelvétel
                  <span
                    className="text-base leading-none transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <SectionLabel>Legújabb cikkek</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
                A blog
              </h2>
            </div>
            <ArrowLink href="/blog">Összes cikk</ArrowLink>
          </div>

          <div className="flex flex-col divide-y divide-border">
            {previewPosts.map((post, i) => (
              <article key={post.slug} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                <div className="md:col-span-1">
                  <span className="font-serif text-2xl font-bold text-border">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {post.category}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(post.date).toLocaleDateString("hu-HU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-serif text-xl font-bold text-foreground leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <div className="md:col-span-2 flex justify-end items-start pt-1">
                  <ArrowLink href={`/blog/${post.slug}`}>Olvasás</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              Kérdése van? Írjon nekünk.
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Kapcsolatfelvételi formunkon keresztül bármikor elérhet minket.
            </p>
          </div>
          <Link
            href="/rolunk"
            className="flex-shrink-0 px-8 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/85 transition-colors"
          >
            Kapcsolat
          </Link>
        </div>
      </section>
    </>
  )
}
