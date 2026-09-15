export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image?: string;
  sections: { heading?: string; paragraphs?: string[]; list?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "psicoterapia-presencial-ou-online",
    title: "Psicoterapia presencial ou online: o que muda quando o formato muda?",
    excerpt: "A essência da escuta permanece, mas cada modalidade pede uma forma própria de preparar o tempo e o espaço da sessão.",
    category: "Psicoterapia",
    image: "/images/articles/presencial-ou-online-v2.jpg",
    sections: [
      { paragraphs: ["Poucos dias antes do decreto de lockdown da pandemia, uma paciente me ligou com receio da Covid-19 e me fez um pedido inédito até então: fazer o atendimento pelo WhatsApp. Eu nunca havia feito um atendimento online. Para ser bem sincera, não achava confortável e duvidava, até certo ponto, da funcionalidade daquele formato. Afinal, como sustentar a profundidade da escuta fora do setting terapêutico que eu havia escolhido a dedo, com tanto cuidado, como o local adequado para o acolhimento?", "A realidade nos impôs a tela, e o que era uma exceção temporária revelou-se um espaço possível e surpreendentemente rico. O atendimento online rompeu fronteiras geográficas e trouxe uma flexibilidade valiosa para a vida moderna. Hoje, a psicoterapia tornou-se acessível de qualquer lugar."] },
      { heading: "O desafio da transição no atendimento psicológico online", paragraphs: ["No entanto, essa aparente facilidade traz um desafio sutil, mas fundamental: a diferença na transição.", "Quando você opta pela terapia presencial, há um ritual físico. O ato de sair de casa ou do trabalho, o trajeto até o consultório, o tempo no trânsito… tudo isso funciona como um espaço de transição. É o tempo que a mente precisa para se desligar do cotidiano e se preparar para falar de si. E, na volta, o caminho serve para digerir o que foi dito.", "No atendimento online, esse contorno quase desaparece. Às vezes, o processo se resume a fechar a tela do celular ou do computador e ir direto lavar a louça, responder um e-mail de trabalho ou cuidar dos filhos. O silêncio que ajuda a elaborar a sessão acaba sendo engolido pelo ritmo imediato da casa."] },
      { heading: "Como se preparar para fazer terapia online com privacidade?", paragraphs: ["Para que a psicoterapia online funcione e mantenha a mesma dignidade do consultório, algumas condições precisam ser sustentadas pelo próprio paciente. Não se trata de uma fórmula, mas de criar espaço para a fala circular:"], list: ["Busque um ambiente absolutamente reservado, onde você possa falar, silenciar ou se emocionar sem receio de ser ouvido.", "Prepare um cenário confortável, use fones de ouvido e procure garantir uma conexão estável.", "Reserve cinco ou dez minutos de silêncio antes e depois da sessão, respeitando o tempo de transição e elaboração."] },
      { heading: "Presencial ou online: qual escolher?", paragraphs: ["Seja no olho no olho do presencial, sentindo o movimento de ir ao encontro do profissional, seja no acolhimento de uma tela que encurta distâncias, a essência permanece a mesma: a busca por um lugar onde a sua história real possa ser escutada sem pressa. O melhor formato será aquele que faz sentido para o seu momento de vida."] },
    ],
  },
  {
    slug: "o-que-a-psicoterapia-realmente-propoe",
    title: "O que a psicoterapia realmente propõe: um processo de revelação.",
    excerpt: "Mais do que acrescentar informações sobre si, a psicoterapia pode fazer emergir aquilo que opera silenciosamente em nossas escolhas e afetos.",
    category: "Reflexões",
    image: "/images/articles/processo-de-revelacao-v2.jpg",
    sections: [
      { paragraphs: ["Se você chegou até aqui, provavelmente já se pegou pensando sobre os rumos da sua vida, sobre os padrões que insistem em se repetir ou sobre aquele incômodo silencioso que surge quando tudo parece estar bem por fora.", "É comum ouvirmos que a terapia é um caminho de autoconhecimento, mas, na prática clínica, percebo que essa formulação muitas vezes é insuficiente. Não porque não nos conheçamos, mas justamente pelo oposto: nós já nos conhecemos demais. Sabemos a nossa história de cor, repetimos os mesmos enredos nos relacionamentos, reconhecemos nossos medos e impasses. Tudo isso já está inscrito no inconsciente."] },
      { heading: "O saber que já habita em nós", paragraphs: ["A experiência psicoterápica, da forma como acredito e conduzo, não se orienta pela ideia de acrescentar informações sobre si mesmo, como se algo faltasse no plano do conhecimento puramente intelectual.", "O que a terapia propõe é outra coisa: um processo de revelação. Revelação aqui não tem um sentido místico, mas o sentido analítico de fazer emergir aquilo que opera silenciosamente nos bastidores da mente, determinando escolhas, afetos, angústias e sintomas sem que a gente se dê conta."] },
      { heading: "O inconsciente e o efeito de surpresa", paragraphs: ["Na clínica, o trabalho não se resume a descobrir quem eu sou a partir de uma lista de características. O objetivo é permitir que aquilo que estava recalcado, deslocado, esquecido ou encoberto pelo barulho do dia a dia possa, finalmente, vir à palavra.", "O inconsciente não funciona como um arquivo empoeirado que acessamos de forma voluntária. Ele se manifesta nas frestas: nas falhas cotidianas, repetições incômodas, sintomas do corpo, lapsos e sonhos.", "Quando algo desse terreno desconhecido se torna consciente, o encontro com a própria verdade costuma vir acompanhado de surpresa e estranhamento."] },
      { heading: "Onde Isso estava, deve advir o Eu", paragraphs: ["Sigmund Freud formulou esse horizonte em 1933 ao escrever: “Wo Es war, soll Ich werden” — que podemos traduzir como “Onde Isso estava, deve advir o Eu”.", "A psicoterapia não promete domínio total, cura mágica ou transparência absoluta sobre si. Ela oferece a possibilidade de se implicar naquilo que, até então, nos governava sem nosso saber; de sustentar o encontro com o que sempre esteve ali, mas ainda não havia encontrado um lugar seguro na fala."] },
    ],
  },
  {
    slug: "o-que-e-psicoterapia-e-como-funciona",
    title: "O que é psicoterapia e como funciona.",
    excerpt: "Um espaço de escuta e acompanhamento psicológico, sem julgamentos, sem pressa e sem respostas prontas.",
    category: "Psicoterapia",
    image: "/images/articles/o-que-e-psicoterapia-v2.jpg",
    sections: [
      { paragraphs: ["Se você chegou até aqui, provavelmente está pensando em iniciar um processo terapêutico ou quer entender melhor o que é psicoterapia e como ela funciona na prática."] },
      { heading: "O que é psicoterapia?", paragraphs: ["Psicoterapia é um processo de escuta e acompanhamento psicológico conduzido por um profissional habilitado. É um espaço onde você pode falar sobre o que sente, pensa e vive — sem julgamentos, sem pressa e sem respostas prontas.", "Ao contrário do que muitos pensam, psicoterapia não é só para quem está em crise. É também para quem quer se conhecer melhor, entender padrões que se repetem ou atravessar momentos de transição com mais clareza."] },
      { heading: "Como funciona na prática?", paragraphs: ["As sessões acontecem geralmente uma vez por semana, com duração aproximada de 45 minutos. Os atendimentos podem ser presenciais em Porto Alegre ou online.", "Não existe um roteiro fixo. Cada processo é único porque cada pessoa é única. O trabalho é orientado pela sua história, demandas atuais e por aquilo que ainda não consegue nomear sozinho."] },
      { heading: "Quando procurar um psicólogo?", paragraphs: ["Você não precisa esperar chegar ao limite para cuidar da saúde mental. Alguns sinais podem indicar que é hora de buscar uma escuta profissional:"], list: ["Ansiedade, nervosismo ou preocupação constante que dificultam o cotidiano.", "Tristeza prolongada, desânimo ou esgotamento.", "Dificuldades nos relacionamentos afetivos, familiares ou profissionais.", "Sensação de estar preso em padrões que se repetem.", "Momentos de transição, perdas ou novas fases da vida."] },
    ],
  },
  {
    slug: "o-sintoma-como-linguagem",
    title: "O sintoma como linguagem: o que o corpo fala quando a palavra falta?",
    excerpt: "E se o sintoma não for apenas um inimigo a ser calado, mas uma mensagem que pede escuta?",
    category: "Saúde mental",
    image: "/images/articles/sintoma-como-linguagem-v2.jpg",
    sections: [
      { paragraphs: ["Dores sem causa biológica, aperto no peito, insônia e angústia: e se o sintoma não for um inimigo a ser calado, mas uma mensagem a ser escutada?", "Muitas vezes, a busca por ajuda começa no limite do corpo ou da exaustão emocional. Pode ser uma dor persistente que os exames não explicam, tensão que não cede ou uma angústia profunda sem motivo aparente.", "Na cultura atual, fomos ensinados a olhar para o sintoma como um defeito. Queremos calar o incômodo para voltar a funcionar o mais rápido possível. Mas e se o sintoma não for um erro do organismo, e sim um recurso?"] },
      { heading: "A dor que busca tradução", paragraphs: ["Na orientação analítica, entendemos que o sintoma é uma forma de linguagem. Quando algo na história fica sem nome, sem espaço para ser dito ou elaborado, a experiência subjetiva pode encontrar no corpo ou na repetição um canal de descarga.", "O corpo empresta a sua voz quando a palavra falta. A somatização, a ansiedade e a inibição podem sinalizar que algo em nossa dinâmica de vida exige parada e escuta."] },
      { heading: "Da eliminação à escuta", paragraphs: ["Mudar a forma de olhar para o sintoma transforma a pergunta. Em vez de apenas “como faço isso sumir?”, podemos perguntar “o que essa dor tenta dizer que ainda não consegui verbalizar?”.", "A psicoterapia de orientação analítica não oferece fórmulas prontas para extirpar o sintoma. Oferece uma escuta singular e reservada, onde é possível desacelerar e começar a traduzir em palavras aquilo que antes só se manifestava como sofrimento físico ou emocional."] },
    ],
  },
  {
    slug: "psicossomatica-quando-o-corpo-fala",
    title: "Psicossomática: quando o corpo fala o que a mente cala",
    excerpt: "O corpo e a vida emocional não existem separados. Alguns sinais podem convidar a olhar para a experiência de forma integrada.",
    category: "Psicossomática",
    image: "/images/articles/psicossomatica-v2.jpg",
    sections: [
      { heading: "O que é a psicossomática", paragraphs: ["O corpo e a vida emocional não existem separados. Em alguns momentos, aquilo que não encontra palavras pode aparecer por meio de sinais físicos. É importante que sintomas corporais sejam avaliados por profissionais de saúde para investigar suas possíveis causas."], list: ["Dores de cabeça e enxaquecas sem causa física aparente.", "Problemas digestivos, como a chamada gastrite nervosa.", "Tensão muscular excessiva nos ombros e pescoço.", "Alterações no sono, cansaço crônico e manifestações na pele."] },
      { heading: "Como a psicoterapia pode ajudar?", paragraphs: ["Olhar para a psicossomática exige considerar o ser humano de forma integrada. A psicoterapia oferece um espaço reservado para investigar possíveis relações entre experiências emocionais, conflitos, estresse e os sinais percebidos no corpo.", "O acompanhamento psicológico não substitui avaliação ou tratamento médico. Quando necessário, o trabalho pode acontecer em diálogo com outros profissionais de saúde, respeitando o sigilo e a autorização da pessoa atendida."] },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
