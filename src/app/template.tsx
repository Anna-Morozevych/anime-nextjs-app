"use client";

import { animatePageIn } from "@/lib/utils/animations";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

const lineStyle = {
  minH: "100vh",
  bgColor: "#000",
  zIndex: 10,
  position: "fixed",
  w: "25%",
};

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <Box minH="100vh">
      <Box id="banner-1" sx={lineStyle} left={0} />
      <Box id="banner-2" sx={lineStyle} left={"25%"} />
      <Box id="banner-3" sx={lineStyle} left={"50%"} />
      <Box id="banner-4" sx={lineStyle} left={"75%"} />

      {children}
    </Box>
  );
}
