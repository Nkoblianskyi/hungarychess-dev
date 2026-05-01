"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("hungarychess_cookie_consent")
    if (!consent) {
      setVisible(true)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem("hungarychess_cookie_consent", "accepted")
    setVisible(false)
  }

  function handleDecline() {
    localStorage.setItem("hungarychess_cookie_consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Süti hozzájárulás"
      className="fixed bottom-0 left-0 right-0 z-50 bg-foreground text-primary-foreground border-t border-border/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm leading-relaxed text-primary-foreground/90 max-w-2xl">
          Ez a weboldal sütiket (cookie-kat) használ a felhasználói élmény javítása érdekében.
          A weboldal használatával hozzájárul a sütik alkalmazásához. Részletekért tekintse meg{" "}
          <Link
            href="/sutik"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            süti szabályzatunkat
          </Link>{" "}
          és{" "}
          <Link
            href="/adatvedelem"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            adatvédelmi szabályzatunkat
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="text-sm px-5 py-2 border border-primary-foreground/30 text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/60 transition-colors"
          >
            Elutasítom
          </button>
          <button
            onClick={handleAccept}
            className="text-sm px-5 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  )
}
