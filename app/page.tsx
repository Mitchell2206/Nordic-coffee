import { LoyboxHeaderButton, LoyboxSection } from "./loybox";
import { runes } from "./runas/runes";
import { isHolidaySeason } from "./season";

const instagramUrl = "https://www.instagram.com/nordiccoffee.ba/";
const menuUrl = "https://app.restolia.com/menu/nordic";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Nordic+Coffee+Juramento+4979+Buenos+Aires";
const whatsappUrl =
  "https://wa.me/5491167937463?text=Hola%20Nordic%2C%20quiero%20hacer%20una%20reserva%20%E2%9C%A8";
const tastingWhatsappUrl =
  "https://wa.me/5491167937463?text=Hola%20Nordic%2C%20quiero%20sumarme%20a%20la%20lista%20para%20la%20pr%C3%B3xima%20experiencia%20Nordic%20%E2%9C%A8";
const runeUrl = "/runas";

// Re-render hourly so time-based content (e.g. the Loybox campaign) stays current
// when the page is statically generated.
export const revalidate = 3600;

const productSizes = "(max-width: 820px) 100vw, 31vw";

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

/** Brand line-art (mountains, cup, rune, bean) drawn from the Nordic illustrations. */
const Glyph = ({ name }: { name: "mountains" | "cup" | "rune" | "bean" }) => (
  <i className={`glyph glyph-${name}`} aria-hidden="true" />
);

const runeSymbols = runes.map((rune) => rune.symbol).join("  ");

const avocados = [
  { name: "Avo Sueco", description: "Hummus de remolacha, palta y sésamo negro.", price: "$14.500", image: "avo-sueco", large: 900 },
  { name: "Avo Nordlys", description: "Hummus de zanahoria, lomito en finas hierbas y palta.", price: "$15.500", image: "avo-nordlys", large: 900 },
  { name: "Avo Jord", description: "Hummus de morrón, palta, hongos y castañas.", price: "$16.500", image: "avo-jord-temporada", large: 760 },
  { name: "Avo Clásico", description: "Palta, huevo poché, oliva y dukkah.", price: "$15.500", image: "avo-clasico", large: 900 },
];

const fungiLattes = [
  { name: "Matcha Fungi Latte", description: "Matcha ceremonial y mezcla de hongos.", price: "$5.500", color: "radial-gradient(circle, #b9cf7a, #6f8f3c 70%)" },
  { name: "Golden Fungi Latte", description: "Cúrcuma, especias y mezcla de hongos.", price: "$5.500", color: "radial-gradient(circle, #f3c45a, #c98a1c 70%)" },
  { name: "Cacao Chai Fungi Latte", description: "Cacao, especias chai y mezcla de hongos.", price: "$5.500", color: "radial-gradient(circle, #b98a64, #6b4128 70%)" },
];

const juices = [
  { name: "Verde", description: "Naranja, kale, apio, jengibre, pepino, espinaca y perejil", image: "jugo-verde" },
  { name: "Dtox", description: "Maracuyá, frutilla, naranja y menta", image: "jugo-dtox" },
  { name: "Rojo", description: "Remolacha, naranja, limón y jengibre", image: "jugo-rojo" },
];

