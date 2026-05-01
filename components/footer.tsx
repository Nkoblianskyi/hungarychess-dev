import Link from "next/link"

const navLinks = [
  { href: "/tortenet", label: "Történelem" },
  { href: "/szabalyok", label: "Szabályok" },
  { href: "/taktika", label: "Taktika" },
  { href: "/technika", label: "Technika" },
]

const secondaryLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/adatvedelem", label: "Adatvédelmi szabályzat" },
  { href: "/sutik", label: "Süti szabályzat" },
]

const figures = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"]

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground mt-auto">
      {/* Top decorative band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-0 overflow-hidden select-none" aria-hidden="true">
            {figures.map((f, i) => (
              <span
                key={i}
                className="flex-1 text-center py-3 text-white/20 text-lg font-serif"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Large logotype block */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <Link href="/" className="block leading-none">
                <span className="font-serif text-5xl md:text-6xl font-black text-white tracking-tight">
                  Hungary
                </span>
                <span className="font-serif text-5xl md:text-6xl font-black tracking-tight"
                  style={{ color: "oklch(0.68 0.12 75)" }}>
                  Chess
                </span>
              </Link>
              <p className="mt-6 text-sm leading-relaxed text-white/50 max-w-xs">
                A sakk szeretete és hagyományai Magyarországon. Ismeretek,
                történelem és stratégia mindenkinek — kezdőtől a
                haladóig.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest text-white/30 mb-1">
                Kapcsolat
              </span>
              <a
                href="mailto:info@hungarychess.com"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                info@hungarychess.com
              </a>
            </div>
          </div>

          {/* Divider — only on large screens */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-px bg-white/10 h-full" />
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-white/30 mb-2">
              Tartalom
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-white/30 mb-2">
              Egyéb
            </span>
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} HungaryChess. Minden jog fenntartva.
          </p>
          <p className="text-xs text-white/20 font-serif tracking-widest">
            hungarychess.com
          </p>
        </div>
      </div>
    </footer>
  )
}
