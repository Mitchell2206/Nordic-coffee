"use client";

import { useMemo, useRef, useState } from "react";
import { runes } from "./runes";

const reviewUrl =
  "https://maps.app.goo.gl/bkiMaBvT8HbFcvHE6?g_st=com.google.maps.preview.copy";

type Feedback = "yes" | "later" | null;

export function RuneExperience({ initialSlug }: { initialSlug?: string }) {
  const [selectedSlug, setSelectedSlug] = useState(initialSlug ?? null);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [shareStatus, setShareStatus] = useState("");
  const readingRef = useRef<HTMLDivElement>(null);

  const selectedRune = useMemo(
    () => runes.find((rune) => rune.slug === selectedSlug) ?? null,
    [selectedSlug],
  );

  const selectRune = (slug: string) => {
    setSelectedSlug(slug);
    setFeedback(null);
    setShareStatus("");

    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("runa", slug);
    window.history.replaceState({}, "", nextUrl);

    window.setTimeout(() => {
      readingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const chooseAnotherRune = () => {
    setSelectedSlug(null);
    setFeedback(null);
    setShareStatus("");

    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.delete("runa");
    window.history.replaceState({}, "", nextUrl);
    document.querySelector(".runes-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const shareRune = async () => {
    if (!selectedRune) return;

    const text = `${selectedRune.symbol} ${selectedRune.name} · ${selectedRune.essence}\n\n${selectedRune.message}\n\nDescubrí tu runa en Nordic Coffee.`;
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${selectedRune.name} · Tu runa Nordic`,
          text,
          url,
        });
        setShareStatus("Tu runa está lista para compartir ✨");
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setShareStatus("Copiamos tu lectura para que puedas compartirla ✨");
    } catch {
      setShareStatus("Podés compartir esta página desde el menú de tu navegador.");
    }
  };

  return (
    <>
      <section className="runes-intro">
        <p className="runes-eyebrow">El ritual de las runas</p>
        <h1>
          Tu runa
          <em> ya apareció.</em>
        </h1>
        <p>
          Buscá el símbolo que encontraste en tu taza o vaso y tocá para
          descubrir el mensaje que acompaña tu momento.
        </p>
        <blockquote>
          “Las runas no hablan del destino; <strong>hablan del ahora.</strong>”
        </blockquote>
      </section>

      <section className="runes-picker" aria-labelledby="runes-picker-title">
        <div className="runes-picker-heading">
          <div>
            <p>01 · Encontrá tu símbolo</p>
            <h2 id="runes-picker-title">¿Cuál te eligió a vos?</h2>
          </div>
          <span>24 runas · Elder Futhark</span>
        </div>

        <div className="runes-grid">
          {runes.map((rune, index) => (
            <button
              className={selectedSlug === rune.slug ? "is-selected" : ""}
              key={rune.slug}
              type="button"
              aria-pressed={selectedSlug === rune.slug}
              onClick={() => selectRune(rune.slug)}
            >
              <small>{String(index + 1).padStart(2, "0")}</small>
              <b aria-hidden="true">{rune.symbol}</b>
              <span>{rune.name}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="rune-reading-anchor" ref={readingRef}>
        {selectedRune ? (
          <article className="rune-reading" key={selectedRune.slug}>
            <header className="rune-reading-head">
              <div className="rune-reading-symbol" aria-hidden="true">
                {selectedRune.symbol}
              </div>
              <div>
                <p>02 · Tu lectura</p>
                <h2>{selectedRune.name}</h2>
                <span>{selectedRune.essence}</span>
              </div>
              <button type="button" onClick={chooseAnotherRune}>
                Cambiar runa
              </button>
            </header>

            <div className="rune-reading-body">
              <div className="rune-message">
                <p>{selectedRune.message}</p>
              </div>

              <section>
                <p className="rune-reading-label">Para tu presente</p>
                <p>{selectedRune.present}</p>
              </section>

              <section className="rune-question">
                <p className="rune-reading-label">Una pregunta para vos</p>
                <blockquote>“{selectedRune.question}”</blockquote>
              </section>

              <section className="rune-small-ritual">
                <span aria-hidden="true">✦</span>
                <div>
                  <p className="rune-reading-label">Tu ritual Nordic</p>
                  <p>{selectedRune.ritual}</p>
                </div>
              </section>
            </div>

            <footer className="rune-feedback">
              <p>03 · Hacé una pausa</p>
              <h3>¿Este mensaje resonó con tu momento?</h3>
              <div className="rune-feedback-actions">
                <button type="button" onClick={() => setFeedback("yes")}>
                  Sí, me resonó ✨
                </button>
                <button type="button" onClick={() => setFeedback("later")}>
                  Todavía lo estoy sintiendo
                </button>
              </div>

              {feedback === "yes" && (
                <div className="rune-response rune-response-yes">
                  <span aria-hidden="true">ᛉ</span>
                  <div>
                    <h4>Qué lindo saber que esta runa encontró algo en vos.</h4>
                    <p>
                      Si disfrutaste la experiencia, tu historia puede inspirar
                      a otras personas a descubrir su propio mensaje.
                    </p>
                    <div>
                      <a href={reviewUrl} target="_blank" rel="noreferrer">
                        Contar mi experiencia en Google ↗
                      </a>
                      <button type="button" onClick={shareRune}>
                        Compartir mi runa
                      </button>
                    </div>
                    {shareStatus && <small role="status">{shareStatus}</small>}
                  </div>
                </div>
              )}

              {feedback === "later" && (
                <div className="rune-response rune-response-later">
                  <span aria-hidden="true">◌</span>
                  <div>
                    <h4>No hace falta entenderlo todo ahora.</h4>
                    <p>
                      A veces un mensaje necesita tiempo. Podés volver a esta
                      lectura cuando quieras y descubrir qué cambió.
                    </p>
                    <button type="button" onClick={shareRune}>
                      Guardar o compartir mi runa
                    </button>
                    {shareStatus && <small role="status">{shareStatus}</small>}
                  </div>
                </div>
              )}
            </footer>
          </article>
        ) : (
          <aside className="rune-reading-empty">
            <span aria-hidden="true">ᛉ</span>
            <p>Tu lectura aparecerá acá cuando elijas el símbolo de tu taza.</p>
          </aside>
        )}
      </div>
    </>
  );
}
