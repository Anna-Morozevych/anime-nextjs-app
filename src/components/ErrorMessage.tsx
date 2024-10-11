import { Alert, AlertIcon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  message: string;
};

export default function ErrorMessage({ message }: Props) {
  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-4 right-4"
    >
      <Alert status="error">
        <AlertIcon />
        {message}
      </Alert>
    </motion.div>
  );
}
