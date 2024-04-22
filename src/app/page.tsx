import "./main.css";

import Image from "next/image";

export default function Home() {
  return (
    <main className="main-layout">
      {/* me */}
      <section className="section-me">
        <div className="image">
          <Image
            src="/images/me.webp"
            layout="responsive"
            width="375"
            height="500"
            alt="Min datter og meg"
          />
        </div>
        <div className="me">
          <p className="greet">Hei !!</p>
          <p>
            Jeg heter Ole Tjernstad, innehaver av Tjernstad Utvikling og
            selvlært hobby utvikler. I tillegg til egen lesing har jeg fullført
            og bestått et javascript kurs ved{" "}
            <a
              href="https://teamtreehouse.com/techdegree/full-stack-javascript"
              rel="nofollow"
              target="_blank"
            >
              treehouse
            </a>
            .
          </p>
          <p>
            Videre her vil jeg vise frem noen av prosjektene jeg har jobbet med.
          </p>
          <p>
            Og viktigst, jeg er også pappa til ei nydelig jente, bare se selv!!
          </p>
        </div>
      </section>
    </main>
  );
}