export default function Home() {
  const holiday = isHolidaySeason();

  return (
    <main className={holiday ? "home holiday" : "home"}>
      <header className="site-header">
        <a className="logo" href="#inicio" aria-label="Nordic Coffee, inicio">
          <span className="logo-mark" />
        </a>

        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#significado">La experiencia</a>
          <a href="#temporada">Temporada</a>
          <a href="#favoritos">Favoritos</a>
          <a href="#catas">Catas</a>
          <a href="#visitanos">Visitanos</a>
        </nav>

        <div className="header-actions">
          <LoyboxHeaderButton />
          <a className="header-cta" href={runeUrl}>
            <b aria-hidden="true">ᛉ</b>
            <span>Descubrí tu significado</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="inicio">
        <Glyph name="mountains" />
        <span className="sprig sprig-tl" aria-hidden="true" />
        {holiday && (
          <>
            <span className="star" style={{ top: "18%", left: "44%" }} aria-hidden="true" />
            <span className="star" style={{ top: "70%", left: "6%", width: 12, height: 12 }} aria-hidden="true" />
            <span className="star" style={{ top: "12%", right: "8%", width: 14, height: 14 }} aria-hidden="true" />
          </>
        )}
        <div className="hero-copy">
          {holiday && (
            <p className="holiday-pill"><b aria-hidden="true">✦</b>Navidad de verano · Felices fiestas</p>
          )}
          <p className="eyebrow">
            <span className="dot" aria-hidden="true" /> Café de especialidad · Villa Urquiza
          </p>
          <h1>
            Tu taza tiene
            <em> un significado.</em>
          </h1>
          <p className="hero-lead">
            Encontrá la runa en tu taza Nordic o vaso take away y descubrí el
            mensaje que acompaña tu experiencia.
          </p>
          <div className="hero-actions">
            <a className="button button-night" href={runeUrl}>
              <b aria-hidden="true">ᛉ</b> Descubrí tu significado <Arrow />
            </a>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Reservar por WhatsApp <Arrow />
            </a>
          </div>
          <ul className="hero-tags" aria-label="Lo que vas a encontrar">
            <li>Café</li>
            <li>Runas</li>
            <li>Experiencia sensorial</li>
          </ul>
        </div>

        <figure className="hero-visual">
          <div className="arch arch-hero">
            <img
              src="/images/nordic-cup-latte-1123.webp"
              srcSet="/images/nordic-cup-latte-640.webp 640w, /images/nordic-cup-latte-1123.webp 1123w"
              sizes="(max-width: 820px) 90vw, 40vw"
              width={1123}
              height={1400}
              alt="Barista preparando latte art en una taza artesanal Nordic con runa"
              fetchPriority="high"
            />
          </div>
          <figcaption className="hero-story">
            <span className="rune-seal" aria-hidden="true">ᛉ</span>
            <span>
              <small>Encontraste una runa</small>
              <strong>Ahora descubrí qué significa.</strong>
            </span>
          </figcaption>
        </figure>
      </section>

      <div className="rune-band" aria-hidden="true">
        <div>
          <span>{runeSymbols}</span>
          <span>{runeSymbols}</span>
        </div>
      </div>

      {/* Quick actions */}
      <section className="quick-actions" aria-labelledby="quick-title">
        <h2 id="quick-title">¿Qué querés descubrir hoy?</h2>
        <div className="quick-grid">
          <a href={runeUrl}>
            <Glyph name="rune" />
            <span>Leer mi runa</span>
            <Arrow />
          </a>
          <a href={menuUrl} target="_blank" rel="noreferrer">
            <Glyph name="cup" />
            <span>Ver el menú</span>
            <Arrow />
          </a>
          <a href="#loybox">
            <Glyph name="bean" />
            <span>Conocer Loybox</span>
            <span className="arrow" aria-hidden="true">↓</span>
          </a>
          <a href={mapsUrl} target="_blank" rel="noreferrer">
            <Glyph name="mountains" />
            <span>Cómo llegar</span>
            <Arrow />
          </a>
        </div>
      </section>

      {/* La experiencia */}
      <section className="ritual section paper" id="significado">
        <div className="ritual-head">
          <p className="eyebrow">01 · La experiencia</p>
          <h2>
            Tu taza. Tu runa.
            <em>Tu significado.</em>
          </h2>
          <p className="ritual-intro">
            Cada taza artesanal y cada vaso take away guarda una runa. No habla
            del destino: invita a mirar la energía que acompaña tu presente.
          </p>
        </div>

        <ol className="ritual-steps">
          <li>
            <Glyph name="cup" />
            <span className="step-number">01</span>
            <h3>Encontrala</h3>
            <p>Buscá la runa en el exterior de tu taza o vaso.</p>
          </li>
          <li>
            <Glyph name="rune" />
            <span className="step-number">02</span>
            <h3>Entrá a la lectura</h3>
            <p>Abrí la experiencia desde el QR o desde esta página.</p>
          </li>
          <li>
            <Glyph name="bean" />
            <span className="step-number">03</span>
            <h3>Descubrí su mensaje</h3>
            <p>Conocé qué significa y cómo conecta con tu momento.</p>
          </li>
        </ol>

        <div className="ritual-cta">
          <a className="button button-night" href={runeUrl}>
            <b aria-hidden="true">ᛉ</b> Descubrí tu significado <Arrow />
          </a>
          <p className="rune-note">La lectura se abre acá, sin salir del sitio.</p>
        </div>

        <aside className="ritual-quote">
          <span className="rune-seal" aria-hidden="true">ᛉ</span>
          <blockquote>
            “Las runas no hablan del destino; <strong>hablan del ahora.</strong>”
          </blockquote>
          <small>En taza · En take away</small>
          <Glyph name="mountains" />
        </aside>
      </section>

      {/* Carta Primavera / Verano */}
      <section className="season section paper" id="temporada">
        <span className="sprig sprig-tl" aria-hidden="true" />
        <span className="sprig sprig-tr" aria-hidden="true" />
        <div className="season-head">
          <p className="eyebrow">02 · Carta Primavera / Verano 2026</p>
          <h2>
            La nueva
            <em>temporada.</em>
          </h2>
          <p>Café de especialidad, comida real y bienestar. Ingredientes con propósito para los días largos.</p>
        </div>

        <article className="season-feature">
          <div className="photo">
            <img src="/images/ritual-proteico-1000.webp" srcSet="/images/ritual-proteico-560.webp 560w, /images/ritual-proteico-1000.webp 1000w" sizes="(max-width: 820px) 90vw, 520px" width={1000} height={1000} alt="Ritual Proteico: panceta, huevos revueltos, palta, tomates cherry y tostadas, con latte y jugo de naranja" loading="lazy" decoding="async" />
          </div>
          <div>
            <p className="eyebrow">Lanzamiento de temporada <span className="badge-new">Nuevo</span></p>
            <h3>
              Ritual
              <em>Proteico</em>
            </h3>
            <p>Panceta crocante, huevos revueltos, tomates cherry, queso crema, pan semi integral con semillas y palta.</p>
            <span className="includes"><Glyph name="cup" /> Incluye latte + jugo de naranja</span>
          </div>
        </article>

        <div className="season-block">
          <div className="season-block-head">
            <h3>Avocados nórdicos</h3>
            <span>Elegí tu tostón de masa madre</span>
          </div>
          <div className="avo-grid">
            {avocados.map((avo) => (
              <article className="avo-card" key={avo.name}>
                <div className="photo">
                  <img src={`/images/${avo.image}-480.webp`} srcSet={`/images/${avo.image}-480.webp 480w, /images/${avo.image}-${avo.large}.webp ${avo.large}w`} sizes="(max-width: 1180px) 45vw, 260px" width={480} height={360} alt={`${avo.name} de Nordic Coffee`} loading="lazy" decoding="async" />
                </div>
                <h4>{avo.name}</h4>
                <p>{avo.description}</p>
                <span className="price">{avo.price}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="season-pair">
          <div className="season-panel fungi-panel">
            <span>Adaptógenos</span>
            <h3>Fungi Lattes</h3>
            <ul className="fungi-list">
              {fungiLattes.map((latte) => (
                <li key={latte.name}>
                  <i style={{ background: latte.color }} aria-hidden="true" />
                  <div><strong>{latte.name}</strong><small>{latte.description}</small></div>
                  <span className="price">{latte.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="season-panel juice-panel">
            <span>Prensados en frío · 100% natural</span>
            <h3>Jugos naturales</h3>
            <div className="juice-grid">
              {juices.map((juice) => (
                <figure className="juice" key={juice.name}>
                  <div className="img">
                    <img src={`/images/${juice.image}-420.webp`} srcSet={`/images/${juice.image}-420.webp 420w, /images/${juice.image}-800.webp 800w`} sizes="(max-width: 820px) 30vw, 160px" width={420} height={420} alt={`Jugo ${juice.name} prensado en frío`} loading="lazy" decoding="async" />
                  </div>
                  <figcaption><strong>{juice.name}</strong><small>{juice.description}</small></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="season-cta">
          <a className="button button-night" href={menuUrl} target="_blank" rel="noreferrer">Ver la carta completa <Arrow /></a>
        </div>
      </section>

      {/* Favoritos */}
      <section className="favorites section" id="favoritos">
        <div className="favorites-head">
          <div>
            <p className="eyebrow">03 · Favoritos de la casa</p>
            <h2>
              Tres formas de
              <em>vivir Nordic.</em>
            </h2>
          </div>
          <p>
            Café bien preparado, pastelería artesanal y platos con identidad.
            Una selección breve, cuidada y muy nuestra.
          </p>
        </div>

        <div className="products-grid">
          <article className="product-card">
            <div className="arch product-image coffee-card">
              <img src="/images/taza-verde-560.webp" srcSet="/images/taza-verde-560.webp 560w, /images/taza-verde-1000.webp 1000w" sizes={productSizes} width={560} height={560} alt="Latte con latte art en una taza artesanal verde de Nordic Coffee con runa" loading="lazy" decoding="async" />
            </div>
            <div className="product-copy">
              <span className="product-number">01</span>
              <p>El ritual en taza</p>
              <h3>Café Nordic</h3>
              <span>Café de especialidad preparado y servido en nuestras tazas artesanales.</span>
            </div>
          </article>
          <article className="product-card">
            <div className="arch product-image carrot-card">
              <img src="/images/carrot-cake-520.webp" srcSet="/images/carrot-cake-520.webp 520w, /images/carrot-cake-1000.webp 1000w" sizes={productSizes} width={520} height={354} alt="Carrot Cake de Nordic Coffee" loading="lazy" decoding="async" />
            </div>
            <div className="product-copy">
              <span className="product-number">02</span>
              <p>La más pedida</p>
              <h3>Carrot Cake</h3>
              <span>Húmeda, liviana y con ese frosting que ya es parte de la experiencia.</span>
            </div>
          </article>
          <article className="product-card">
            <div className="arch product-image avo-card">
              <img src="/images/avo-jord-480.webp" srcSet="/images/avo-jord-480.webp 480w, /images/avo-jord-960.webp 960w" sizes={productSizes} width={480} height={451} alt="Avo Jord de Nordic Coffee servido sobre masa madre" loading="lazy" decoding="async" />
            </div>
            <div className="product-copy">
              <span className="product-number">03</span>
              <p>Favorito nórdico</p>
              <h3>Avo Jord</h3>
              <span>Hummus de morrón, palta y hongos escabechados sobre masa madre.</span>
            </div>
          </article>
        </div>
        <a className="button button-outline-light" href={menuUrl} target="_blank" rel="noreferrer">
          Explorar el menú completo <Arrow />
        </a>
      </section>

      <LoyboxSection />

      {/* Catas */}
      <section className="tastings section" id="catas">
        <div className="tastings-copy">
          <p className="eyebrow">05 · Encuentros Nordic</p>
          <h2>
            Próxima experiencia.
            <em>Una noche para descubrir.</em>
          </h2>
          <p className="tastings-intro">
            Catas, sabores y encuentros pensados para compartir Nordic de una
            manera diferente.
          </p>
          <div className="tasting-date" aria-label="Próxima experiencia Nordic: fecha a anunciar">
            <span>Próxima experiencia Nordic</span>
            <strong>Muy pronto</strong>
            <small>Sumate a la lista y enterate antes que nadie</small>
          </div>
          <a className="button button-gold" href={tastingWhatsappUrl} target="_blank" rel="noreferrer">
            Sumarme a la lista <Arrow />
          </a>
        </div>
        <figure className="tasting-main">
          <div className="arch">
            <img src="/images/nordic-wine-tasting-clean-940.webp" srcSet="/images/nordic-wine-tasting-clean-600.webp 600w, /images/nordic-wine-tasting-clean-940.webp 940w" sizes="(max-width: 820px) 90vw, 45vw" width={940} height={1672} alt="Personas brindando con vino durante una cata en Nordic Coffee" loading="lazy" decoding="async" />
          </div>
          <figcaption>Una experiencia sensorial, cercana y sin apuro.</figcaption>
        </figure>
      </section>

      {/* Reseñas */}
      <section className="reviews section paper">
        <div className="reviews-layout">
          <figure className="moment-photo">
            <div>
              <img src="/images/brunch-perrito-941.webp" srcSet="/images/brunch-perrito-560.webp 560w, /images/brunch-perrito-941.webp 941w" sizes="(max-width: 820px) 90vw, 440px" width={941} height={945} alt="Mesa de brunch en Nordic Coffee con lattes, tostado, avocado toast y un perro salchicha acompañando" loading="lazy" decoding="async" />
            </div>
            <figcaption><span>Desayuno</span><span>Brunch</span><span>Algo dulce</span><span className="dog">ᛉ Dog friendly</span></figcaption>
          </figure>
          <div>
        <p className="eyebrow">06 · Lo que se siente</p>
        <blockquote>
          “Café pequeño pero muy agradable. El ambiente es tranquilo, la
          atención muy amable y el café, riquísimo.”
        </blockquote>
        <p className="review-source">Candelaria Cavagna · Reseña en Google</p>
        <a className="reviews-link" href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Ver Nordic Coffee en Google Maps: 4,9 de 5 estrellas">
          <span className="rating">4.9</span>
          <span className="stars" aria-hidden="true">★★★★★</span>
          <small>Ver reseñas en Google <Arrow /></small>
        </a>
                </div>
        </div>
      </section>

      {/* Visitanos */}
      <section className="visit" id="visitanos">
        <div className="visit-panel">
          <p className="eyebrow">07 · Vení a vivirlo</p>
          <h2>
            Tu próxima experiencia está en
            <em>Villa Urquiza.</em>
          </h2>
          <div className="visit-details">
            <div>
              <span>Dirección</span>
              <p>Juramento 4979<br />Villa Urquiza, CABA</p>
            </div>
            <div>
              <span>Horarios</span>
              <dl className="hours">
                <dt>Lun–Vie</dt><dd>8 a 20</dd>
                <dt>Sáb</dt><dd>9 a 20</dd>
                <dt>Dom</dt><dd>15 a 20</dd>
              </dl>
            </div>
          </div>
          <div className="visit-actions">
            <a className="button button-cream" href={mapsUrl} target="_blank" rel="noreferrer">Abrir en Maps <Arrow /></a>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Reservar por WhatsApp <Arrow /></a>
          </div>
        </div>
        <div className="map-art">
          <Glyph name="mountains" />
          <span className="map-neighborhood" aria-hidden="true">Villa<br />Urquiza</span>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="map-pin" aria-label="Abrir ubicación en Google Maps">
            <i aria-hidden="true"><b>ᛉ</b></i>
            <span>Nordic<small>Juramento 4979</small></span>
          </a>
        </div>
      </section>

      {/* Equipo */}
      <section className="team section paper" id="equipo">
        <figure className="team-photo">
          <div className="arch">
            <img src="/images/nordic-team-clean-941.webp" srcSet="/images/nordic-team-clean-600.webp 600w, /images/nordic-team-clean-941.webp 941w" sizes="(max-width: 820px) 90vw, 40vw" width={941} height={1672} alt="Jhon, integrante del equipo Nordic Coffee, detrás de la barra" loading="lazy" decoding="async" />
          </div>
          <figcaption>Jhon · Equipo Nordic</figcaption>
        </figure>
        <div className="team-copy">
          <p className="eyebrow">08 · El equipo</p>
          <h2>
            Personas que convierten cada visita en
            <em>una experiencia.</em>
          </h2>
          <p className="team-intro">
            Jhon y el equipo Nordic trabajan cada detalle detrás de la barra:
            café bien preparado, curiosidad y una atención cercana.
          </p>
          <blockquote>“El ritual empieza mucho antes de servir la taza.”</blockquote>
          <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">
            Conocé más en Instagram <Arrow />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <Glyph name="mountains" />
        <a className="logo" href="#inicio" aria-label="Nordic Coffee, volver al inicio">
          <span className="logo-mark" />
        </a>
        <p>Café de especialidad. Experiencia sensorial.</p>
        <div className="social-links">
          <a href={runeUrl}>Tu runa <Arrow /></a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <Arrow /></a>
          <a href={menuUrl} target="_blank" rel="noreferrer">Menú <Arrow /></a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <Arrow /></a>
        </div>
        <small className="copyright">Juramento 4979 · Villa Urquiza · Buenos Aires</small>
      </footer>

      <a className="mobile-rune-cta" href={runeUrl}>
        <b aria-hidden="true">ᛉ</b> Descubrí tu significado <Arrow />
      </a>
    </main>
  );
}
