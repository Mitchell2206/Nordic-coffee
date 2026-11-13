// Server component: the campaign date is evaluated per request on the server,
// so no client JS is shipped and there is no hydration mismatch at the cutoff.
const loyboxUrl = "https://app.loybox.com.ar/inicio?callbackUrl=%2Fdashboard";
const campaignEnd = Date.UTC(2026, 8, 1, 2, 59, 59);

function isCampaignActive() {
  return Date.now() <= campaignEnd;
}

export function LoyboxHeaderButton() {
  const active = isCampaignActive();
  return (
    <a className="header-loybox" href={loyboxUrl} target="_blank" rel="noreferrer">
      <span>Loybox</span>{active && <b>PUNTOS x2</b>}
    </a>
  );
}

export function LoyboxSection() {
  const active = isCampaignActive();
  return (
    <section className="loybox section" id="loybox">
      <div className="loybox-heading">
        <p className="eyebrow">04 · Beneficios Nordic</p>
        <span className="loybox-badge" aria-hidden="true">
          {active ? "x2" : <i className="glyph glyph-bean" />}
        </span>
        <h2>{active ? <>Viví Hora Fika y <em>sumá el doble.</em></> : <>Cada experiencia <em>también suma.</em></>}</h2>
      </div>
      <div className="loybox-content">
        {active && <div className="fika-dates"><strong>31 JUL — 31 AGO</strong><span>Lunes a viernes</span><span>8:00–10:00 · 14:30–16:30</span></div>}
        <p>{active ? "Durante estas franjas, todos tus consumos acumulan puntos x2 en Loybox." : "Registrate gratis, sumá puntos con tus consumos y descubrí los premios disponibles."}</p>
        <ul>
          <li>Registro gratuito</li>
          <li>Saldo y premios desde Loybox</li>
          <li>Beneficios especiales de Nordic</li>
        </ul>
        <a className="button button-night" href={loyboxUrl} target="_blank" rel="noreferrer">{active ? "Registrarme y sumar x2" : "Conocer Loybox"} <span className="arrow" aria-hidden="true">↗</span></a>
        {active && <small>Promoción válida en los días y horarios indicados. No acumulable con otros descuentos.</small>}
      </div>
    </section>
  );
}
