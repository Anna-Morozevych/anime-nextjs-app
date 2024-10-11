"use client";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AnimeSlider from "../AnimeSlider";
import LoginForm from "./LoginForm";
import { motion } from "framer-motion";

export default function LoginWrapper() {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="w-full"
    >
      {/* Display Slider animation */}
      <Flex direction={{ base: "column", md: "row" }} minH="100vh" w="100%" alignItems="center">
        <Box w={{ base: "100%", md: "50%" }}>
          <AnimeSlider />
        </Box>
        <Box
          w="100%"
          h="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={4}
        >
          {/*Display LoginForm */}
          <LoginForm />
        </Box>
      </Flex>
    </motion.div>
  );
}
