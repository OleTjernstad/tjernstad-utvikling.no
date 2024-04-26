import fs from "fs";
import { getCompiledMDX } from "./mdx";
import matter from "gray-matter";
import path from "path";

export const ROOT = process.cwd();
export const POSTS_PATH = path.join(process.cwd(), "content/projects");

export function getFileContent(filename: string) {
  return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
}

export async function getSingleProject(slug: string) {
  const source = getFileContent(`${slug}.mdx`);
  const { code, frontmatter } = await getCompiledMDX(source);

  return {
    frontmatter,
    code,
  };
}

export function getAllProjects() {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getFileContent(fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug,
      };
    });
}
