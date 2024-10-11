"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { ColorModeScript } from "@chakra-ui/react";

// define the Chakra settings

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode="dark" />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}
