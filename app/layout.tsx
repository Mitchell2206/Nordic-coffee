import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nordic Coffee | Café de especialidad en Villa Urquiza",
  description:
    "Más que café, un ritual. Café de especialidad, tazas con runas, sabores de autor y experiencias en Villa Urquiza.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
