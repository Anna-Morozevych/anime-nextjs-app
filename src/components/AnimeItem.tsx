"use client";
import { Anime } from "@/types";
import {
  Box,
  Card,
  CardHeader,
  GridItem,
  Image,
  Badge,
  CardBody,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AnimeModal } from "./AnimeModal";

type Props = {
  anime: Anime;
};

// Anime card
export default function AnimeItem({ anime }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        key={anime.id}
        w="100%"
        h="100%"
        borderRadius={4}
        overflow="hidden"
        cursor="pointer"
        border="2px solid transparent"
        _hover={{ borderColor: "blue.400" }}
        position="relative"
        onClick={onOpen}
      >
        <Card h="100%">
          {/* Card image */}
          <Box w="100%" h={{ base: "30rem", md: "25rem" }} overflow="hidden">
            <Image
              w="100%"
              h="100%"
              objectFit="cover"
              src={anime.coverImage.large}
              alt={anime.title.english}
              transition="all 0.3s"
              _hover={{
                transform: "scale(1.1)",
              }}
            />
          </Box>

          {/* Card name */}
          <CardBody p={2}>
            <CardHeader color="blue.100" p={0}>
              {anime.title.english || anime.title.native}
            </CardHeader>
          </CardBody>

          {/* Anime year */}
          <Badge
            position="absolute"
            top={2}
            right={2}
            fontSize="1.5rem"
            colorScheme="blue"
            color="blue.900"
            bgColor="whiteAlpha.700"
          >
            {anime.seasonYear}
          </Badge>
        </Card>
      </GridItem>
      {isOpen && <AnimeModal isOpen={isOpen} onClose={onClose} anime={anime} />}
    </>
  );
}
