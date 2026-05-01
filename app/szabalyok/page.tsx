import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Szabályok és versenyformátumok",
  description:
    "A sakkszabályok, versenyformátumok, pontozási rendszer és az Élő-féle ranglistaszámítás részletes bemutatása kezdőknek és haladóknak.",
  keywords: ["sakkszabályok", "versenyformátumok", "Élő-pontszám", "sakk pontozás", "rapid sakk", "blitz sakk"],
  alternates: { canonical: "https://hungarychess.com/szabalyok" },
  openGraph: {
    title: "Szabályok és versenyformátumok",
    description: "Sakkszabályok, versenyformátumok és ranglistaszámítás részletesen.",
    url: "https://hungarychess.com/szabalyok",
    siteName: "HungaryChess",
    locale: "hu_HU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Szabályok és versenyformátumok | HungaryChess",
    description: "Sakkszabályok, versenyformátumok és ranglistaszámítás részletesen.",
  },
}

const formats = [
  {
    name: "Klasszikus sakk",
    time: "90 perc + 30 mp/lépés",
    desc: "A legtekintélyesebb formátum, amelyet a komolyabb versenyeken alkalmaznak. Minden lépésnél 30 másodpercet kap a játékos a gondolkodási időhöz, ami csökkenti az időzavart.",
  },
  {
    name: "Rapid sakk",
    time: "15-25 perc",
    desc: "Játékosonként 15-25 perc áll rendelkezésre a teljes partihoz, általában 10 másodperces inkrementtel. Egyre népszerűbb formátum, mert gyors döntéshozatalt igényel.",
  },
  {
    name: "Blitz sakk",
    time: "3-5 perc",
    desc: "A gyors formátumok közé tartozik. Az időkontroll általában 3 perc + 2 másodperc/lépés, vagy 5 perc fix. Szórakoztató és látványos, de pontatlanabb játékot eredményez.",
  },
  {
    name: "Bullet sakk",
    time: "1-2 perc",
    desc: "Rendkívül gyors formátum, amelyben az ösztön és az előzetesen jól begyakorolt pozíciók döntenek. Leginkább az internetes sakkozásban elterjedt.",
  },
]

const scoring = [
  { result: "Győzelem", points: "1 pont" },
  { result: "Döntetlen", points: "0,5 pont" },
  { result: "Vereség", points: "0 pont" },
]

const movements = [
  { piece: "Gyalog", rule: "Egyenesen előre lép (egy vagy két mezőt az első lépésnél), átlósan üt. Speciális szabály: en passant és átalakulás." },
  { piece: "Huszár", rule: "L alakú lépés: két mező egy irányba, egy mező oldalra. Átugorja a többi figurát. Különlegesen hasznos zárt pozíciókban." },
  { piece: "Futó", rule: "Korlátlan számú mezőn léphet átlósan. Mindig azonos színű mezőkön marad. Nyílt átlókon rendkívül erős." },
  { piece: "Bástya", rule: "Vízszintesen és függőlegesen léphet korlátlan mezőn. Különösen erős nyílt vonalakon és végjátékban." },
  { piece: "Vezér", rule: "A legerősebb figura: a bástya és a futó mozgásait egyesíti. Egyenesen és átlósan is léphet korlátlan távolságra." },
  { piece: "Király", rule: "Egyszerre csak egy mezőt léphet bármely irányba. Speciális szabály: sáncolás a bástyával. Sakk elleni védekezés kötelező." },
]

