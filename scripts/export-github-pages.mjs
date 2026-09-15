import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const origin = process.env.STATIC_ORIGIN || "http://127.0.0.1:4173";
const base = "/Site_Patricia_Teste";
const output = path.resolve("github-pages");
const routes = [
  "",
  "artigos",
  "artigos/psicoterapia-presencial-ou-online",
  "artigos/o-que-a-psicoterapia-realmente-propoe",
  "artigos/o-que-e-psicoterapia-e-como-funciona",
  "artigos/o-sintoma-como-linguagem",
  "artigos/psicossomatica-quando-o-corpo-fala",
  "privacidade",
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp("dist/client", output, { recursive: true });
for (const unused of [
  "og.png",
  "images/eu-cadeira.jpg",
  "images/gemini-generated.png",
  "images/whatsapp-2025-08-12.jpg",
  "images/articles/o-que-e-psicoterapia-v2.png",
  "images/articles/o-que-e-psicoterapia.png",
  "images/articles/presencial-ou-online-v2.png",
  "images/articles/presencial-ou-online.png",
  "images/articles/processo-de-revelacao-v2.png",
  "images/articles/processo-de-revelacao.png",
  "images/articles/psicossomatica-v2.png",
  "images/articles/psicossomatica.png",
  "images/articles/sintoma-como-linguagem-v2.png",
  "images/articles/sintoma-como-linguagem.png",
]) await rm(path.join(output, unused), { force: true });

function imagePath(value) {
  try {
    const parsed = new URL(value, origin);
    if (parsed.pathname !== "/_next/image") return value;
    return decodeURIComponent(parsed.searchParams.get("url") || value);
  } catch {
    return value;
  }
}

function makeStatic(html) {
  let result = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
    .replace(/\s+srcSet=["'][^"']*["']/gi, "")
    .replace(/src=["']([^"']*\/_next\/image\?[^"']*)["']/gi, (_, src) => `src="${base}${imagePath(src)}"`)
    .replace(/(href|src)=["']\/_next\//gi, `$1="${base}/_next/`)
    .replace(/src=["']\/(images\/|og-home\.jpg|favicon\.svg)/gi, `src="${base}/$1`)
    .replace(/href=["']\/artigos\/([^"'#?]+)["']/gi, `href="${base}/artigos/$1/"`)
    .replace(/href=["']\/artigos["']/gi, `href="${base}/artigos/"`)
    .replace(/href=["']\/privacidade["']/gi, `href="${base}/privacidade/"`)
    .replace(/https:\/\/psicopatriciarocha\.com\.br\/og-home\.jpg/g, `https://nutriandrigo31.github.io${base}/og-home.jpg`);

  const navigationScript = `<script>
  (() => {
    const maps = "https://www.google.com/maps/search/?api=1&query=Rua%20Bar%C3%A3o%20do%20Triunfo%2C%20720%2C%20sala%20308%2C%20Menino%20Deus%2C%20Porto%20Alegre%2C%20RS%2C%2090130-100";
    const waze = "https://www.waze.com/ul?q=Rua%20Bar%C3%A3o%20do%20Triunfo%2C%20720%2C%20Menino%20Deus%2C%20Porto%20Alegre%2C%20RS%2C%2090130-100&navigate=yes";
    const openDirections = () => {
      const backdrop = document.createElement("div");
      backdrop.className = "directions-backdrop";
      backdrop.innerHTML = '<section class="directions-dialog" role="dialog" aria-modal="true" aria-labelledby="directions-title"><button class="directions-close" type="button" aria-label="Fechar">×</button><p class="kicker">Como chegar</p><h2 id="directions-title">Escolha seu aplicativo de navegação.</h2><p>Rua Barão do Triunfo, 720 · sala 308<br>Menino Deus · Porto Alegre/RS</p><div class="directions-options"><a href="' + maps + '" target="_blank" rel="noreferrer"><small>Ver mapa e rotas</small><strong>Google Maps</strong><span>Abrir ↗</span></a><a href="' + waze + '" target="_blank" rel="noreferrer"><small>Navegação em tempo real</small><strong>Waze</strong><span>Abrir ↗</span></a></div></section>';
      const close = () => { backdrop.remove(); document.body.style.overflow = ""; };
      backdrop.addEventListener("click", event => { if (event.target === backdrop) close(); });
      backdrop.querySelector(".directions-close").addEventListener("click", close);
      document.addEventListener("keydown", function escape(event) { if (event.key === "Escape") { close(); document.removeEventListener("keydown", escape); } });
      document.body.appendChild(backdrop);
      document.body.style.overflow = "hidden";
    };
    document.querySelectorAll(".inline-location-button,.location-choice-button,.contact-location-button").forEach(button => button.addEventListener("click", openDirections));
  })();
  </script>`;
  return result.replace("</body>", `${navigationScript}</body>`);
}

for (const route of routes) {
  const response = await fetch(`${origin}/${route}`);
  if (!response.ok) throw new Error(`Falha ao gerar /${route}: ${response.status}`);
  const directory = path.join(output, route);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), makeStatic(await response.text()));
}

await writeFile(path.join(output, ".nojekyll"), "");
console.log(output);
