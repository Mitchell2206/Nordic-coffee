import type { Metadata, Viewport } from "next";
import { preload } from "react-dom";
import "./globals.css";

const title = "Nordic Coffee | Café de especialidad en Villa Urquiza";
const description =
  "Más que café, un ritual. Café de especialidad, tazas con runas, sabores de autor y experiencias en Villa Urquiza.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Nordic Coffee",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#2b1915",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Nordic Coffee",
  description,
  servesCuisine: "Café de especialidad",
  telephone: "+54 9 11 6793-7463",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Juramento 4979",
    addressLocality: "Villa Urquiza",
    addressRegion: "CABA",
    addressCountry: "AR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "15:00",
      closes: "20:00",
    },
  ],
  menu: "https://app.restolia.com/menu/nordic",
  sameAs: ["https://www.instagram.com/nordiccoffee.ba/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fonts used above the fold: body text (Geist) and the hero headline (Panchang 200).
  preload("/fonts/geist-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  preload("/fonts/panchang-extralight.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