export default function SzabalyokPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Szabályok
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mt-4 leading-tight text-balance max-w-2xl">
            Szabályok és versenyformátumok
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A sakk szabályai egyszerre egyszerűek és mélyek. Az alábbi
            összefoglaló bemutatja a figurák mozgását, a versenyformátumokat
            és a ranglistás pontozás rendszerét.
          </p>
        </div>
      </section>

      {/* Piece Movement */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Alapszabályok
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              A figurák mozgása
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-border">
            {movements.map((m) => (
              <div
                key={m.piece}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4"
              >
                <div className="md:col-span-2">
                  <span className="font-serif text-lg font-bold text-foreground">
                    {m.piece}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {m.rule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Rules */}
      <section className="py-20 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Különleges szabályok
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Speciális lépések és helyzetek
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Sáncolás
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mt-3">
                Egyszerre mozgatja a királyt és a bástyát. A király kettőt lép
                a bástya felé, a bástya átlép a király másik oldalára. Csak
                akkor hajtható végre, ha sem a király, sem a bástya nem lépett
                korábban, a köztük lévő mezők szabadok, és a király nem áll
                sakkon, nem haladhat át sakkon, és nem kerülhet sakkba.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-serif text-xl font-bold text-foreground">
                En passant
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mt-3">
                Ha az ellenfél gyalogja az alap pozícióból két mezőt lép, és
                ezzel a saját gyalogunk mellé kerül, a saját gyalogunk
                üthetőnek tekinti azt, mintha csak egy mezőt lépett volna.
                Ez a lépés csak közvetlenül az illető lépés után hajtható
                végre.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Gyalog átalakulás
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mt-3">
                Ha a gyalog eléri az ellenfél alap sorát (8. sor fehérnek,
                1. sor feketének), a játékos bármelyik másik figurává
                átalakíthatja. Általában vezérré alakítják, de bizonyos
                helyzetekben más figura is előnyösebb lehet.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Sakk, matt és pat
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mt-3">
                Sakk: a király közvetlen veszélynek van kitéve. Matt: a
                király sakkban van és nem menekülhet, a partia végeredménye.
                Pat: a soron következő játékos nem tud szabályos lépést tenni,
                de nem áll sakkban. Döntetlen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Formats */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Versenyformátumok
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Játékformátumok és időkontroll
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
            {formats.map((f, i) => (
              <div
                key={i}
                className="p-8 border-b md:odd:border-r border-border last:border-b-0 md:last:border-b"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {f.name}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent bg-accent/10 px-2 py-1 flex-shrink-0">
                    {f.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scoring & Rating */}
      <section className="py-20 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Pontozás
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground mt-3 text-balance">
                A verseny pontozása
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mt-5 mb-8">
                A versenyeken a helyezés meghatározásához a pontokat adjuk
                össze. A svájci rendszerű versenyeken az azonos pontszámú
                játékosok kerülnek szembe egymással.
              </p>
              <div className="flex flex-col divide-y divide-border border border-border">
                {scoring.map((s) => (
                  <div
                    key={s.result}
                    className="flex items-center justify-between px-6 py-4"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {s.result}
                    </span>
                    <span className="font-serif text-lg font-bold text-primary">
                      {s.points}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Ranglisták
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground mt-3 text-balance">
                Az ranglistaszám-számítás
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mt-5">
                A nemzetközi ranglistás pontozás a várható eredmény és a
                tényleges eredmény különbségén alapul. Minél nagyobb az
                ellenfél pontszáma, annál nagyobb a nyeréssel szerezhető
                pontszám.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mt-4">
                Az újonnan belépők magasabb K-értékkel rendelkeznek, ami
                gyorsabb változást tesz lehetővé. A tapasztaltabb játékosok
                K-értéke alacsonyabb, ami a pontszám stabilitását biztosítja.
              </p>
              <div className="mt-8 p-6 bg-background border border-border">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  K-értékek
                </p>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Új játékos (kevesebb mint 30 parti)</span>
                    <span className="font-semibold text-foreground">K = 40</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Általános kategória</span>
                    <span className="font-semibold text-foreground">K = 20</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Nagymester szint</span>
                    <span className="font-semibold text-foreground">K = 10</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-serif text-2xl font-bold text-foreground text-balance max-w-xl">
            Lépjen tovább a taktika és a stratégia világába.
          </p>
          <Link
            href="/taktika"
            className="flex-shrink-0 px-8 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/85 transition-colors"
          >
            Taktika és stratégia
          </Link>
        </div>
      </section>
    </>
  )
}
