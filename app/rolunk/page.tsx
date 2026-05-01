"use client"

import type { Metadata } from "next"
import { useState } from "react"
import Link from "next/link"

// Metadata cannot be exported from client component, so we handle it in a separate layout
// The title is set via a static export in rolunk/layout.tsx

type FormState = "idle" | "loading" | "success" | "error"

export default function RolunkPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [formState, setFormState] = useState<FormState>("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate() {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = "A név megadása kötelező."
    if (!email.trim()) {
      errs.email = "Az e-mail cím megadása kötelező."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Érvényes e-mail cím szükséges."
    }
    if (!message.trim()) errs.message = "Az üzenet megadása kötelező."
    if (!agreed)
      errs.agreed = "Az adatkezelési tájékoztató elfogadása szükséges."
    return errs
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setFormState("loading")

    // Simulate send — replace with real API call as needed
    await new Promise((res) => setTimeout(res, 1200))
    setFormState("success")
  }

  function handleClose() {
    setFormState("idle")
    setName("")
    setEmail("")
    setMessage("")
    setAgreed(false)
  }

  return (
    <>
      {/* Page Header */}
      <section className="py-20 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Rólunk
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mt-4 leading-tight text-balance max-w-2xl">
            Rólunk és kapcsolat
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A HungaryChess célja a sakk magyarországi hagyományainak
            bemutatása és a sakkozói tudás terjesztése. Kérdéseit az
            alábbi űrlapon keresztül küldheti el.
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Küldetésünk
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 leading-tight text-balance">
                Miért jött létre a HungaryChess?
              </h2>
              <div className="flex flex-col gap-5 mt-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Az oldal azért jött létre, hogy egyetlen helyen legyen
                  elérhető minden, amit a sakk magyarországi jelenéről és
                  múltjáról tudni érdemes. A terjedelmes elmélet, a
                  versenyszabályok és a taktikai alapok egy átlátható,
                  könnyen olvasható formában kerülnek bemutatásra.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Tartalmainkat olyan elvek mentén állítjuk össze, amelyek
                  mind a kezdő, mind a tapasztaltabb sakkozóknak értéket
                  jelentenek. Célunk, hogy az itt megjelenő ismeretek
                  valóban alkalmazhatóak legyenek a gyakorlatban.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Az oldalon kizárólag általános, tárgyilagos tartalmak
                  szerepelnek. Nem közölt információ: konkrét szervezetek,
                  klubok vagy kereskedelmi ajánlások.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="border border-border p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Kapcsolat
                </span>
                <p className="font-serif text-2xl font-bold text-foreground mt-3 leading-tight">
                  Írjon nekünk e-mailben
                </p>
                <a
                  href="mailto:info@hungarychess.com"
                  className="mt-4 block text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  info@hungarychess.com
                </a>
              </div>

              <div className="border border-border p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Tartalom
                </span>
                <p className="font-serif text-2xl font-bold text-foreground mt-3 leading-tight">
                  Rendszeres frissítés
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Az oldal tartalmait rendszeresen frissítjük és bővítjük.
                  A blog rovatban az aktuális cikkek, a többi oldalon
                  az állandó ismeretanyag érhető el.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary border-b border-border" id="kapcsolat">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Kapcsolatfelvétel
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 leading-tight text-balance">
                Küldjön üzenetet
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mt-5">
                Töltse ki az űrlapot, és válaszolunk az{" "}
                <strong className="font-semibold text-foreground">
                  info@hungarychess.com
                </strong>{" "}
                e-mail-fiókból.
              </p>
              <div className="mt-8 flex flex-col gap-4 text-sm text-muted-foreground">
                <p>Az összes mező kitöltése kötelező.</p>
                <p>
                  Adatait kizárólag a megkeresés megválaszolása céljából
                  kezeljük.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                  >
                    Teljes név
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Az Ön neve"
                    className={`w-full bg-background border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring transition-colors ${
                      errors.name ? "border-destructive" : "border-border"
                    }`}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-destructive mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                  >
                    E-mail cím
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="pelda@email.com"
                    className={`w-full bg-background border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring transition-colors ${
                      errors.email ? "border-destructive" : "border-border"
                    }`}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-destructive mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                  >
                    Üzenet
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Írja ide üzenetét..."
                    className={`w-full bg-background border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring transition-colors resize-none ${
                      errors.message ? "border-destructive" : "border-border"
                    }`}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5 flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="sr-only"
                        aria-describedby={errors.agreed ? "agreed-error" : undefined}
                        aria-invalid={!!errors.agreed}
                      />
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          agreed
                            ? "bg-primary border-primary"
                            : errors.agreed
                            ? "border-destructive bg-background"
                            : "border-border bg-background group-hover:border-primary/60"
                        }`}
                        aria-hidden
                      >
                        {agreed && (
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            className="text-primary-foreground"
                          >
                            <path
                              d="M1 4L3.5 6.5L9 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Elolvastam és elfogadom az{" "}
                      <Link
                        href="/adatvedelem"
                        className="text-foreground underline underline-offset-2 hover:text-primary transition-colors"
                      >
                        adatvédelmi tájékoztatót
                      </Link>
                      , és hozzájárulok adataim kezeléséhez.
                    </span>
                  </label>
                  {errors.agreed && (
                    <p id="agreed-error" className="text-xs text-destructive mt-1 pl-7">
                      {errors.agreed}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="px-10 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "loading" ? "Küldés folyamatban..." : "Üzenet elküldése"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {formState === "success" && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-foreground/50"
            onClick={handleClose}
            aria-hidden
          />

          {/* Panel */}
          <div className="relative z-10 bg-background border border-border max-w-md w-full p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Sikeresen elküldve
            </p>
            <h2
              id="popup-title"
              className="font-serif text-3xl font-bold text-foreground leading-tight"
            >
              Köszönjük üzenetét
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              Megkaptuk megkeresését. Hamarosan válaszolunk az{" "}
              <strong className="font-semibold text-foreground">
                info@hungarychess.com
              </strong>{" "}
              e-mail-fiókból.
            </p>
            <button
              onClick={handleClose}
              className="mt-8 px-8 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/85 transition-colors"
            >
              Bezárás
            </button>
          </div>
        </div>
      )}
    </>
  )
}
