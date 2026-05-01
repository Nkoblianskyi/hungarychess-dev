export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string[]
  readTime: number
  category: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "megnyitasok-alapelvei",
    title: "A megnyitók alapelvei: az első lépések fontossága",
    excerpt:
      "A megnyitó fázis az egyik legtöbbet vizsgált terület a sakkban. Megismerkedünk az alapvető megnyitási elvekkel, amelyeket minden sakkozónak érdemes szem előtt tartani a partijában.",
    image: "/images/blog-megnyitasok.jpg",
    readTime: 8,
    category: "Megnyitók",
    content: [
      "A sakkpartik első néhány lépése meghatározza az egész játék irányát. A megnyitók célja nem csupán a figurák fejlesztése, hanem a pozíció előnyös kiépítése a középjáték számára. A tapasztalt sakkozók tudják, hogy a megnyitóban elkövetett hibák a végjátékban is kísértenek.",
      "Az első és legfontosabb alapelv a centrum ellenőrzése. Az e4, e5, d4 és d5 mezők feletti uralom döntő befolyással van a játék menetére. A centrumban álló gyalogok és figurák aktívabbak, és több teret uralnak, mint a széleken lévők.",
      "A második alapelv a figurák gyors és hatékony fejlesztése. Minden lépéssel törekedni kell arra, hogy egy új figura kerüljön aktív pozícióba. A duplázott lépések, azaz ugyanazon figura kétszeri megmozdítása a megnyitóban kerülendő, kivéve, ha erre kénytelenek vagyunk.",
      "A harmadik alapelv a király biztonsága. A sáncolást érdemes mihamarabb elvégezni, hogy a király biztonságos helyre kerüljön. A nyílt d vagy e vonalon álló királyok különösen sebezhetők a közepes és végjátékban.",
      "A negyedik alapelv a vezér korai aktiválásának kerülése. A vezér a sakk legértékesebb figurája, és ha a megnyitóban korán játsszuk ki, az ellenfél könnyen megtámadhatja, így kénytelenek leszünk időt vesztegetni annak visszavonására.",
      "Az ötödik alapelv az egységes gyalogszerkezet fenntartása. Az izolált, visszamaradt és duplázott gyalogok hosszú távú gyengeségeket jelentenek, amelyek a végjátékban döntőek lehetnek. A megnyitóban figyeljünk arra, hogy gyalogjaink ne váljanak strukturálisan gyengévé.",
      "Ezeket az alapelveket szem előtt tartva, a megnyitó fázisból erős pozícióval léphetünk ki, amelyből a középjátéki terveink kivitelezhetők lesznek.",
    ],
  },
  {
    slug: "idokontroll-es-sakk-ora",
    title: "Az időkontroll és a sakkóra: hogyan gazdálkodj az idővel?",
    excerpt:
      "A sakkóra a versenysakk nélkülözhetetlen kelléke. Megvizsgáljuk a különböző időkontroll formátumokat és azt, hogyan érdemes az idő nyomásával megküzdeni a versenyeken.",
    image: "/images/blog-idokontroll.jpg",
    readTime: 6,
    category: "Verseny",
    content: [
      "A sakkóra bevezetése forradalmasította a versenysakot. Megakadályozza, hogy a játékosok határozatlanság esetén végtelen ideig gondolkodjanak, és egységes keretet teremt a versenyeknek. Az idő kezelése önálló készség, amelyet ugyanolyan szorgalommal kell fejleszteni, mint a taktikai látásmódot.",
      "A klasszikus időkontroll általában 90 percet biztosít az első 40 lépésre, majd 30 percet a folytatáshoz, lépésenkénti 30 másodperces inkrementtel. Ez a formátum a versenyek legmélyebb elemzésre módot adó változata, amelyet a komolyabb eseményeken alkalmaznak.",
      "A rapid sakk 15-25 percet ad játékosonként az egész partira, inkrementtel vagy anélkül. Ez a formátum egyre népszerűbb, mivel gyors és látványos játékot eredményez. A rapid partikban a pontosság kissé háttérbe szorul az idővel szemben.",
      "A blitz formátumban mindkét játékos 3-5 percet kap a teljes partira. Ez a gyors tempó megköveteli az azonnali döntéshozatalt, és elsősorban a jól begyakorolt pozícióismeretet jutalmazza. A bullet sakk még extrémebb: itt csupán 1-2 perc áll rendelkezésre.",
      "Az időkezelés legfontosabb szabálya, hogy egyenletesen osszuk el az időt a nehéznek tűnő pozíciókra. A megnyitóban ne gondolkozzunk sokat, a kritikus pozíciókra tartsuk fenn az időt. Az időzavarba kerülés az egyik leggyakoribb versenyhibák egyike.",
      "A tapasztalt versenyzők azt javasolják, hogy mindig figyelje az ellenfél idejét is. Ha az ellenfél nagy időelőnnyel rendelkezik, egyszerűsítsük a pozíciót. Ha mi vagyunk az időben gazdagabbak, keressünk bonyolult, kiszámíthatatlan helyzeteket.",
    ],
  },
  {
    slug: "villa-taktika",
    title: "A villa: az egyik leghatásosabb taktikai motívum",
    excerpt:
      "A villa az a taktikai eszköz, amikor egy figura egyszerre két vagy több ellenfélbeli bábút támad meg. Megvizsgáljuk ennek minden formáját és azt, hogyan fedezzük fel a lehetőségeket a saját partijainban.",
    image: "/images/blog-villa.jpg",
    readTime: 7,
    category: "Taktika",
    content: [
      "A taktikai motívumok közül a villa az egyik leggyakoribb és legdramatikusabb. Lényege, hogy egyetlen figura egyszerre két vagy több ellenfélbeli bábút támad meg, és az ellenfélnek csak az egyiket sikerülhet megmentenie. Ez anyagnyereséget vagy pozíciós előnyt eredményez.",
      "A huszárvilla az egyik legismertebb változat. A huszár L alakú lépésmintája és az a tulajdonsága, hogy átugorja a többi figurát, különösen alkalmassá teszi villák kivitelezésére. A legveszélyesebb a kettős villa, amikor a huszár egyszerre fenyegeti a vezért és a királyt.",
      "A gyalogvilla is rendkívül hatásos tud lenni. Ha egy gyalog átlósan két ellenséges figurát fenyeget egyszerre, az ellenfél kénytelen az egyiket feláldozni. A gyalogszerkezet fejlesztése során mindig érdemes figyelni az ilyen lehetőségekre.",
      "A futóvilla és a bástyavilla szintén előfordul, bár ezek esetén a figura nem ugrik át más bábúkon. A bástyavillák különösen hatásosak nyílt vonalakon, ahol a bástya nagy hatótávolságú.",
      "Hogyan ismerjük fel a villahetőségeket? Elsősorban figyeljük meg az ellenfél rosszul elhelyezett figuráit, különösen ha közel állnak egymáshoz. Keressük azokat az útvonalakat, amelyeken keresztül a saját figuráink egyszerre két ellenséges bábút veszélyeztetnének.",
      "A villák elleni védekezés alapelve a figurák szétszórása, hogy ne legyenek egymáshoz közel. Egy jó védekezési készség kialakításához érdemes villás pozíciókat elemezni, és megtanulni, mikor veszélyesek a saját figuráink helyzetei.",
    ],
  },
  {
    slug: "vegjatek-alapok",
    title: "Végjátékok: a király és gyalog alapok minden sakkozónak",
    excerpt:
      "A végjáték fázisban a király aktív szerepet vesz fel. A király és gyalog végjátékok az egyik legfontosabb végjátéki ismeretek közé tartoznak, amelyeket minden sakkozónak alaposan el kell sajátítania.",
    image: "/images/blog-vegjatek.jpg",
    readTime: 9,
    category: "Végjáték",
    content: [
      "A végjáték az a sakkpartának az a szakasza, amikor már kevés figura maradt a táblán. Ebben a fázisban a király szerepe radikálisan megváltozik: a korábban védendő figura most aktív harci egységgé válik. A végjátékok pontos ismerete sok pontot hozhat a versenyeken.",
      "A king és gyalog végjáték az alap, amelyből minden más végjátéki ismeret épül. Az első fogalom, amelyet meg kell tanulni, az oppozíció. Ez azt jelenti, hogy a két király szemben áll egymással, és az lép rosszabbul, amelyiknek lépnie kell.",
      "A gyalog átalakulásának megakadályozása a védekező fél legfontosabb feladata. Az ellenfél királyának blokkoló pozícióba kell kerülni a gyalog előtt. Ha a védő királynak sikerül a gyalog elé kerülni, a végeredmény döntetlen lehet.",
      "A hatáskör fogalma alapvetően meghatározza, melyik fél nyerhet. Ha a gyalognak átvett végső mezője a kis négyzeten belül esik, a védő be tudja hozni a királyát. Ennek a szabálynak az alkalmazásával sok időnyomásos helyzetben gyorsan eldönthető a pozíció értékelése.",
      "A szélső gyalog különleges eset. A bástyagyalog és huszárgyalog végjátékai általában döntetlenek, ha a védő király az átalakuló mezőre ér. A szélső bástya- és huszárgyalog esetén a gyengébb fél könnyebben tart döntetlent, mint a közép- és huszárgyalogok esetén.",
      "A végjátékok tanulmányozásának leghatékonyabb módja a pozíciók elemzése sakkprogrammal és könyvekkel. A klasszikus végjátéki kézikönyvek részletesen bemutatják a legfontosabb pozíciókat és elveket. Rendszeres végjátéki edzés nélkül nehéz versenyeken konzisztenst teljesíteni.",
    ],
  },
  {
    slug: "sancolas-strategiaja",
    title: "A sáncolás: mikor, hogyan és miért elengedhetetlen a királynak?",
    excerpt:
      "A sáncolás a sakk egyetlen speciális lépése, amelyben egyszerre mozdítunk meg két figurát. De mikor érdemes sáncolni, és mikor nem? Megvizsgáljuk a sáncolás stratégiáját.",
    image: "/images/blog-sancolas.jpg",
    readTime: 7,
    category: "Stratégia",
    content: [
      "A sáncolás az egyetlen sakkszabály, amely egyszerre két figura mozgatását teszi lehetővé: a király és a bástya egyidejű elmozdítását. Ez a különleges lépés kettős célt szolgál: biztonságos helyre vezeti a királyt és aktiválja a bástyát.",
      "A királyoldali sáncolás során a király az e1-ről g1-re (fehér esetén), a bástya az h1-ről f1-re lép. A vezéroldali sáncolás esetén a király a c1-re, a bástya a d1-re kerül. A vezéroldali sáncolás általában kockázatosabb, de aktívabb pozíciót eredményez.",
      "A sáncolás elvégzéséhez szükséges feltételek: a király és a bástya nem léphetett el eredeti helyzetéből, a köztük lévő mezők szabadok, a király nem állhat sakkban, nem haladhat át sakkon, és nem állhat sakkban a sáncolás után sem.",
      "Mikor érdemes sáncolni? Minél hamarabb, annál biztonságosabb általában a király. A hosszú ideig a center mögött maradó király könnyen hozzáférhető célponttá válik. A mester szintű játékosok általában az első tíz lépésen belül sáncolnak.",
      "Mikor nem érdemes sáncolni? Ha az ellenfél a sáncolás irányában erős gyalogtámadást indít, néha jobb a másik oldalra sáncolni. Hosszú sáncoláshoz érdemes a pozíciót gondosan mérlegelni, mivel nyitottabb és kockázatosabb pozíciót eredményez.",
      "A kölcsönösen ellentétes sáncolás, azaz amikor az egyik fél királyoldali, a másik vezéroldali sáncot hajt végre, általában éles, kölcsönös gyalogtámadáshoz vezet. Ez az egyik leglátványosabb és legizgalmasabb állásforma a modern versenysakkban.",
    ],
  },
  {
    slug: "sakk-es-gondolkodas",
    title: "Sakk és a gondolkodás fejlesztése: mit ad a sakk a mindennapokban?",
    excerpt:
      "A sakk nem csupán egy játék, hanem a gondolkodás és a koncentráció fejlesztésének hatékony eszköze is. Megvizsgáljuk, milyen kognitív készségeket fejleszt a rendszeres sakkozás.",
    image: "/images/blog-gondolkodas.jpg",
    readTime: 6,
    category: "Általános",
    content: [
      "A sakk évszázadok óta a gondolkodás iskolájának számít. Nem csupán szórakozás, hanem a logikus és stratégiai gondolkodás fejlesztésének kitűnő eszköze. A rendszeres sakkozás számos kognitív készséget erősít, amelyek a mindennapi életben is hasznosak.",
      "A kritikai gondolkodás fejlesztése az egyik legnyilvánvalóbb előny. A sakkban minden lépés előtt mérlegelni kell a lehetőségeket, figyelembe venni az ellenfél terveit, és kiértékelni a pozíciót. Ez a folyamat erősíti az analitikus gondolkodás képességét.",
      "A koncentráció és a figyelem fenntartása szintén alapvetően fejlődik a sakkozás során. Egy partija akár négy-öt óráig is tarthat, és végig magas fokú összpontosítást igényel. A rendszeres sakkozók általában jobban teljesítenek a hosszabb figyelmet igénylő feladatokban.",
      "A memória fejlesztése is a sakk egyik kiemelkedő előnye. A megnyitási sorrendek, taktikai motívumok és végjátéki pozíciók megjegyzése erősíti a rövid és hosszú távú memóriát egyaránt.",
      "A döntéshozatali készség javulása is megfigyelhető a rendszeres sakkozóknál. A szorító időkontroll alatt meghozandó döntések, ahol tökéletes információ nem áll rendelkezésre, hasonlítanak az élet sok területén felmerülő döntési helyzetekhez.",
      "A türelem és az önfegyelem fejlesztése szintén kulcsfontosságú. A sakk megtanítja, hogy nem szabad sietni, hanem alaposan mérlegelni kell minden lehetőséget. Ez az erény a verseny stresszhelyzetein túl is hasznos a mindennapi életben.",
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
