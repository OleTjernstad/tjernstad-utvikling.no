import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getCodeExample } from "@/utils/code";

interface CodeProps {
  filename: string;
  language: "css" | "javascript";
}
export function Code({ filename, language }: CodeProps) {
  const codeString = getCodeExample(filename);
  return (
    <SyntaxHighlighter language={language} style={a11yDark} showLineNumbers>
      {codeString}
    </SyntaxHighlighter>
  );
}
