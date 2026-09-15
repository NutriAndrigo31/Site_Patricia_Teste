import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "../articles";

export const metadata: Metadata = {
  title: "Artigos e reflexões | Patrícia Rocha Psicóloga",
  description: "Textos de Patrícia Rocha, Psicóloga CRP 07/6944, sobre psicoterapia, saúde mental e orientação psicanalítica.",
  openGraph: { title: "Artigos e reflexões | Patrícia Rocha Psicóloga", description: "Textos sobre psicoterapia, saúde mental e orientação psicanalítica.", images: [] },
  twitter: { title: "Artigos e reflexões | Patrícia Rocha Psicóloga", description: "Textos sobre psicoterapia, saúde mental e orientação psicanalítica.", images: [] },
};

export default function ArticlesPage() {
  return <main className="articles-page">
    <header className="article-site-header"><Link className="brand" href="/"><Image src="/images/logo-lotus.svg" alt="" width={46} height={46}/><span><strong>Patrícia Rocha</strong><small>Psicóloga · CRP 07/6944</small></span></Link><Link className="button button-small" href="https://wa.me/5551993417234">Agendar atendimento</Link></header>
    <section className="articles-hero"><p className="kicker">Palavra e escuta</p><h1>Artigos e reflexões</h1><p>Escrever também é uma forma de investigar. Textos sobre temas que atravessam a clínica e a vida cotidiana.</p></section>
    <section className="articles-list">{articles.map((article, index) => <Link className="article-row" href={`/artigos/${article.slug}`} key={article.slug}><span className="article-row-number">{String(index + 1).padStart(2,"0")}</span><div>{article.image ? <div className="article-row-image"><Image src={article.image} alt="" fill sizes="260px"/></div> : <div className="article-row-image article-placeholder"/>}</div><div><small>{article.category}</small><h2>{article.title}</h2><p>{article.excerpt}</p><strong>Ler artigo →</strong></div></Link>)}</section>
    <footer className="article-footer"><p>Patrícia Rocha — Psicóloga | CRP 07/6944</p><Link href="/">Voltar à página inicial</Link></footer>
  </main>;
}
