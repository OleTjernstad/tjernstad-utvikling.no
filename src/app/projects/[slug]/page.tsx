import { getAllProjects, getSingleProject } from "@/utils/project-mdx";

import { Header } from "@/components/header";
import { Icon } from "@/components/icon";
import { cache } from "react";
import { getMDXComponent } from "mdx-bundler/client";

export const revalidate = 43200; // revalidate every 12 hour

export async function generateStaticParams() {
  const paths = getAllProjects().map(({ slug }) => ({
    params: { slug },
  }));
  return paths;
}

const getProject = cache(async (slug: string) => {
  const post = await getSingleProject(slug);
  return post;
});

export default async function Project(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const project = await getProject(params.slug);

  const Component = getMDXComponent(project.code);

  return (
    <>
      <Header imageName={project.frontmatter.image} path="/images/projects/" />
      <main>
        <h2 className="title">{project.frontmatter?.title}</h2>
        <div className="content-layout">
          <div className="content">
            <Component />
          </div>
          <div className="sidebar">
            <h2>Teknologier</h2>

            <ul>
              {project.frontmatter?.lang?.map((lang: string) => (
                <li key={lang}>
                  <Icon name={lang} key={lang} /> <span>{lang}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
