import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Technika és hasznos tanácsok",
  description:
    "Hasznos tanácsok és technikák kezdőknek és haladóknak egyaránt: gondolkodási folyamat fejlesztése, versenyfelkészülés, időgazdálkodás.",
  keywords: ["sakk technika", "sakk tanácsok", "sakkozás kezdőknek", "sakk haladóknak", "versenyfelkészülés"],
  alternates: { canonical: "https://hungarychess.com/technika" },
  openGraph: {
    title: "Technika és hasznos tanácsok",
    description: "Technikák és tanácsok kezdőknek és haladóknak: gondolkodás, felkészülés, időgazdálkodás.",
    url: "https://hungarychess.com/technika",
    siteName: "HungaryChess",
    locale: "hu_HU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technika és hasznos tanácsok | HungaryChess",
    description: "Technikák és tanácsok kezdőknek és haladóknak.",
  },
}

const beginnerTips = [
  {
    no: "01",
    title: "Tanulja meg a figurák értékét",
    text: "A gyalog értéke 1 pont, a huszáré és futóé 3 pont, a bástyáé 5, a vezéré 9. A király végtelen értékű. Ez az értékrendszer segít meghatározni, mikor érdemes cserét ajánlani.",
  },
  {
    no: "02",
    title: "Ne mozgassa ugyanazt a figurát kétszer a megnyitóban",
    text: "A megnyitóban minden lépéssel egy új figurát kell aktiválni. Ha ugyanazt a bábút kétszer mozdítja el, az ellenfél egy lépéselőnyt szerez, amelyet a középjátékban ki tud aknázni.",
  },
  {
    no: "03",
    title: "Sáncoljunk időben",
    text: "A király biztonságba helyezése az egyik legfontosabb megnyitói cél. A sáncolatlan király sebezhetővé válik a nyílt vonalakon. Lehetőleg az első tíz lépésen belül hajtsa végre a sáncolást.",
  },
  {
    no: "04",
    title: "Gondolkodjon az ellenfél lépései előtt",
    text: "Mielőtt saját lépését megtenné, mindig kérdezze meg: mit tervez az ellenfél? Milyen fenyegetést hajthat végre? Erre a kérdésre válaszolva elkerülheti a legtöbb kezdeti taktikai hibát.",
  },
  {
    no: "05",
    title: "Soha ne adja oda figuráját ingyen",
    text: "Ha az ellenfél fenyeget egy figuráját, mindig reagáljon: mentse meg, védje le, vagy cserélje el azzal, hogy az ellenfélnek egyenértékű vagy nagyobb veszteséget okoz.",
  },
  {
    no: "06",
    title: "Elemezze be a vesztes partikat",
    text: "A vereségből lehet a legtöbbet tanulni. A vesztes partik alapos elemzése megmutatja, hol történt a döntő hiba, és segít abban, hogy hasonló helyzetben jobban döntsön.",
  },
]

const proTips = [
  {
    no: "07",
    title: "Gondolkodja végig a tervét lépésről lépésre",
    text: "Ne csupán az általános irányt határozza meg, hanem konkrétan gondolja végig: melyik figurát, melyik mezőre, milyen sorrendben. Egy homályos terv könnyen kudarcba fullad.",
  },
  {
    no: "08",
    title: "Keressen ellentaktikát minden lépésnél",
    text: "Miután megtalálta a legjobb lépést, kérdezze meg: az ellenfél visszatámadhat-e? Ezzel elkerülheti az úgynevezett blunder-okat, amelyek sokszor a vélt nyerő lépések következményei.",
  },
  {
    no: "09",
    title: "Kezelje az időt tudatosan",
    text: "Egyenletesen ossza el az időt a nehéz pozíciókra. A megnyitóban ne gondolkodjon sokat, a kritikus elágazásoknál viszont szánja rá a szükséges időt.",
  },
  {
    no: "10",
    title: "Tanulja meg a klasszikus partikat",
    text: "A sakktörténelem nagy mesterpartijai szisztematikusan tanítják a taktikai és stratégiai elveket. Ezek tanulmányozásával gyorsabb az előrehaladás, mint a puszta taktikai feladatok megoldásánál.",
  },
  {
    no: "11",
    title: "Versenyen kontrollálja az érzelmeit",
    text: "A vesztes pozíció nem mindig döntő. Sok partija fordul meg, mert az ellenfél elveszíti koncentrációját. Maradjon higgadt, keressen lehetőségeket, és soha ne adja fel idő előtt.",
  },
  {
    no: "12",
    title: "Rendszeres edzés nélkül nincs fejlődés",
    text: "A sakk készségek rendszeres edzést igényelnek. Napi taktikai feladatok megoldása, partielemzés és játék a fejlődés alapjai. A rövid, rendszeres ülések hatékonyabbak az alkalmi hosszú edzéseknél.",
  },
]

