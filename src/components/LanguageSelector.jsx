import React from "react";
import {
 Menu,
 MenuButton,
 MenuList,
 MenuItem,
 Box,
 Text,
 Button,
} from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";
const langs = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ lang, onSelect }) => {
 return (
  <Box ml={2} mb={4}>
   {/* <Text mb={2} fontSize={"lg"} color={'gray.400'}>
    Language:
   </Text> */}
   <Menu isLazy>
    <MenuButton as={Button}>{lang}</MenuButton>
    <MenuList bg={"#110c1b"}>
     {langs.map(([language, version]) => (
      <MenuItem
       key={language}
       color={language === lang ? "blue.400" : "gray.600"}
         bg={language === lang ? "gray.900" : "transparent"}
         _hover={{
           color: 'blue.400',
           bg:'gray.900'
         }}
       onClick={() => onSelect(language)}
      >
       {language}
       &nbsp;
       <Text as={"span"} color={"gray.600"} fontSize={"sm"}>
        ({version})
       </Text>
      </MenuItem>
     ))}
    </MenuList>
   </Menu>
  </Box>
 );
};

export default LanguageSelector;
