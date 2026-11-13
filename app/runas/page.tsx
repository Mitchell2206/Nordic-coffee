import type { Metadata } from "next";
import Link from "next/link";
import { RuneExperience } from "./rune-experience";
import { runes } from "./runes";

export const metadata: Metadata = {
  title: "Descubrí tu runa | Nordic Coffee",
  description:
    "Encontrá la runa de tu taza Nordic y descubrí el mensaje que acompaña tu presente.",
};

export default async function RunesPage({
  searchParams,
}: {
  searchParams: Promise<{ runa?: string | string[] }>;
}) {
  const params = await searchParams;
  const requestedSlug = Array.isArray(params.runa) ? params.runa[0] : params.runa;
  const initialSlug = runes.some((rune) => rune.slug === requestedSlug)
    ? requestedSlug
    : undefined;

  return (
    <main className="runes-page">
      <header className="runes-header">
        <Link className="wordmark" href="/" aria-label="Volver a Nordic Coffee">
          <img
            className="brand-emblem"
            src="/images/nordic-isologo-gold.webp"
            alt=""
            width={100}
            height={110}
          />
          <span className="brand-name">
            NORDIC<small>COFFEE</small>
          </span>
        </Link>
        <Link className="runes-home-link" href="/">
          Volver a Nordic <span aria-hidden="true">↖</span>
        </Link>
      </header>

      <RuneExperience initialSlug={initialSlug} />

      <footer className="runes-footer">
        <p>Tu taza · Tu runa · Tu significado</p>
        <Link href="/">Nordic Coffee · Villa Urquiza</Link>
      </footer>
    </main>
  );
}
