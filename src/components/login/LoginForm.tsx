"use client";
import { setMyCookie } from "@/lib/actions/setMyCookie";
import {
  Card,
  Heading,
  Stack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import ErrorMessage from "../ErrorMessage";
import { motion } from "framer-motion";

export default function LoginForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [error, setError] = useState("");

  // Remove error after 2sec
  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 2000);
  }, [error]);

  // Next step handler
  const goTostepHandler = (message: string) => {
    if (!userName) {
      setError(message);
      return;
    }

    setStep(2);
  };

  // Submit form handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check user info

    if (!jobTitle) {
      setError("Job title is required field");
      return;
    }

    if (!jobTitle && !userName) {
      setError("All fields are required");
      setStep(1);
      return;
    }

    // Set user info
    setMyCookie("user", JSON.stringify({ userName, jobTitle }));
    router.push("/info");
  };

  return (
    <>
      <div className="w-full">
        {/* Display form */}
        <Card p={4} maxW="500px" w="100%" m="auto" overflow="hidden">
          <Stack>
            <Heading size="md" mb={4}>
              Login
            </Heading>
            <form action="" onSubmit={handleSubmit}>
              {/* Step 1 */}
              {step === 1 && (
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <Stack spacing={2}>
                    <Text color="blue.300">Username</Text>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <FaUser color="#63b3ed" />
                      </InputLeftElement>
                      <Input
                        placeholder="Enter your username"
                        variant="outline"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </InputGroup>

                    <Flex gap={1} justifyContent="flex-end">
                      <Button
                        onClick={() =>
                          goTostepHandler("Username is required field")
                        }
                      >
                        Next
                      </Button>
                    </Flex>
                  </Stack>
                </motion.div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <Stack spacing={2}>
                    <Text color="blue.300">Job title</Text>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <MdOutlineWork color="#63b3ed" />
                      </InputLeftElement>
                      <Input
                        placeholder="Enter your job title"
                        variant="outline"
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </InputGroup>
                    <Flex gap={1} justifyContent="space-between">
                      <Button type="button" onClick={() => setStep(1)}>
                        Prev
                      </Button>
                      <Button colorScheme="blue" type="submit">
                        Submit
                      </Button>
                    </Flex>
                  </Stack>
                </motion.div>
              )}
            </form>
          </Stack>
        </Card>
      </div>

      {/* Show error message */}
      {error && <ErrorMessage message={error} />}
    </>
  );
}
