import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade | Patrícia Rocha Psicóloga",
  description: "Informações sobre privacidade, contato e tratamento de dados no site de Patrícia Rocha Psicóloga.",
};

export default function PrivacyPage() {
  return <main className="legal-page">
    <header className="legal-header"><Link href="/">← Voltar ao site</Link><span>Patrícia Rocha · Psicóloga · CRP 07/6944</span></header>
    <article>
      <p className="kicker">Transparência e cuidado</p>
      <h1>Política de Privacidade</h1>
      <p className="legal-updated">Última atualização: 15 de setembro de 2026</p>
      <p>Esta política explica, de forma clara, como as informações relacionadas ao acesso e ao contato por este site podem ser tratadas.</p>

      <h2>1. Responsável pelo site</h2>
      <p>Patrícia Rocha, Psicóloga, CRP 07/6944, com atendimento presencial na Rua Barão do Triunfo, 720/308, bairro Menino Deus, Porto Alegre — RS.</p>

      <h2>2. Dados e finalidade</h2>
      <p>O site não possui formulário próprio e não solicita informações sobre saúde. Ao escolher conversar pelo WhatsApp ou acessar o Instagram, você será direcionado para plataformas externas e estará sujeito também às políticas de privacidade desses serviços.</p>
      <p>As informações enviadas voluntariamente no primeiro contato são utilizadas somente para responder dúvidas e organizar disponibilidade, modalidade, data e horário de atendimento. Evite enviar relatos clínicos ou dados sensíveis pelo primeiro contato.</p>

      <h2>3. Cookies e métricas</h2>
      <p>Nesta versão, o site não utiliza cookies próprios de publicidade ou formulários de captura. Caso ferramentas de análise, conversão ou publicidade sejam adicionadas futuramente, esta política deverá ser atualizada e, quando aplicável, será solicitado consentimento.</p>

      <h2>4. Sigilo profissional</h2>
      <p>O sigilo relativo aos serviços psicológicos é observado nos termos do Código de Ética Profissional do Psicólogo e das normas aplicáveis. Uma mensagem inicial em plataforma externa não constitui, por si só, sessão de psicoterapia ou atendimento de urgência.</p>

      <h2>5. Compartilhamento e segurança</h2>
      <p>Dados não são vendidos. Informações somente poderão ser tratadas ou compartilhadas quando necessário para cumprir obrigação legal, regulatória ou proteger direitos, sempre observando os limites éticos e legais aplicáveis.</p>

      <h2>6. Seus direitos</h2>
      <p>Você pode solicitar informações, correção ou eliminação de dados tratados no contato, observados os deveres profissionais e os prazos legais de guarda. Para isso, utilize o WhatsApp profissional disponível no site.</p>

      <h2>7. Atendimento de urgência</h2>
      <p>Este site e o WhatsApp de agendamento não são serviços de emergência. Em situação de risco imediato, procure um serviço de urgência, ligue para o SAMU pelo 192 ou para o CVV pelo 188.</p>
    </article>
  </main>;
}
