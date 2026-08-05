"use client";

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
        <p className="eyebrow">03 · Beneficios Nordic</p>
        <span className="loybox-x2">{active ? "x2" : "✦"}</span>
        <h2>{active ? <>Viví Hora Fika<br />y <em>sumá el doble.</em></> : <>Cada experiencia<br /><em>también suma.</em></>}</h2>
      </div>
      <div className="loybox-content">
        {active && <div className="fika-dates"><strong>31 JUL — 31 AGO</strong><span>Lunes a viernes</span><span>8:00–10:00 · 14:30–16:30</span></div>}
        <p>{active ? "Durante estas franjas, todos tus consumos acumulan puntos x2 en Loybox." : "Registrate gratis, sumá puntos con tus consumos y descubrí los premios disponibles."}</p>
        <ul><li>Registro gratuito</li><li>Saldo y premios desde Loybox</li><li>Beneficios especiales de Nordic</li></ul>
        <a className="button button-loybox" href={loyboxUrl} target="_blank" rel="noreferrer">{active ? "Registrarme y sumar x2" : "Conocer Loybox"}<span aria-hidden="true">↗</span></a>
        {active && <small>Promoción válida en los días y horarios indicados. No acumulable con otros descuentos.</small>}
      </div>
    </section>
  );
}
