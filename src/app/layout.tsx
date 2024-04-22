import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjernstad Utvikling",
  description:
    "Informasjon om hvem Tjernstad Utvikling er, og prosjekter etter og under arbeid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body>
        <header className="header top-image">
          <div>
            <span>Tjernstad Utvikling</span>
          </div>
          <div></div>
        </header>
        {children}
      </body>
    </html>
  );
}
