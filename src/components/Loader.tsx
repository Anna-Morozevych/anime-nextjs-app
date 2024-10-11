"use client";
import React from "react";
import { Spinner } from "@chakra-ui/react";

export default function Loader() {
  return (
    <div className="w-full h-full fixed top-0 left-0 right-0 bottom-0 z-1000 flex justify-center items-center">
      <Spinner colorScheme="whiteAlpha" size="lg" />
    </div>
  );
}
