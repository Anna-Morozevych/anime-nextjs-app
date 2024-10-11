import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
} from "@chakra-ui/react";

export default function NotFoundPage() {
  return (
    <Flex justifyContent="center" alignItems="center" pt="10vh">
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        width="550px"
        maxW="100%"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Ooooops! Something went wrong!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          We can&apos;t show the information right now.
          <br />
          Please try again later
        </AlertDescription>
      </Alert>
    </Flex>
  );
}
