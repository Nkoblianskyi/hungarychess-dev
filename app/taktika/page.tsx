import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Taktika és stratégia",
  description:
    "Sakktaktikai motívumok és stratégiai alapelvek részletes bemutatása. Tanulási program minden szintű sakkozónak — villa, kettős, áldozat és egyéb motívumok.",
  keywords: ["sakktaktika", "sakkstratégia", "sakk villa", "kettős támadás", "sakk áldozat", "sakkozás tanulás"],
  alternates: { canonical: "https://hungarychess.com/taktika" },
  openGraph: {
    title: "Taktika és stratégia",
    description: "Sakktaktikai motívumok és stratégiai alapelvek minden szintű sakkozónak.",
    url: "https://hungarychess.com/taktika",
    siteName: "HungaryChess",
    locale: "hu_HU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taktika és stratégia | HungaryChess",
    description: "Sakktaktikai motívumok és stratégiai alapelvek minden szintű sakkozónak.",
  },
}

const tactics = [
  {
    no: "01",
    name: "Villa",
    desc: "Egyetlen figura egyszerre két vagy több ellenfélbeli bábút fenyeget. A huszárvilla különösen hatásos, mivel a huszár nem blokkálható.",
  },
  {
    no: "02",
    name: "Kötés",
    desc: "Ha egy figura egy értékesebbet fed el, nem mozdíthat el anélkül, hogy az mögötte álló bábú elveszne. A futó és a bástya kifejezetten alkalmas kötések létrehozására.",
  },
  {
    no: "03",
    name: "Nyílt szál",
    desc: "Ha egy figura megmozdítása feltár egy mögötte elhelyezkedő figura általi fenyegetést. A kétszeres nyílt szálnál a mozduló figura is fenyeget valamit.",
  },
  {
    no: "04",
    name: "Csapda",
    desc: "Az ellenfél egy figurája olyan mezőre kerül, ahonnan nem tud elmenekülni. Ezt a helyzetet a pozíció alapos elemzésével és az ellenfél lehetőségeinek előzetes kizárásával lehet elérni.",
  },
  {
    no: "05",
    name: "Nyílt vonal kihasználása",
    desc: "Nyílt vonalakon a bástyák és a vezér nagy erőt képvisel. A vonalbeli koordináció megteremtése az egyik legfontosabb stratégiai cél a középjátékban.",
  },
  {
    no: "06",
    name: "Gyenge mezők",
    desc: "Az ellenfél gyalogszerkezetében keletkező lyukak olyan mezők, amelyekre saját figuráink tartósan be tudnak telepedni. A gyenge mezőn lévő huszár különösen nehéz eltávolítani.",
  },
  {
    no: "07",
    name: "Áldozat",
    desc: "Anyagi hátrányért pozíciós vagy taktikai előnyt cserélünk. A helyes áldozat az ellenfél pozícióját megbontja, vagy döntő támadást indít.",
  },
  {
    no: "08",
    name: "Elterelés",
    desc: "Az ellenfél egy fontos figuráját eltérítjük a védelmi pozíciójától. Ez lehetővé teszi, hogy az általa fedett pontot vagy bábút megtámadjuk.",
  },
]

const strategicPrinciples = [
  {
    title: "Centrum ellenőrzése",
    text: "A centrális mezők uralma kulcsfontosságú. Aki uralja a középpontot, az uralja a teret, és több lehetősége van figurái aktiválására mindkét szárnyán.",
  },
  {
    title: "Figurák aktivitása",
    text: "Minden figurát a maximálisan aktív pozícióba kell helyezni. A passzív figurák gyengeséget jelentenek: nem fedeznek, nem támadnak, és blokkolják a saját pozíciókat.",
  },
  {
    title: "Gyalogszerkezet",
    text: "Az izolált, visszamaradt és duplázott gyalogok hosszú távú gyengeségek. A gyalogszerkezet megváltoztatása visszafordíthatatlan, ezért minden gyalogmozgást gondosan kell mérlegelni.",
  },
  {
    title: "Királybiztonsíg",
    text: "A király védelme az egész partido meghatározó eleme. A nyílt vonalak a királyhoz vezető utakat jelölik; ezeket el kell zárni, vagy a királyt biztonságba kell helyezni.",
  },
]

const curriculum = [
  { level: "Kezdő", topics: ["Figurák lépései és értékei", "Alapvető matt formák", "Egyszerű taktikai feladatok", "Megnyitói alapelvek"] },
  { level: "Haladó", topics: ["Taktikai motívumok felismerése", "Stratégiai elemzés", "Végjátéki alapok", "Nyitásrepertoár kialakítása"] },
  { level: "Versenyző", topics: ["Mély kombinációk", "Pozíciós döntések", "Partielemzés módszertana", "Pszichológia és versenyfelkészülés"] },
]

export default function TaktikaPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Taktika és stratégia
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mt-4 leading-tight text-balance max-w-2xl">
            Taktikai motívumok és stratégiai elvek
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A sakk taktikai és stratégiai mélysége végtelen. Az alábbi
            tananyag segít felismerni a legfontosabb motívumokat és elveket,
            amelyek a fejlődés alapját képezik.
          </p>
        </div>
      </section>

      {/* Tactics Grid */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Taktikai motívumok
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              A legfontosabb taktikák
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
            {tactics.map((t, i) => (
              <div
                key={i}
                className={`p-8 border-b border-border ${i % 2 === 0 ? "md:border-r" : ""} last:border-b-0 md:last:border-b`}
              >
                <span className="font-serif text-3xl font-bold text-border">
                  {t.no}
                </span>
                <h3 className="font-serif text-xl font-bold text-foreground mt-3">
                  {t.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Principles */}
      <section className="py-20 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Stratégia
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Alapvető stratégiai elvek
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-border">
            {strategicPrinciples.map((p) => (
              <div
                key={p.title}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4"
              >
                <div className="md:col-span-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground leading-tight">
                    {p.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Tanulási program
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Fejlesztési szintek
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
            {curriculum.map((c, i) => (
              <div
                key={i}
                className={`p-8 ${i < curriculum.length - 1 ? "border-b md:border-b-0 md:border-r" : ""} border-border`}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {c.level}
                </span>
                <ul className="mt-6 flex flex-col gap-3">
                  {c.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <span className="mt-1.5 flex-shrink-0 w-1 h-1 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-serif text-2xl font-bold text-foreground text-balance max-w-xl">
            Ismerje meg a technika és a napi fejlesztési tanácsokat is.
          </p>
          <Link
            href="/technika"
            className="flex-shrink-0 px-8 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/85 transition-colors"
          >
            Technika és tanácsok
          </Link>
        </div>
      </section>
    </>
  )
}
