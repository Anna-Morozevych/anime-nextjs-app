"use client";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { User } from "@/types";
import UserInfoForm from "./UserInfoForm";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

type Props = {
  userData: User;
};

export default function Navbar({ userData }: Props) {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [user, setUser] = useState<User>();
  const [isOpenForm, setIsOpenForm] = useState(false);

  const openMenu = () => setIsOpenMenu(true);
  const closeMenu = () => setIsOpenMenu(false);
  const openForm = () => setIsOpenForm(true);
  const closeForm = () => setIsOpenForm(false);

  const logOutHandler = () => {
    deleteCookie("user");
    router.push("/");
  };

  // set user when component render or change
  useEffect(() => {
    const cookieUser = getCookie('user');
    if (cookieUser) {
      setUser(JSON.parse(cookieUser))
    }

  setUser(userData);

  }, [userData, router])

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={1000}>
      <Box
        sx={{
          p: 4,
          display: "flex",
          justifyContent: "flex-end",
          bgColor: "blackAlpha.700",
        }}
      >
        {/* User menu */}
        <Flex justifyContent="flex-end">
          <Popover isOpen={isOpenMenu} onOpen={openMenu}>
            {/* User menu button */}
            <PopoverTrigger>
              <Flex cursor="pointer" alignItems="center" gap={2}>
                <Avatar size="sm" />
                <span>{user?.userName}</span>
                <IoIosArrowDown />
              </Flex>
            </PopoverTrigger>

            {/* User menu content */}
            <PopoverContent mr={4}>
              <PopoverCloseButton onClick={closeMenu} />
              <PopoverHeader>
                {/* User menu avatar */}
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  bgColor="blue.300"
                  color="white"
                  width={14}
                  height={14}
                  rounded={100}
                  mx="auto"
                  fontSize="3xl"
                  mb={2}
                >
                  <span>{user?.userName[0].toLocaleUpperCase()}</span>
                </Flex>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <span> Hi, {user?.userName}</span>
                  {/* User menu job title */}
                  <span>{user?.jobTitle}</span>
                </Flex>
              </PopoverHeader>
              <PopoverBody>
                <Flex justifyContent="space-between" gap={2}>
                  {/* Change user info button */}
                  <Button
                    onClick={() => {
                      closeMenu();
                      openForm();
                    }}
                  >
                    Change information
                  </Button>
                  {/* Logout button */}
                  <Button colorScheme="blue" onClick={logOutHandler}>
                    Logout
                  </Button>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Box>
      <Divider />

      {/* Change info form */}
      {(isOpenForm && user) && (
        <UserInfoForm user={user} isOpen={isOpenForm} onClose={closeForm} />
      )}
    </Box>
  );
}
