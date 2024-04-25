import "./main.css";

import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/utils/project-mdx";

async function getProjects() {
  const projects = getAllProjects();

  return projects;
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="main-layout front-page">
      <div></div>
      <div>
        {/* me */}
        <section>
          <div className="section-me tear">
            <div className="image-wrapper">
              <Image
                className="image"
                src="/images/me.webp"
                width="500"
                height="500"
                alt="Min datter og meg"
              />
            </div>
            <article className="me">
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
                Til vanlig er jeg elsikkerhetsingeniør med fagbrev som
                elektriker utvidet med fagskoleingeniør elektro.
              </p>
              <p>
                Og viktigst, jeg er også pappa til ei nydelig jente, bare se
                selv!!
              </p>
            </article>
          </div>
        </section>

        {/* projects */}
        <section>
          <h2 className="title">Prosjekter</h2>
          <div className="post-wrapper">
            {projects
              .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
              .map((project) => (
                <Link href={`projects/${project.slug}`} key={project.slug}>
                  <article>
                    <div className="image-wrapper">
                      <Image
                        width={200}
                        height={200}
                        className="image"
                        src={`/images/projects/${project.frontmatter.image}`}
                        alt={`illustrasjonsbilde av ${project.frontmatter.title}`}
                      />
                    </div>
                    <h3>{project.frontmatter.title}</h3>
                  </article>
                </Link>
              ))}
          </div>
        </section>
      </div>
      <div></div>
    </main>
  );
}
