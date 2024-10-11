import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";
import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import { Box } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export default function InfoLayout({ children }: Props) {
  // Get cookie and redirect if it is not exist
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user");

  if (!userCookie) {
    redirect("/");
  }

  const user = JSON.parse(userCookie.value);

  return (
    <div>
      <Navbar user={user} />
      <Box pt="80px" px={4} pb={10}>
        {children}
      </Box>
    </div>
  );
}
