import { getAllPosts, getSinglePost } from "@/utils/mdx";

import { getMDXComponent } from "mdx-bundler/client";

export async function generateStaticParams() {
  const paths = getAllPosts().map(({ slug }) => ({
    params: { slug },
  }));
  return paths;
}

async function getPost({ slug }: { slug: string }) {
  const post = await getSinglePost(slug);
  return post;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost({ slug: params.slug });

  const Component = getMDXComponent(post.code);

  return (
    <div>
      <Component />
    </div>
  );
}
