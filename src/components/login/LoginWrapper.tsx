"use client";
import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import LoginForm from "./LoginForm";

export default function LoginWrapper() {
  return (
    <div>
      {/* Display image */}
      <Flex
        direction={{ base: "column", md: "row" }}
        minH="100vh"
        w="100%"
        alignItems="center"
        pt={{base: "vh", md: 0}}
      >
        <Box h="100vh" w="100%" position={{ base: "fixed", md: "relative"}}>
          <Image
            width="100%"
            height="100%"
            objectFit="cover"
            src="https://cdn.pixabay.com/photo/2023/12/07/11/11/girl-8435340_1280.png"
            alt="Anime image"
          />
        </Box>
        <Box
          w="100%"
          h="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={{ base: '18vh 16px 16px', md: 4}}
        >
          {/*Display LoginForm */}
          <LoginForm />
        </Box>
      </Flex>
    </div>
  );
}
