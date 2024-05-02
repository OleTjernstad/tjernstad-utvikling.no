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
      <body className="body-layout">
        {children}
        <footer>
          <address>
            <span> Tjernstad Utvikling </span> <br />
            <span className="co-name">C/O Ole Tjernstad</span>
            <br />
            <br />
            Sandervegen 590
            <br /> 2116 Sander
          </address>
          <address>
            Tlf: 483 13 283 <br />
            <br /> Org. nr. 924 359 595
          </address>
        </footer>
      </body>
    </html>
  );
}
