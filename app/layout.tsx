import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://psicopatriciarocha.com.br"),
  title: "Patrícia Rocha | Psicóloga em Porto Alegre e Online",
  description: "Psicoterapia de orientação psicanalítica para adolescentes e adultos, presencial no Menino Deus, em Porto Alegre, e online.",
  authors: [{ name: "Patrícia Rocha — Psicóloga | CRP 07/6944" }],
  openGraph: {
    title: "Patrícia Rocha | Psicóloga em Porto Alegre e Online",
    description: "Psicoterapia de orientação psicanalítica para adolescentes e adultos, presencial em Porto Alegre e online.",
    images: [{ url: "/og-home.jpg", width: 1736, height: 907, alt: "Patrícia Rocha — Psicóloga" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrícia Rocha | Psicóloga em Porto Alegre e Online",
    description: "Um espaço seguro para escutar a si.",
    images: ["/og-home.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
