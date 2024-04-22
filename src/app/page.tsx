import "./main.css";

import Image from "next/image";

export default function Home() {
  return (
    <main className="main-layout">
      <div></div>
      <div>
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
              selvlært hobby utvikler. I tillegg til egen lesing har jeg
              fullført og bestått et javascript kurs ved{" "}
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
              Videre her vil jeg vise frem noen av prosjektene jeg har jobbet
              med.
            </p>
            <p>
              Til vanlig er jeg elsikkerhetsingeniør med fagbrev som elektriker
              utvidet med fagskoleingeniør elektro.
            </p>
            <p>
              Og viktigst, jeg er også pappa til ei nydelig jente, bare se
              selv!!
            </p>
          </div>
        </section>

        {/* projects */}
        <section>
          <h2 className="title">Prosjekter</h2>
          <div className="post-wrapper">
            <article>
              <Image
                src="/images/sluttkontroll.webp"
                layout="responsive"
                width="375"
                height="500"
                alt="sluttkontroll prosjekt"
              />
              <h3>Sluttkontroll.no</h3>

              <p>Kort om prosjektet her</p>
            </article>
            <article>
              <Image
                src="/images/sluttkontroll.webp"
                layout="responsive"
                width="375"
                height="500"
                alt="sluttkontroll prosjekt"
              />
              <h3>Sluttkontroll.no</h3>

              <p>Kort om prosjektet her</p>
            </article>
          </div>
        </section>
      </div>
      <div></div>
    </main>
  );
}
