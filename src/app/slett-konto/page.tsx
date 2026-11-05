import { Header } from "@/components/header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sletting av konto i Handl | Tjernstad Utvikling",
  description: "Slik ber du om å få kontoen din i Handl slettet.",
};

export default function DeleteAccount() {
  return (
    <>
      <Header />
      <main>
        <h2 className="title">Sletting av konto i Handl-app</h2>
        <div className="content-layout">
          <div className="content">
            <h3>Slik ber du om sletting</h3>
            <p>
              Send en e-post til{" "}
              <a href="mailto:delete@tjernstad-utvikling.no">
                delete@tjernstad-utvikling.no
              </a>{" "}
              fra e-postadressen som er registrert på Handl-kontoen din. Skriv
              gjerne hvilken konto det gjelder, slik at vi kan finne den raskt.
            </p>
            <p>
              Om kravet om sletting kommer fra en annen e-postadresse, vil vi
              etterpørre bekreftelse på den registrerte e-postadressen før
              kontoen slettes. Dette gjør vi for å beskytte kontoen din mot at
              andre ber om sletting på dine vegne.
            </p>

            <h3>Hva skjer når kontoen slettes?</h3>
            <p>
              Når kontoen er slettet, slettes også brukernavn, e-postadresse og
              innholdet i listene dine, med mindre vi er pålagt å oppbevare
              opplysningene lenger etter loven.
            </p>
            <p>
              Les mer om hvilke opplysninger Handl-app lagrer i{" "}
              <Link href="/privacy/handl-app">
                personvernerklæringen for Handl
              </Link>
              .
            </p>

            <h3>Kontakt</h3>
            <p>
              Har du spørsmål om sletting av kontoen din, kan du kontakte oss på{" "}
              <a href="mailto:delete@tjernstad-utvikling.no">
                delete@tjernstad-utvikling.no
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
