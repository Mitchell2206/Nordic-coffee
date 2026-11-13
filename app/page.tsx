import { LoyboxHeaderButton, LoyboxSection } from "./loybox";

const instagramUrl = "https://www.instagram.com/nordiccoffee.ba/";
const menuUrl = "https://app.restolia.com/menu/nordic";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Nordic+Coffee+Juramento+4979+Buenos+Aires";
const whatsappUrl =
  "https://wa.me/5491167937463?text=Hola%20Nordic%2C%20quiero%20hacer%20una%20reserva%20%E2%9C%A8";
const tastingWhatsappUrl =
  "https://wa.me/5491167937463?text=Hola%20Nordic%2C%20quiero%20sumarme%20a%20la%20lista%20para%20la%20pr%C3%B3xima%20experiencia%20Nordic%20%E2%9C%A8";
const runeUrl = "/runas";

const productSizes = "(max-width: 820px) 100vw, 31vw";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Nordic Coffee, inicio">
          <img className="brand-emblem" src="/images/nordic-isologo-gold.webp" alt="" width={100} height={110} />
          <span className="brand-name">NORDIC<small>COFFEE</small></span>
        </a>

        <nav aria-label="Navegación principal">
          <a href="#significado">La experiencia</a>
          <a href="#favoritos">Favoritos</a>
          <a href="#catas">Catas</a>
          <a href="#visitanos">Visitanos</a>
        </nav>

        <div className="header-actions">
          <LoyboxHeaderButton />
          <a className="header-rune-primary" href={runeUrl}>
            <b aria-hidden="true">ᛉ</b><span>Descubrí tu significado</span>
          </a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Café de especialidad · Villa Urquiza</p>
          <h1>
            Tu taza tiene
            <em> un significado.</em>
          </h1>
          <p className="hero-lead">
            Encontrá la runa en tu taza Nordic o vaso take away y descubrí el
            mensaje que acompaña tu experiencia.
          </p>
          <div className="hero-actions">
            <a className="button button-rune" href={runeUrl}>
              <span aria-hidden="true">ᛉ</span> Descubrí tu significado <Arrow />
            </a>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Reservar por WhatsApp <Arrow />
            </a>
          </div>
          <p className="hero-caption">Café · Runas · Experiencia sensorial</p>
        </div>

        <div className="hero-visual">
          <img
            className="hero-photo"
            src="/images/nordic-cup-latte-1123.webp"
            srcSet="/images/nordic-cup-latte-640.webp 640w, /images/nordic-cup-latte-1123.webp 1123w"
            sizes="(max-width: 820px) 100vw, 53vw"
            width={1123}
            height={1400}
            alt="Barista preparando latte art en una taza artesanal Nordic con runa"
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="hero-story">
            <span className="hero-story-rune" aria-hidden="true">ᛉ</span>
            <div><small>ENCONTRASTE UNA RUNA</small><strong>Ahora descubrí qué significa.</strong></div>
          </div>
        </div>
      </section>

      <section className="quick-actions" aria-label="Accesos rápidos">
        <p>¿Qué querés descubrir hoy?</p>
        <div>
          <a href={runeUrl}><b>ᛉ</b><span>Leer mi runa</span><Arrow /></a>
          <a href={menuUrl} target="_blank" rel="noreferrer"><b>01</b><span>Ver el menú</span><Arrow /></a>
          <a href="#loybox"><b>02</b><span>Conocer Loybox</span><span aria-hidden="true">↓</span></a>
          <a href={mapsUrl} target="_blank" rel="noreferrer"><b>03</b><span>Cómo llegar</span><Arrow /></a>
        </div>
      </section>

      <section className="ritual section" id="significado">
        <div className="section-heading">
          <p className="eyebrow">01 · La experiencia</p>
          <h2>Tu taza.<br />Tu runa.<br /><em>Tu significado.</em></h2>
        </div>

        <div className="ritual-content">
          <p className="ritual-intro">
            Cada taza artesanal y cada vaso take away guarda una runa. No habla
            del destino: invita a mirar la energía que acompaña tu presente.
          </p>
          <div className="ritual-steps">
            <article><span>01</span><div><h3>Encontrala</h3><p>Buscá la runa en el exterior de tu taza o vaso.</p></div></article>
            <article><span>02</span><div><h3>Entrá a la lectura</h3><p>Abrí la experiencia desde el QR o desde esta página.</p></div></article>
            <article><span>03</span><div><h3>Descubrí su mensaje</h3><p>Conocé qué significa y cómo conecta con tu momento.</p></div></article>
          </div>
          <a className="rune-cta" href={runeUrl}>
            <span><b aria-hidden="true">ᛉ</b> Descubrí tu significado</span><Arrow />
          </a>
          <p className="rune-note">La lectura se abre acá, sin salir del sitio.</p>
        </div>

        <div className="ritual-quote">
          <span aria-hidden="true">ᛉ</span>
          <blockquote>“Las runas no hablan del destino; <strong>hablan del ahora.</strong>”</blockquote>
          <small>EN TAZA · EN TAKE AWAY</small>
        </div>
      </section>

      <section className="favorites section" id="favoritos">
        <div className="favorites-head">
          <div><p className="eyebrow light">02 · Favoritos de la casa</p><h2>Tres formas de<br /><em>vivir Nordic.</em></h2></div>
          <p>Café bien preparado, pastelería artesanal y platos con identidad. Una selección breve, cuidada y muy nuestra.</p>
        </div>

        <div className="products-grid">
          <article className="product-card">
            <div className="product-image coffee-card"><img src="/images/nordic-cup-latte-640.webp" srcSet="/images/nordic-cup-latte-640.webp 640w, /images/nordic-cup-latte-1123.webp 1123w" sizes={productSizes} width={640} height={798} alt="Café con latte art servido en una taza Nordic con runa" loading="lazy" decoding="async" /><span className="product-number">01</span></div>
            <div className="product-copy"><div><p>EL RITUAL EN TAZA</p><h3>Café Nordic</h3></div><span>Café de especialidad preparado y servido en nuestras tazas artesanales.</span></div>
          </article>
          <article className="product-card">
            <div className="product-image carrot-card"><img src="/images/carrot-cake-favorita-480.webp" srcSet="/images/carrot-cake-favorita-480.webp 480w, /images/carrot-cake-favorita-864.webp 864w" sizes={productSizes} width={480} height={853} alt="Carrot Cake de Nordic Coffee" loading="lazy" decoding="async" /><span className="product-number">02</span></div>
            <div className="product-copy"><div><p>LA MÁS PEDIDA</p><h3>Carrot Cake</h3></div><span>Húmeda, liviana y con ese frosting que ya es parte de la experiencia.</span></div>
          </article>
          <article className="product-card">
            <div className="product-image avo-card"><img src="/images/avo-jord-480.webp" srcSet="/images/avo-jord-480.webp 480w, /images/avo-jord-960.webp 960w" sizes={productSizes} width={480} height={451} alt="Avo Jord de Nordic Coffee servido sobre masa madre" loading="lazy" decoding="async" /><span className="product-number">03</span></div>
            <div className="product-copy"><div><p>FAVORITO NÓRDICO</p><h3>Avo Jord</h3></div><span>Hummus de morrón, palta y hongos escabechados sobre masa madre.</span></div>
          </article>
        </div>
        <a className="button button-outline-light" href={menuUrl} target="_blank" rel="noreferrer">Explorar el menú completo <Arrow /></a>
      </section>

      <LoyboxSection />

      <section className="tastings section" id="catas">
        <div className="tastings-copy">
          <p className="eyebrow light">04 · Encuentros Nordic</p>
          <h2>Próxima experiencia.<br /><em>Una noche para descubrir.</em></h2>
          <p className="tastings-intro">Catas, sabores y encuentros pensados para compartir Nordic de una manera diferente.</p>
          <div className="tasting-date" aria-label="Próxima experiencia Nordic: fecha a anunciar">
            <span>PRÓXIMA EXPERIENCIA NORDIC</span><strong>MUY PRONTO</strong><small>Sumate a la lista y enterate antes que nadie</small>
          </div>
          <a className="button button-gold" href={tastingWhatsappUrl} target="_blank" rel="noreferrer">Sumarme a la lista <Arrow /></a>
        </div>
        <figure className="tasting-main">
          <img src="/images/nordic-wine-tasting-clean-940.webp" srcSet="/images/nordic-wine-tasting-clean-600.webp 600w, /images/nordic-wine-tasting-clean-940.webp 940w" sizes="(max-width: 820px) 100vw, 55vw" width={940} height={1672} alt="Personas brindando con vino durante una cata en Nordic Coffee" loading="lazy" decoding="async" />
          <figcaption>Una experiencia sensorial, cercana y sin apuro.</figcaption>
        </figure>
      </section>

      <section className="reviews section">
        <div className="reviews-mark">“</div>
        <div className="review-copy">
          <p className="eyebrow">05 · Lo que se siente</p>
          <blockquote>“Café pequeño pero muy agradable. El ambiente es tranquilo, la atención muy amable y el café, riquísimo.”</blockquote>
          <p className="review-source">— Candelaria Cavagna · Reseña en Google</p>
        </div>
        <a className="reviews-link" href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Ver Nordic Coffee en Google Maps"><span className="rating">4.9</span><span className="stars">★★★★★</span><small>VER RESEÑAS EN GOOGLE <Arrow /></small></a>
      </section>

      <section className="visit section" id="visitanos">
        <div className="visit-panel">
          <p className="eyebrow light">06 · Vení a vivirlo</p>
          <h2>Tu próxima experiencia<br />está en <em>Villa Urquiza.</em></h2>
          <div className="visit-details">
            <div><span>DIRECCIÓN</span><p>Juramento 4979<br />Villa Urquiza, CABA</p></div>
            <div><span>HORARIOS</span><p>Lun–Vie · 8 a 20<br />Sáb · 9 a 20<br />Dom · 15 a 20</p></div>
          </div>
          <div className="visit-actions"><a className="button button-cream" href={mapsUrl} target="_blank" rel="noreferrer">Abrir en Maps <Arrow /></a><a className="text-link light-link" href={whatsappUrl} target="_blank" rel="noreferrer">Reservar por WhatsApp <Arrow /></a></div>
        </div>
        <div className="map-art">
          <span className="map-neighborhood" aria-hidden="true">VILLA<br />URQUIZA</span>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="map-pin" aria-label="Abrir ubicación en Google Maps"><i>ᛉ</i><span>NORDIC<br /><small>JURAMENTO 4979</small></span></a>
        </div>
      </section>

      <section className="team section" id="equipo">
        <div className="team-photo">
          <img src="/images/nordic-team-clean-941.webp" srcSet="/images/nordic-team-clean-600.webp 600w, /images/nordic-team-clean-941.webp 941w" sizes="(max-width: 820px) 100vw, 50vw" width={941} height={1672} alt="Jhon, integrante del equipo Nordic Coffee, detrás de la barra" loading="lazy" decoding="async" />
          <span>JHON · EQUIPO NORDIC</span>
        </div>
        <div className="team-copy">
          <p className="eyebrow">07 · El equipo</p>
          <h2>Personas que convierten cada visita en <em>una experiencia.</em></h2>
          <p className="team-intro">Jhon y el equipo Nordic trabajan cada detalle detrás de la barra: café bien preparado, curiosidad y una atención cercana.</p>
          <blockquote>“El ritual empieza mucho antes de servir la taza.”</blockquote>
          <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">Conocé más en Instagram <Arrow /></a>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#inicio"><img src="/images/nordic-isologo-gold.webp" alt="" width={100} height={110} loading="lazy" /><span>NORDIC<small>COFFEE</small></span></a>
        <p>Café de especialidad. Experiencia sensorial.</p>
        <div className="social-links"><a href={runeUrl}>Tu runa <Arrow /></a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <Arrow /></a><a href={menuUrl} target="_blank" rel="noreferrer">Menú <Arrow /></a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <Arrow /></a></div>
        <small className="copyright">Juramento 4979 · Villa Urquiza · Buenos Aires</small>
      </footer>

      <a className="mobile-rune-cta" href={runeUrl}><span aria-hidden="true">ᛉ</span> Descubrí tu significado <Arrow /></a>
    </main>
  );
}
