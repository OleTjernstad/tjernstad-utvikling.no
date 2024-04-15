import { bundleMDX } from "mdx-bundler";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const ROOT = process.cwd();

export function getFileContent(post_path: string, filename: string) {
  return fs.readFileSync(path.join(post_path, filename), "utf8");
}

async function getCompiledMDX(source: string) {
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }
  // Add your remark and rehype plugins here
  const remarkPlugins: any[] = [];
  const rehypePlugins: any[] = [];

  try {
    return await bundleMDX({
      source,
      mdxOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          ...remarkPlugins,
        ];
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          ...rehypePlugins,
        ];

        return options;
      },
    });
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getSinglePost(subPath: string, slug: string) {
  const POSTS_PATH = path.join(process.cwd(), subPath);

  const source = getFileContent(POSTS_PATH, `${slug}.mdx`);
  const { code, frontmatter } = await getCompiledMDX(source);

  return {
    frontmatter,
    code,
  };
}

export function getAllPosts(subPath: string) {
  const POSTS_PATH = path.join(process.cwd(), subPath);

  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getFileContent(POSTS_PATH, fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug,
      };
    });
}
