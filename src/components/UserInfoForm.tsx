"use client";
import { setMyCookie } from "@/lib/actions/setMyCookie";
import { User } from "@/types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

type Props = {
  user: User;
  isOpen: boolean;
  onClose: () => void;
};

export default function UserInfoForm({ user, isOpen, onClose }: Props) {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [isLoading, seIsLoading] = useState(false);

  useEffect(() => {
    setUserName(user.userName);
    setJobTitle(user.jobTitle);
  }, [user.jobTitle, user.userName]);

  // Submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    seIsLoading(true);

    setMyCookie("user", JSON.stringify({ userName, jobTitle }));

    setTimeout(() => {
      seIsLoading(false);
      onClose();
      router.refresh();
    }, 2000);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update your information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Form */}
            <form action="" onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaUser color="#63b3ed" />
                  </InputLeftElement>
                  {/* Username field */}
                  <Input
                    placeholder="Enter your username"
                    variant="outline"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <MdOutlineWork color="#63b3ed" />
                  </InputLeftElement>
                  {/* Job title field */}
                  <Input
                    placeholder="Enter your job title"
                    variant="outline"
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </InputGroup>

                <Button type="submit">Submit</Button>
              </Stack>
            </form>

            {isLoading && <Loader />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
