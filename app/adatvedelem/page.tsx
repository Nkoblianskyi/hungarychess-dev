import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Adatvédelmi szabályzat | HungaryChess",
  description:
    "A HungaryChess adatvédelmi szabályzata — hogyan kezeljük az Ön személyes adatait.",
}

const updatedDate = new Date().toLocaleDateString("hu-HU", {
  year: "numeric",
  month: "long",
  day: "numeric",
})

const sections = [
  {
    title: "Adatkezelő",
    text: "Az adatkezelő a hungarychess.com weboldal üzemeltetője. Az adatkezeléssel kapcsolatos megkereséseket az info@hungarychess.com e-mail-címre lehet küldeni.",
  },
  {
    title: "Milyen adatokat kezelünk?",
    text: "Weboldalunk kizárólag azokat a személyes adatokat kezeli, amelyeket Ön önkéntesen bocsát rendelkezésünkre a kapcsolatfelvételi űrlapon keresztül. Ezek a következők: teljes név, e-mail-cím és az üzenet szövege. Automatikusan nem gyűjtünk azonosítható személyes adatokat az oldal böngészésekor.",
  },
  {
    title: "Az adatkezelés célja",
    text: "Az Ön által megadott adatokat kizárólag a megkeresés megválaszolása céljából használjuk fel. Az adatokat harmadik félnek nem adjuk át, kizárólag az ügyfélszolgálati tevékenységet ellátó munkatársaink férnek hozzá.",
  },
  {
    title: "Az adatkezelés jogalapja",
    text: "Az adatkezelés jogalapja az Ön önkéntes hozzájárulása, amelyet az adatkezelési tájékoztató elfogadásával ad meg az űrlap elküldésekor. Hozzájárulását bármikor visszavonhatja, az a visszavonás előtt végzett adatkezelés jogszerűségét nem érinti.",
  },
  {
    title: "Az adatok tárolásának időtartama",
    text: "A kapcsolatfelvételi üzeneteket és a hozzájuk tartozó adatokat a megkeresés megválaszolásától számított 90 napig tároljuk, ezt követően töröljük azokat, kivéve, ha jogszabály hosszabb megőrzési kötelezettséget ír elő.",
  },
  {
    title: "Az Ön jogai",
    text: "Önt az adatvédelmi jogszabályok alapján az alábbi jogok illetik meg: hozzáférési jog (betekinthet a kezelt adataiba), helyesbítési jog (kérheti pontatlan adatai javítását), törlési jog (kérheti adatai törlését), az adatkezelés korlátozásához való jog, tiltakozáshoz való jog. Ezeket a jogait az info@hungarychess.com e-mail-címen keresztül gyakorolhatja.",
  },
  {
    title: "Adatbiztonság",
    text: "Minden ésszerű technikai és szervezési intézkedést megteszünk az Ön adatainak védelme érdekében a jogosulatlan hozzáféréssel, megváltoztatással, nyilvánosságra hozatallal vagy megsemmisítéssel szemben.",
  },
  {
    title: "Módosítások",
    text: "Fenntartjuk a jogot a jelen adatvédelmi szabályzat módosítására. A módosítás esetén az oldalon közzétesszük az aktualizált változatot és frissítjük a dokumentum dátumát. Az oldal rendszeres látogatásával Ön tudomásul veszi az esetleges változásokat.",
  },
  {
    title: "Panasz és jogérvényesítés",
    text: "Ha úgy véli, hogy adatvédelmi jogait megsértettük, panaszt nyújthat be az illetékes felügyeleti hatósághoz. Magyarországon ez a Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH), amelynek elérhetőségei a naih.hu weboldalon találhatók.",
  },
]

export default function AdatvedelemPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Jogi információk
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mt-4 leading-tight text-balance max-w-2xl">
            Adatvédelmi szabályzat
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
                <div
                  key={i}
                  className="border-t border-border pt-8 first:border-t-0 first:pt-0"
                >
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
                  href="/sutik"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200 group"
                >
                  Süti szabályzat megtekintése
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
