import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
   <Box minH={"100vh"} bg={"#110E18"} px={24} py={8}>
    <CodeEditor />
   </Box>
  );
  
}

export default App;
