import { bundleMDX } from "mdx-bundler";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const ROOT = process.cwd();
export const POSTS_PATH = path.join(process.cwd(), "code/posts");

export const getCodeExample = (filename: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};
