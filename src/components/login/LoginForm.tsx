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
  Text,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

export default function LoginForm() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [jobTitleError, setJobTitleError] = useState(false);

  // Submit form handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check both fields and show an error on both of them if they are not filled
    if (!userName.length && !jobTitle.length) {
      setUserNameError(true);
      setJobTitleError(true);
      return;
    }

    // Check username and show error only on username
    if (!userName.length) {
      setUserNameError(true);
      return;
    }

    // Check job title and show error only on job title
    if (!jobTitle.length) {
      setJobTitleError(true);
      return;
    }

    // Set user info
    setMyCookie("user", JSON.stringify({ userName, jobTitle }));
    router.push("/information-page");

  };

  return (
    <>
      <Box w="100%">
        {/* Display form */}
        <Card p={4} maxW="500px" w="100%" m="auto" overflow="hidden">
          <Stack>
            <Heading size="md" mb={5}>
              Login
            </Heading>
            <form action="" onSubmit={handleSubmit}>
              <Stack spacing={4}>
                {/* Username field */}
                <Box position="relative">
                  <Text color="blue.300">Username</Text>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <FaUser color="#63b3ed" />
                    </InputLeftElement>
                    <Input
                      placeholder="Enter your username"
                      autoFocus
                      variant="outline"
                      type="text"
                      value={userName}
                      onChange={(e) => {
                        setUserName(e.target.value);
                        setUserNameError(false);
                      }}
                      isInvalid={userNameError}
                    />
                  </InputGroup>
                  {userNameError && (
                    <Box position="absolute" bottom="-24px" color="red.300">
                      <Text as="sup">This field is required</Text>
                    </Box>
                  )}
                </Box>

                {/* Job title field */}
                <Box position="relative">
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
                      onChange={(e) => {
                        setJobTitle(e.target.value);
                        setJobTitleError(false);
                      }}
                      isInvalid={jobTitleError}
                    />
                  </InputGroup>
                  {jobTitleError && (
                    <Box position="absolute" bottom="-24px" color="red.300">
                      <Text as="sup">This field is required</Text>
                    </Box>
                  )}
                </Box>
              </Stack>

              {/* Submit button */}
              <Button colorScheme="blue" type="submit" mt={8}>
                Submit
              </Button>
            </form>
          </Stack>
        </Card>
      </Box>
    </>
  );
}
