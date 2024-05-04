import fs from "fs";
import path from "path";

export const ROOT = process.cwd();
export const POSTS_PATH = path.join(process.cwd(), "code/posts");

export const getCodeExample = (filename: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};
