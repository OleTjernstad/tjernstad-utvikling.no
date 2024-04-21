import { getAllPosts, getSinglePost } from "@/utils/mdx";

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

  return <Component />;
}
