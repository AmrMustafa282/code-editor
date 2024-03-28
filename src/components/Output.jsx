import { Box, Button, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

import { executeCode } from "../api";

const Output = ({ editorRef, lang }) => {
 const toast = useToast();
 const [output, setOutput] = useState(null);
 const [isLoading, setIsLoading] = useState(false);
 const [isError, setIsError] = useState(false);
 const runCode = async () => {
  const sourceCode = editorRef.current.getValue();
  if (!sourceCode) return;
  try {
   setIsLoading(true);
   const { run: result } = await executeCode(lang, sourceCode);
   setOutput(result.output);
   result.stderr ? setIsError(true) : setIsError(false);
   setIsLoading(false);
   toast({
    title: "Code compiled successfully.",
    status: "success",
    duration: 3000,
    isClosable: true,
   });
  } catch (error) {
   toast({
    title: "An error occurred.",
    description: error.message || "Unable to run code",
    status: "error",
    duration: 6000,
    isClosable: true,
   });
   setIsLoading(false);
  }
 };

 return (
  <Box w={"50%"}>
   {/* <Text mb={2} fontSize={"lg"} color={"gray.400"}>
    Output
   </Text> */}
   <Button
    isLoading={isLoading}
    variant={"outline"}
    colorScheme="green"
    mb={4}
    onClick={runCode}
   >
    Run Code
   </Button>
   <Box
    h={"75vh"}
    p={2}
    border={"1px solid"}
    borderRadius={4}
    borderColor={isError ? "red.500" : "#333"}
    color={isError ? "red.400" : "gray.300"}
   >
    {output ? output : 'Click "Run Code" to see the output here'}
   </Box>
  </Box>
 );
};

export default Output;
