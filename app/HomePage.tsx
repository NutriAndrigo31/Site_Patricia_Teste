"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { articles } from "./articles";

const whatsapp = "https://wa.me/5551993417234";
const googleMaps = "https://www.google.com/maps/search/?api=1&query=Rua%20Bar%C3%A3o%20do%20Triunfo%2C%20720%2C%20sala%20308%2C%20Menino%20Deus%2C%20Porto%20Alegre%2C%20RS%2C%2090130-100";
const waze = "https://www.waze.com/ul?q=Rua%20Bar%C3%A3o%20do%20Triunfo%2C%20720%2C%20Menino%20Deus%2C%20Porto%20Alegre%2C%20RS%2C%2090130-100&navigate=yes";
export default function HomePage() {
  const [showDirections, setShowDirections] = useState(false);

  useEffect(() => {
    if (!showDirections) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowDirections(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [showDirections]);

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Psychologist",
      name: "Patrícia Rocha",
      description: "Psicóloga clínica com psicoterapia de orientação psicanalítica para adolescentes e adultos.",
      url: "https://psicopatriciarocha.com.br",
      telephone: "+55 51 99341-7234",
      address: { "@type": "PostalAddress", streetAddress: "Rua Barão do Triunfo, 720, sala 308", addressLocality: "Porto Alegre", addressRegion: "RS", postalCode: "90130-100", addressCountry: "BR" },
      areaServed: "Porto Alegre e atendimento online",
      sameAs: ["https://www.instagram.com/psicopatriciarocha/"]
    }) }} />
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Patrícia Rocha — início"><Image src="/images/logo-lotus.svg" alt="" width={48} height={48}/><span><strong>Patrícia Rocha</strong><small>Psicóloga · CRP 07/6944</small></span></a>
      <nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#cuidado">Como trabalho</a><a href="#atendimento">Atendimentos</a><a href="#consultorio">Consultório</a><a href="#conteudos">Artigos</a></nav>
      <details className="mobile-menu"><summary aria-label="Abrir menu">Menu</summary><div><a href="#sobre">Sobre</a><a href="#cuidado">Como trabalho</a><a href="#atendimento">Atendimentos</a><a href="#consultorio">Consultório</a><a href="#conteudos">Artigos</a><a href="#contato">Contato</a></div></details>
      <a className="button button-small" href={whatsapp} target="_blank" rel="noreferrer">Agendar conversa</a>
    </header>

    <section className="hero hero-art" id="inicio">
      <div className="hero-art-image"><Image src="/og-home.jpg" alt="Patrícia Rocha, Psicóloga CRP 07/6944 — Um espaço seguro para escutar a si" fill priority sizes="100vw"/></div>
      <div className="hero-art-bar"><div><p>Psicoterapia de orientação psicanalítica</p><div className="trust"><span>Adolescentes e adultos</span><span>Presencial no Menino Deus</span><span>Atendimento online</span></div></div><div className="hero-actions"><a className="text-link" href="#sobre">Conheça meu trabalho <span>↓</span></a><a className="button" href={whatsapp} target="_blank" rel="noreferrer">Agendar atendimento <span>↗</span></a></div></div>
    </section>

    <section className="intro section" id="sobre">
      <div className="section-label"><span>01</span><p>Sobre mim</p></div>
      <div className="intro-copy"><p className="kicker">Escuta clínica com presença e singularidade</p><h2>Há mais de três décadas, acompanho histórias que precisam de um lugar para serem ditas.</h2><div className="copy-columns"><p>Sou psicóloga clínica, formada pela UNISINOS em 1994. Minha trajetória é construída principalmente no trabalho clínico individual, além de experiências em outros contextos da Psicologia.</p><p>Na clínica, trabalho com psicoterapia de orientação psicanalítica. Não parto de fórmulas prontas sobre como alguém deve viver, sentir ou se comportar. Interessa-me escutar o que aparece na fala — inclusive aquilo que nem sempre conseguimos dizer de imediato.</p></div><div className="professional-facts"><span><small>Formação</small>Psicologia · UNISINOS, 1994</span><span><small>Atuação</small>Psicologia clínica</span><span><small>Orientação</small>Psicanalítica</span></div><p className="signature">Patrícia Rocha <span>Psicóloga · CRP 07/6944</span></p></div>
    </section>

    <section className="care section" id="cuidado">
      <div className="care-heading"><div className="section-label light"><span>02</span><p>Como é o trabalho</p></div><div><p className="kicker light">Quando o sofrimento aparece</p><h2>O que você sente merece ser escutado, não apressado.</h2><p className="care-intro">Nem sempre chegamos à psicoterapia sabendo exatamente o que está acontecendo. A partir da fala, construímos uma investigação sobre a maneira singular como cada pessoa se relaciona com sua história, seus desejos, conflitos e vínculos.</p></div></div>
      <div className="care-grid">
        <article><span>01</span><h3>Ansiedade e angústia</h3><p>Quando o tempo acelera e o corpo responde ao invisível, a escuta ajuda a desacelerar e compreender essa inquietação.</p></article>
        <article><span>02</span><h3>Esgotamento e burnout</h3><p>Um espaço para reconhecer o apagamento provocado pelas cobranças e reabrir caminho para o desejo além da performance.</p></article>
        <article><span>03</span><h3>Depressão e perda de sentido</h3><p>Um percurso para acolher tristezas profundas, inibições e a sensação de vazio, reconstruindo sentidos possíveis.</p></article>
        <article><span>04</span><h3>Relações e impasses</h3><p>Para compreender padrões dolorosos, dificuldades nos vínculos e sustentar a própria posição diante do outro.</p></article>
        <article><span>05</span><h3>Sensação de vazio</h3><p>Às vezes o vazio aparece quando aquilo que deveria fazer sentido já não faz. A fala pode abrir perguntas sobre essa experiência.</p></article>
      </div>
    </section>

    <section className="process section" id="atendimento">
      <div className="process-image"><Image src="/images/consult.jpeg" alt="Consultório acolhedor da psicóloga Patrícia Rocha" fill sizes="(max-width: 850px) 100vw, 45vw"/><div className="location-card"><small>Atendimento presencial</small><strong>Menino Deus</strong><span>Porto Alegre · RS</span></div></div>
      <div className="process-copy"><div className="section-label"><span>03</span><p>Atendimentos</p></div><p className="kicker">Um processo construído com você</p><h2>Psicoterapia individual para adolescentes e adultos.</h2><p>O trabalho é construído a partir da história e das questões de cada pessoa, com escuta atenta e respeito ao seu ritmo.</p><ul><li><span>01</span><div><strong>Primeiro contato</strong><p>Conversamos brevemente sobre disponibilidade e modalidade desejada.</p></div></li><li><span>02</span><div><strong>Primeira sessão</strong><p>Você apresenta o que o trouxe até aqui, conhece meu modo de trabalho e conversamos sobre a possibilidade de acompanhamento.</p></div></li><li><span>03</span><div><strong>Seu percurso</strong><p>Encontros em geral semanais, com aproximadamente 45 minutos, presenciais ou online.</p></div></li></ul><a className="button" href={whatsapp} target="_blank" rel="noreferrer">Agendar primeiro atendimento <span>↗</span></a></div>
    </section>

    <section className="modes section"><div><p className="kicker">Onde você estiver</p><h2>Duas formas de cuidar de si.</h2></div><div className="mode-cards"><article><span className="mode-number">01</span><h3>Presencial</h3><p>Em um consultório reservado e acolhedor no bairro Menino Deus, em Porto Alegre.</p><button className="inline-location-button" type="button" onClick={() => setShowDirections(true)}>Como chegar →</button></article><article><span className="mode-number">02</span><h3>Online</h3><p>Por videochamada segura, com a mesma qualidade, escuta e rigor ético, onde você estiver.</p><a href={whatsapp} target="_blank" rel="noreferrer">Consultar horários →</a></article></div></section>

    <section className="office" id="consultorio"><div className="office-image"><Image src="/images/hj-6.jpg" alt="Galeria com detalhes reais do consultório de Patrícia Rocha" fill sizes="100vw"/></div><div className="office-quote"><p className="kicker">O consultório</p><blockquote>Um lugar reservado para que a conversa aconteça sem pressa.</blockquote><p>Rua Barão do Triunfo, 720 · sala 308<br/>Menino Deus · Porto Alegre/RS · CEP 90130-100</p><button className="location-choice-button" type="button" onClick={() => setShowDirections(true)}><small>Abrir endereço</small><strong>Como você quer chegar? →</strong></button></div></section>

    <section className="journal section" id="conteudos"><div className="journal-head"><div><p className="kicker">Artigos e reflexões</p><h2>Escrever também é uma forma de investigar.</h2><p className="journal-intro">Reflexões sobre temas que atravessam a clínica e a vida cotidiana, a partir da Psicologia e da orientação psicanalítica.</p></div><a className="text-link" href="/artigos">Ver todos os artigos →</a></div><div className="articles">{articles.slice(0,3).map((article) => <a className="article" href={`/artigos/${article.slug}`} key={article.title}><div className="article-image">{article.image ? <Image src={article.image} alt="" fill sizes="(max-width: 800px) 100vw, 33vw"/> : null}</div><small>{article.category}</small><h3>{article.title}</h3><span>Ler artigo · Patrícia Rocha — Psicóloga | CRP 07/6944 →</span></a>)}</div></section>

    <section className="contact section" id="contato"><div className="contact-copy"><p className="kicker light">O primeiro contato pode ser pelo WhatsApp</p><h2>Talvez seja hora de falar sobre isso.</h2><p>Nem sempre é fácil saber quando procurar psicoterapia. Se existe algo que vem se repetindo ou tornando a vida mais difícil, podemos conversar sobre a possibilidade de um atendimento.</p><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Agendar atendimento <span>↗</span></a></div><div className="contact-info"><div><small>Consultório</small><p>Rua Barão do Triunfo, 720 · sala 308<br/>Menino Deus · Porto Alegre/RS<br/>CEP 90130-100</p><button className="contact-location-button" type="button" onClick={() => setShowDirections(true)}>Como chegar →</button></div><div><small>Funcionamento</small><p>Atendimento mediante<br/>agendamento prévio</p></div><div><small>Instagram</small><a href="https://www.instagram.com/psicopatriciarocha/" target="_blank" rel="noreferrer">@psicopatriciarocha ↗</a></div></div></section>

    <aside className="ethics-note" aria-label="Informações importantes"><strong>Informação e responsabilidade profissional</strong><p>Este site apresenta informações gerais sobre psicoterapia e não substitui avaliação individual, não oferece diagnóstico e não promete resultados. O contato pelo WhatsApp destina-se a dúvidas e agendamentos e não funciona como atendimento de urgência. Em risco imediato, procure um serviço de emergência, ligue 192 (SAMU) ou 188 (CVV).</p></aside>
    <footer><a className="brand footer-brand" href="#inicio"><Image src="/images/logo-lotus.svg" alt="" width={46} height={46}/><span><strong>Patrícia Rocha</strong><small>Psicóloga · CRP 07/6944</small></span></a><div className="footer-meta"><p>© {new Date().getFullYear()} Patrícia Rocha Psicóloga</p><a href="/privacidade">Política de Privacidade</a><span>Conteúdo informativo · Sem promessa de resultado</span></div><a href="#inicio">Voltar ao início ↑</a></footer>
    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar com Patrícia pelo WhatsApp"><span>Olá</span><strong>Posso ajudar?</strong></a>
    {showDirections ? <div className="directions-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowDirections(false); }}><section className="directions-dialog" role="dialog" aria-modal="true" aria-labelledby="directions-title"><button className="directions-close" type="button" onClick={() => setShowDirections(false)} aria-label="Fechar">×</button><p className="kicker">Como chegar</p><h2 id="directions-title">Escolha seu aplicativo de navegação.</h2><p>Rua Barão do Triunfo, 720 · sala 308<br/>Menino Deus · Porto Alegre/RS</p><div className="directions-options"><a href={googleMaps} target="_blank" rel="noreferrer" onClick={() => setShowDirections(false)}><small>Ver mapa e rotas</small><strong>Google Maps</strong><span>Abrir ↗</span></a><a href={waze} target="_blank" rel="noreferrer" onClick={() => setShowDirections(false)}><small>Navegação em tempo real</small><strong>Waze</strong><span>Abrir ↗</span></a></div></section></div> : null}
  </main>;
}
