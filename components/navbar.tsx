"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Főoldal" },
  { href: "/tortenet", label: "Történet" },
  { href: "/szabalyok", label: "Szabályok" },
  { href: "/taktika", label: "Taktika" },
  { href: "/technika", label: "Technika" },
  { href: "/blog", label: "Blog" },
  { href: "/rolunk", label: "Rólunk" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
          <Image src="/favicon.ico" alt="HungaryChess" width={32} height={32} />
            <span className="font-serif text-xl font-bold tracking-tight text-foreground">
              Hungary
            </span>
            <span className="font-serif text-xl font-bold tracking-tight text-primary">
              Chess
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Főnavigáció"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-primary font-semibold border-b border-primary pb-0.5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none"
            aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-px w-6 bg-foreground transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-foreground transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-foreground transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-background border-t border-border"
          aria-label="Mobil navigáció"
        >
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2.5 text-sm tracking-wide border-b border-border last:border-none transition-colors ${
                    pathname === link.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
