import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles, getArticle } from "../../articles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Artigo não encontrado", openGraph: { images: [] }, twitter: { images: [] } };
  const url = `https://psicopatriciarocha.com.br/artigos/${article.slug}`;
  const image = article.image ? `https://psicopatriciarocha.com.br${article.image}` : undefined;
  return {
    title: `${article.title} | Patrícia Rocha`,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.excerpt, url, type: "article", images: image ? [{ url: image }] : [] },
    twitter: { card: image ? "summary_large_image" : "summary", title: article.title, description: article.excerpt, images: image ? [image] : [] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return <main className="article-not-found"><h1>Artigo não encontrado</h1><Link href="/artigos">Ver todos os artigos</Link></main>;
  const current = articles.findIndex((item) => item.slug === slug);
  const next = articles[(current + 1) % articles.length];
  return <main className="article-page">
    <header className="article-site-header"><Link className="brand" href="/"><Image src="/images/logo-lotus.svg" alt="" width={46} height={46}/><span><strong>Patrícia Rocha</strong><small>Psicóloga · CRP 07/6944</small></span></Link><Link className="article-back" href="/artigos">Todos os artigos</Link><a className="button button-small" href="https://wa.me/5551993417234" target="_blank" rel="noreferrer">Agendar atendimento</a></header>
    <article>
      <header className="article-hero"><div className="article-hero-copy"><p className="kicker">{article.category}</p><h1>{article.title}</h1><p>{article.excerpt}</p><div className="article-author"><span>Por</span><strong>Patrícia Rocha</strong><small>Psicóloga · CRP 07/6944</small></div></div>{article.image ? <div className="article-hero-image"><Image src={article.image} alt="Imagem de abertura do artigo" fill priority sizes="(max-width: 850px) 100vw, 42vw"/></div> : null}</header>
      <div className="article-body">{article.sections.map((section, index) => <section key={index}>{section.heading ? <h2>{section.heading}</h2> : null}{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.list ? <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul> : null}</section>)}</div>
    </article>
    <aside className="article-cta"><p className="kicker light">Psicoterapia em Porto Alegre e online</p><h2>O primeiro contato pode ser uma conversa.</h2><p>Para informações sobre disponibilidade e modalidades de atendimento, fale diretamente com Patrícia.</p><a className="button button-light" href="https://wa.me/5551993417234" target="_blank" rel="noreferrer">Agendar atendimento ↗</a></aside>
    <Link className="next-article" href={`/artigos/${next.slug}`}><small>Próxima leitura</small><strong>{next.title}</strong><span>→</span></Link>
    <footer className="article-footer"><p>Patrícia Rocha — Psicóloga | CRP 07/6944</p><Link href="/privacidade">Política de Privacidade</Link><Link href="/">Página inicial</Link></footer>
  </main>;
}
