import { getAllPosts, getSinglePost } from "@/utils/mdx";

import { Header } from "@/components/header";
import { Icon } from "@/components/icon";
import { cache } from "react";
import { getMDXComponent } from "mdx-bundler/client";

export const revalidate = 3600 * 12; // revalidate every 12 hour

export async function generateStaticParams() {
  const paths = getAllPosts().map(({ slug }) => ({
    params: { slug },
  }));
  return paths;
}

const getPost = cache(async (slug: string) => {
  const post = await getSinglePost(slug);
  return post;
});

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  const Component = getMDXComponent(post.code);

  return (
    <>
      <Header imageName={post.frontmatter.image} path="/images/posts/" />
      <main className="content-layout">
        <div className="content">
          <h2 className="title">{post.frontmatter?.title}</h2>
          <Component />
        </div>
        <div className="sidebar">
          <h2>Teknologier</h2>

          <ul>
            {post.frontmatter?.tech?.map((tech: string) => (
              <li key={tech}>
                <Icon name={tech} key={tech} /> <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
