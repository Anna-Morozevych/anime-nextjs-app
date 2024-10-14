"use client";
import React from "react";
import { Spinner, Flex } from "@chakra-ui/react";

export default function Loader() {
  return (
    <Flex
      w="100%"
      h="100%"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      justifyContent="center"
      alignItems="center"
    >
      <Spinner colorScheme="whiteAlpha" size="lg" />
    </Flex>
  );
}
