import { LoyboxHeaderButton, LoyboxSection } from "./loybox";

const instagramUrl = "https://www.instagram.com/nordiccoffee.ba/";
const menuUrl = "https://app.restolia.com/menu/nordic";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Nordic+Coffee+Juramento+4979+Buenos+Aires";
const whatsappUrl =
  "https://wa.me/5491167937463?text=Hola%20Nordic%2C%20quiero%20hacer%20una%20reserva%20%E2%9C%A8";
const tastingWhatsappUrl =
  "https://wa.me/5491167937463?text=Hola%20Nordic%2C%20quisiera%20recibir%20informaci%C3%B3n%20sobre%20la%20cata%20de%20vinos%20del%2014%20de%20agosto%20%E2%9C%A8";
const runeUrl =
  "https://aistudio.instagram.com/ai/581787608285357/?utm_source=mshare";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Nordic Coffee, inicio">
          <img className="brand-emblem" src="/images/nordic-isologo-gold.png" alt="" />
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
          <a className="header-rune-primary" href={runeUrl} target="_blank" rel="noreferrer">
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
            <a className="button button-rune" href={runeUrl} target="_blank" rel="noreferrer">
              <span aria-hidden="true">ᛉ</span> Descubrí tu significado <Arrow />
            </a>
            <a className="text-link" href="#significado">
              Cómo funciona <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-caption">Café · Runas · Experiencia sensorial</p>
        </div>

        <div className="hero-visual">
          <img
            className="hero-photo"
            src="/images/nordic-cup-latte.jpeg"
            alt="Barista preparando latte art en una taza artesanal Nordic con runa"
            fetchPriority="high"
            decoding="async"
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
          <a href={runeUrl} target="_blank" rel="noreferrer"><b>ᛉ</b><span>Leer mi runa</span><Arrow /></a>
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
          <a className="rune-cta" href={runeUrl} target="_blank" rel="noreferrer">
            <span><b aria-hidden="true">ᛉ</b> Descubrí tu significado</span><Arrow />
          </a>
          <p className="rune-note">La lectura se abre en Instagram.</p>
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
            <div className="product-image coffee-card"><img src="/images/nordic-cup-latte.jpeg" alt="Café con latte art servido en una taza Nordic con runa" loading="lazy" decoding="async" /><span className="product-number">01</span></div>
            <div className="product-copy"><div><p>EL RITUAL EN TAZA</p><h3>Café Nordic</h3></div><span>Café de especialidad preparado y servido en nuestras tazas artesanales.</span></div>
          </article>
          <article className="product-card">
            <div className="product-image carrot-card"><img src="/images/carrot-cake-favorita.jpeg" alt="Carrot Cake de Nordic Coffee" loading="lazy" decoding="async" /><span className="product-number">02</span></div>
            <div className="product-copy"><div><p>LA MÁS PEDIDA</p><h3>Carrot Cake</h3></div><span>Húmeda, liviana y con ese frosting que ya es parte de la experiencia.</span></div>
          </article>
          <article className="product-card">
            <div className="product-image avo-card"><img src="/images/avo-jord.png" alt="Avo Jord de Nordic Coffee servido sobre masa madre" loading="lazy" decoding="async" /><span className="product-number">03</span></div>
            <div className="product-copy"><div><p>FAVORITO NÓRDICO</p><h3>Avo Jord</h3></div><span>Hummus de morrón, palta y hongos escabechados sobre masa madre.</span></div>
          </article>
        </div>
        <a className="button button-outline-light" href={menuUrl} target="_blank" rel="noreferrer">Explorar el menú completo <Arrow /></a>
      </section>

      <LoyboxSection />

      <section className="team section" id="equipo">
        <div className="team-photo">
          <img src="/images/nordic-team-clean.png" alt="John, integrante del equipo Nordic Coffee, detrás de la barra" loading="lazy" decoding="async" />
          <span>JOHN · EQUIPO NORDIC</span>
        </div>
        <div className="team-copy">
          <p className="eyebrow">04 · El equipo</p>
          <h2>Personas que convierten cada visita en <em>una experiencia.</em></h2>
          <p className="team-intro">John y el equipo Nordic trabajan cada detalle detrás de la barra: café bien preparado, curiosidad y una atención cercana.</p>
          <blockquote>“El ritual empieza mucho antes de servir la taza.”</blockquote>
          <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">Conocé más en Instagram <Arrow /></a>
        </div>
      </section>

      <section className="tastings section" id="catas">
        <div className="tastings-copy">
          <p className="eyebrow light">05 · Nordic Noir</p>
          <h2>Cata de vinos.<br /><em>Una noche para descubrir.</em></h2>
          <p className="tastings-intro">Una experiencia sensorial alrededor del vino: nuevos sabores, conversación y una mesa compartida en Nordic.</p>
          <div className="tasting-date" aria-label="Próxima cata de vinos: 14 de agosto de 2026">
            <span>PRÓXIMA CATA DE VINOS</span><strong>14 · AGO</strong><small>2026 · Consultanos por disponibilidad</small>
          </div>
          <a className="button button-gold" href={tastingWhatsappUrl} target="_blank" rel="noreferrer">Consultar por WhatsApp <Arrow /></a>
        </div>
        <figure className="tasting-main">
          <img src="/images/nordic-wine-tasting-clean.png" alt="Personas brindando con vino durante una cata en Nordic Coffee" loading="lazy" decoding="async" />
          <figcaption>Una experiencia sensorial, cercana y sin apuro.</figcaption>
        </figure>
      </section>

      <section className="reviews section">
        <div className="reviews-mark">“</div>
        <div className="review-copy">
          <p className="eyebrow">06 · Lo que se siente</p>
          <blockquote>“La atención es súper cálida, el café riquísimo y las tazas con runas hacen que la experiencia sea única.”</blockquote>
          <p className="review-source">— Inspirado en reseñas de quienes ya vivieron Nordic</p>
        </div>
        <a className="reviews-link" href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Ver Nordic Coffee en Google Maps"><span className="rating">4.9</span><span className="stars">★★★★★</span><small>VER RESEÑAS EN GOOGLE <Arrow /></small></a>
      </section>

      <section className="visit section" id="visitanos">
        <div className="visit-panel">
          <p className="eyebrow light">07 · Vení a vivirlo</p>
          <h2>Tu próxima experiencia<br />está en <em>Villa Urquiza.</em></h2>
          <div className="visit-details">
            <div><span>DIRECCIÓN</span><p>Juramento 4979<br />Villa Urquiza, CABA</p></div>
            <div><span>HORARIOS</span><p>Lun–Vie · 8 a 20<br />Sáb · 9 a 20<br />Dom · 15 a 20</p></div>
          </div>
          <div className="visit-actions"><a className="button button-cream" href={mapsUrl} target="_blank" rel="noreferrer">Abrir en Maps <Arrow /></a><a className="text-link light-link" href={whatsappUrl} target="_blank" rel="noreferrer">Reservar por WhatsApp <Arrow /></a></div>
        </div>
        <div className="map-art" aria-label="Ubicación de Nordic Coffee en Villa Urquiza">
          <span className="map-neighborhood">VILLA<br />URQUIZA</span>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="map-pin" aria-label="Abrir ubicación en Google Maps"><i>ᛉ</i><span>NORDIC<br /><small>JURAMENTO 4979</small></span></a>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#inicio"><img src="/images/nordic-isologo-gold.png" alt="" /><span>NORDIC<small>COFFEE</small></span></a>
        <p>Café de especialidad. Experiencia sensorial.</p>
        <div className="social-links"><a href={runeUrl} target="_blank" rel="noreferrer">Tu runa <Arrow /></a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <Arrow /></a><a href={menuUrl} target="_blank" rel="noreferrer">Menú <Arrow /></a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <Arrow /></a></div>
        <small className="copyright">Juramento 4979 · Villa Urquiza · Buenos Aires</small>
      </footer>

      <a className="mobile-rune-cta" href={runeUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">ᛉ</span> Descubrí tu significado <Arrow /></a>
    </main>
  );
}