const thinking = [
  {
    step: "1",
    title: "Helyzetelemzés",
    desc: "Mit fenyeget az ellenfél? Milyen szabad figuráim vannak? Hol vannak a gyenge pontok mindkét oldalon?",
  },
  {
    step: "2",
    title: "Lehetőségek gyűjtése",
    desc: "Sorolja fel az összes ésszerű jelöltet. Ne hagyjon ki semmit, mert a legjobb lépés néha meglepő helyen rejtőzik.",
  },
  {
    step: "3",
    title: "Taktikai ellenőrzés",
    desc: "Van-e matt kombináció? Lehet-e anyagot nyerni? Van-e fenyegetés, amelyre azonnal reagálni kell?",
  },
  {
    step: "4",
    title: "Stratégiai értékelés",
    desc: "Melyik lépés javítja legjobban a pozíciómat? Melyik tervet kívánja meg az adott állás?",
  },
  {
    step: "5",
    title: "A lépés elvégzése",
    desc: "Mielőtt a figurát elengedi, még egyszer ellenőrizze: az ellenfél visszatámadhat-e valamit? Nincs-e blunder?",
  },
]

export default function TechnikaPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Technika és tanácsok
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mt-4 leading-tight text-balance max-w-2xl">
            Tanácsok kezdőknek és haladóknak
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A sakk technikájának elsajátítása folyamatos fejlődés. Az
            alábbi tanácsok segítenek a gondolkodási folyamat javításában
            és a versenyfelkészülésben.
          </p>
        </div>
      </section>

      {/* Thinking Process */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Gondolkodási módszer
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              A helyes gondolkodási folyamat
            </h2>
          </div>
          <div className="flex flex-col">
            {thinking.map((t) => (
              <div
                key={t.step}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-border"
              >
                <div className="md:col-span-1">
                  <span className="font-serif text-3xl font-bold text-border">
                    {t.step}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {t.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beginner Tips */}
      <section className="py-20 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Kezdőknek
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Az első lépések
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
            {beginnerTips.map((t, i) => (
              <div
                key={i}
                className={`p-8 border-b border-border ${i % 2 === 0 ? "md:border-r" : ""}`}
              >
                <span className="font-serif text-3xl font-bold text-border">
                  {t.no}
                </span>
                <h3 className="font-serif text-lg font-bold text-foreground mt-4 leading-snug">
                  {t.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Haladóknak
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Haladó technikák és versenyfelkészülés
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-border">
            {proTips.map((t) => (
              <div
                key={t.no}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4"
              >
                <div className="md:col-span-1">
                  <span className="font-serif text-2xl font-bold text-border">
                    {t.no}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-serif text-lg font-bold text-foreground leading-snug">
                    {t.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-serif text-2xl font-bold text-foreground text-balance max-w-xl">
            Olvassa tovább a blogon friss sakkos cikkeinket.
          </p>
          <Link
            href="/blog"
            className="flex-shrink-0 px-8 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/85 transition-colors"
          >
            Blog
          </Link>
        </div>
      </section>
    </>
  )
}
