import { getAllProjects, getSingleProject } from "@/utils/project-mdx";

import { cache } from "react";
import { getMDXComponent } from "mdx-bundler/client";

export const revalidate = 3600 * 12; // revalidate every 12 hour

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

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getProject(params.slug);

  const Component = getMDXComponent(post.code);

  return <Component />;
}
