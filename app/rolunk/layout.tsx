import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rólunk és kapcsolat",
  description:
    "Ismerje meg a HungaryChess küldetését és lépjen kapcsolatba velünk. Kérdéseivel, észrevételeivel keressen minket az e-mail-formunkon keresztül.",
  keywords: ["HungaryChess kapcsolat", "sakk oldal rólunk", "hungarychess.com"],
  alternates: { canonical: "https://hungarychess.com/rolunk" },
  openGraph: {
    title: "Rólunk és kapcsolat",
    description: "Ismerje meg a HungaryChess küldetését és lépjen kapcsolatba velünk.",
    url: "https://hungarychess.com/rolunk",
    siteName: "HungaryChess",
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rólunk és kapcsolat | HungaryChess",
    description: "Ismerje meg a HungaryChess küldetését és lépjen kapcsolatba velünk.",
  },
}

export default function RolunkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
