"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { isblEditorDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { isblEditorLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useEffect, useState } from "react";

interface blockProps {
  code: string;
  language: string;
  themeColor: string;
}

const CodeBlock: React.FC<blockProps> = ({ code, language, themeColor }) => {
  const codeString = code;
  const [editorStyle, setEditorStyle] = useState(isblEditorLight);

  useEffect(() => {
    setEditorStyle(themeColor === "dark" ? isblEditorDark : isblEditorLight);
  }, [themeColor]);

  return (
    <SyntaxHighlighter language={language} style={editorStyle}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
