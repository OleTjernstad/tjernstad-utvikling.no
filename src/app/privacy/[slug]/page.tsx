import { getAllPrivacyPosts, getSinglePrivacyPost } from "@/utils/privacy.mdx";

import { Code } from "@/components/code";
import { Header } from "@/components/header";
import { cache } from "react";
import { getMDXComponent } from "mdx-bundler/client";

export const revalidate = 43200; // revalidate every 12 hour

export async function generateStaticParams() {
  const paths = getAllPrivacyPosts().map(({ slug }) => ({
    params: { slug },
  }));
  return paths;
}

const getPost = cache(async (slug: string) => {
  const post = await getSinglePrivacyPost(slug);
  return post;
});

export default async function Post(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = await getPost(params.slug);

  const Component = getMDXComponent(post.code);

  return (
    <>
      <Header imageName={post.frontmatter.image} path="/images/privacy/" />
      <main>
        <h2 className="title">{post.frontmatter?.title}</h2>
        <div className="content-layout">
          <div className="content">
            <Component
              components={{
                Code,
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}
