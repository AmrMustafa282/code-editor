import { Box, ButtonSpinner, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import React, { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
 const [value, setValue] = useState("");
 const [lang, setLang] = useState("javascript");
 const editorRef = useRef();

 const onMount = (editor) => {
  editorRef.current = editor;
  editor.focus();
 };

 const onSelect = (lang) => {
  setLang(lang);
  setValue(CODE_SNIPPETS[lang]);
 };

 return (
  <Box>
   <HStack spacing={4}>
    <Box w={"50%"}>
     <LanguageSelector lang={lang} onSelect={onSelect} />
     <Editor
      height="75vh"
      theme="vs-dark"
      language={lang}
      defaultValue={CODE_SNIPPETS[lang]}
      value={value}
      onMount={onMount}
      onChange={(val) => setValue(val)}
     />
       </Box>
       <Output editorRef={editorRef} lang={lang} />
   </HStack>
  </Box>
 );
};

export default CodeEditor;
