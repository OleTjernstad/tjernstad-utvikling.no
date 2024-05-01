import "@/styles/front-page.css";

import { Header } from "@/components/header";
import Image from "next/image";
import { PostCard } from "@/components/post-card";
import { ProjectCard } from "@/components/project-card";
import { getAllPosts } from "@/utils/mdx";
import { getAllProjects } from "@/utils/project-mdx";

async function getProjects() {
  const projects = getAllProjects();

  return projects;
}
async function getPosts() {
  const posts = getAllPosts();

  return posts;
}

export default async function Home() {
  const projects = await getProjects();
  const posts = await getPosts();

  return (
    <>
      <Header />
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
                  Videre her vil jeg vise frem noen av prosjektene jeg har
                  jobbet med.
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
          <section className="project">
            <h2 className="title">Prosjekter</h2>
            <div className="post-wrapper">
              {projects
                .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
                .map((project) => (
                  <ProjectCard project={project} key={project.slug} />
                ))}
            </div>
          </section>
          {/* posts */}
          <section className="post">
            <h2 className="title">Posts</h2>
            <div className="post-wrapper">
              {posts
                // .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
                .map((post) => (
                  <PostCard post={post} key={post.slug} />
                ))}
            </div>
          </section>
        </div>
        <div></div>
      </main>
    </>
  );
}
