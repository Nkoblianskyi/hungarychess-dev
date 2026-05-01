import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "A sakk története Magyarországon",
  description:
    "A sakk magyarországi történelme a középkortól napjainkig. Korszakok, fordulópontok és hagyományok, amelyek formálták a hazai sakkéletet.",
  keywords: ["sakk történelem", "magyar sakk múltja", "sakk Magyarország", "sakkozás gyökerei"],
  alternates: { canonical: "https://hungarychess.com/tortenet" },
  openGraph: {
    title: "A sakk története Magyarországon",
    description: "Korszakok, fordulópontok és hagyományok a hazai sakkéletben.",
    url: "https://hungarychess.com/tortenet",
    siteName: "HungaryChess",
    locale: "hu_HU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "A sakk története Magyarországon | HungaryChess",
    description: "Korszakok, fordulópontok és hagyományok a hazai sakkéletben.",
  },
}

const timeline = [
  {
    period: "11. sz.",
    title: "A sakk megjelenése a Kárpát-medencében",
    text: "A sakk a Közel-Keletről és Bizáncon keresztül jutott el a Kárpát-medencébe, valószínűleg a 10-11. században. Az első sakkfigurák Magyarországon ebből a korból maradtak fenn, amelyek külföldi kapcsolatokról tanúskodnak.",
  },
  {
    period: "13-15. sz.",
    title: "A sakk a középkori udvarokban",
    text: "A középkor folyamán a sakk az arisztokrácia és a papság körében terjedt el. A korabeli kéziratok és krónikák megemlítik, hogy a sakk az udvari kultúra szerves részévé vált, a lovagi erények jelképeként tekintve rá.",
  },
  {
    period: "16-17. sz.",
    title: "A reneszánsz és a sakk elmélyülése",
    text: "A reneszánsz korában a sakk elméleti irodalma virágzott Európában. Magyarországon is megjelentek az első fordítások és sakkelméleti munkák. A humanista tudósok körében különösen népszerű volt a sakkozás mint intellektuális tevékenység.",
  },
  {
    period: "18-19. sz.",
    title: "A sakk polgárosodása",
    text: "A felvilágosodás és a polgárosodás korában a sakk túllépett az arisztokrácia körein. Kávéházak, olvasókörök és társasági összejövetelek rendszeres kellékévé vált. A 19. század második felében megjelentek az első szervezett sakkversenyek és egyesületek az országban.",
  },
  {
    period: "20. sz. eleje",
    title: "A versenyszakk születése",
    text: "A 20. század elején a versenysakk intézményes keretek közé szorult. Megalakult a hazai szövetség, rendszeressé váltak a bajnokságok, és a nyilvános sakkpartik egyre nagyobb közönséget vonzottak. A sajtó is egyre több teret szentelt a sakknak.",
  },
  {
    period: "1920-1945",
    title: "A két világháború közötti időszak",
    text: "A két háború közötti korszak a sakk egyik legizgalmasabb fejezete. Erős versenyközpontok alakultak ki, és az ország sakkozói kiemelkedő eredményeket értek el a nemzetközi porondon. Ebben az időszakban született meg számos ma is élő hagyomány.",
  },
  {
    period: "1945-1989",
    title: "A szocialista korszak és a sakk virágzása",
    text: "A szocialista korszakban a sakk állami támogatást kapott, és amatőr szinten rendkívüli mértékben terjedt el. Az üzemek, iskolák és kulturális intézmények sakkkörei az ország minden szegletében megtalálhatók voltak. Ebből az időszakból számos kiváló versenyző és elemző munka maradt fenn.",
  },
  {
    period: "1990-től",
    title: "A modern korszak",
    text: "A rendszerváltás után a sakk szervezeti keretei átalakultak, de a hagyomány erős maradt. A számítógépes elemzés és az internet megváltoztatta a tanulás és versenyző közösségek szervezésének módját. Napjainkban a fiatalabb generáció is egyre nagyobb érdeklődéssel fordul a sakk felé.",
  },
]

export default function TortenetPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Történelem
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mt-4 leading-tight text-balance max-w-2xl">
            A sakk Magyarországon
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A sakk magyarországi gyökerei a középkorig nyúlnak vissza. Az
            alábbi áttekintés a legfontosabb korszakokat és fordulópontokat
            mutatja be, amelyek formálták a hazai sakkélet arculatát.
          </p>
        </div>
      </section>

      {/* History Image */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/history-chess.jpg"
                alt="Régi sakk figurák"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Kontextus
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 leading-tight text-balance">
                Egy évezredes hagyomány nyomában
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                A sakk útja Magyarországon izgalmas: a középkori udvaroktól
                a 20. századi versenyközpontokig töretlen fonalként húzódik
                végig a kulturális és szellemi életünkön. Minden korszak
                saját lenyomatát hagyta a hazai sakkéleten.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                A népi hagyomány és a tudományos megközelítés egymást
                kiegészítve gazdagítja a sakk magyarországi örökségét. A
                taktikai mélység és az elméleti alaposság mindig is
                jellemzőjük volt az itthon nevelkedett sakkozóknak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Kronológia
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Korszakok és fordulópontok
            </h2>
          </div>

          <div className="flex flex-col">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-border"
              >
                <div className="md:col-span-2">
                  <span className="font-serif text-sm font-bold text-accent">
                    {item.period}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-serif text-xl font-bold text-foreground leading-snug">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.text}
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
            Ismerje meg a sakk szabályait és versenyformátumait is.
          </p>
          <Link
            href="/szabalyok"
            className="flex-shrink-0 px-8 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/85 transition-colors"
          >
            Szabályok oldal
          </Link>
        </div>
      </section>
    </>
  )
}
