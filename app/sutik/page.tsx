import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Süti szabályzat | HungaryChess",
  description:
    "A HungaryChess süti (cookie) szabályzata — milyen sütiket használunk és hogyan kezeljük őket.",
}

const updatedDate = new Date().toLocaleDateString("hu-HU", {
  year: "numeric",
  month: "long",
  day: "numeric",
})

const sections = [
  {
    title: "Mi az a süti?",
    text: "A sütik (cookie-k) kis szöveges fájlok, amelyeket egy weboldal helyez el az Ön eszközén (számítógépén, telefonján vagy táblagépén) amikor meglátogatja az oldalt. A sütik segítenek az oldalnak megjegyezni az Ön preferenciáit és javítják a felhasználói élményt.",
  },
  {
    title: "Milyen sütiket használunk?",
    text: "Weboldalunk kizárólag alapvető funkcionális sütiket alkalmaz, amelyek az oldal megfelelő működéséhez szükségesek. Ezek közé tartozik a sütihozzájárulás tárolása, amely megjegyzi, hogy Ön elfogadta vagy elutasította a sütik alkalmazását. Nem alkalmazunk marketing- vagy analitikai sütiket.",
  },
  {
    title: "Hozzájárulás alapú sütik",
    text: "Bizonyos sütikhez az Ön hozzájárulása szükséges. Ezeket csak akkor helyezzük el eszközén, ha Ön az oldal alján megjelenő sütibanner segítségével jóváhagyta azok alkalmazását. A hozzájárulást bármikor visszavonhatja a böngészője beállításaiban a sütik törlésével.",
  },
  {
    title: "Sütik kezelése és törlése",
    text: "A sütik kezelésére és törlésére a böngészője beállításain keresztül van lehetősége. A legtöbb böngésző lehetőséget nyújt a sütik megtekintésére, törlésére és blokkolására. Kérjük, vegye figyelembe, hogy bizonyos sütik letiltása esetén az oldal egyes funkciói nem működhetnek megfelelően.",
  },
  {
    title: "Harmadik felek sütijei",
    text: "Jelenleg weboldalunk nem alkalmaz harmadik fél által elhelyezett sütiket (pl. közösségi média, hirdetési hálózatok). Ha ez a jövőben megváltozna, a szabályzatot frissítjük és arról tájékoztatjuk látogatóinkat.",
  },
  {
    title: "Kapcsolat",
    text: "Amennyiben kérdése merül fel sütiszabályzatunkkal kapcsolatban, kérjük, vegye fel velünk a kapcsolatot az info@hungarychess.com e-mail-címen, vagy a kapcsolatfelvételi oldalunkon.",
  },
]

export default function SutikPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Jogi információk
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mt-4 leading-tight text-balance max-w-2xl">
            Süti szabályzat
          </h1>
          <p className="mt-6 text-sm text-muted-foreground">
            Utolsó frissítés: {updatedDate}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                  Tartalom
                </p>
                <ul className="flex flex-col gap-3">
                  {sections.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 w-4 h-px bg-border flex-shrink-0" />
                      <span className="text-xs text-muted-foreground leading-relaxed">
                        {s.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-9 max-w-3xl flex flex-col gap-10">
              {sections.map((s, i) => (
                <div key={i} className="border-t border-border pt-8 first:border-t-0 first:pt-0">
                  <h2 className="font-serif text-2xl font-bold text-foreground leading-snug">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    {s.text}
                  </p>
                </div>
              ))}

              <div className="border-t border-border pt-8 mt-4">
                <Link
                  href="/adatvedelem"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200 group"
                >
                  Adatvédelmi szabályzat megtekintése
                  <span
                    className="text-base leading-none transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
