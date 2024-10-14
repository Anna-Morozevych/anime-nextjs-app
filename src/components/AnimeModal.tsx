"use client";

import { Anime } from "@/types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Box,
  Image,
  Stack,
  Divider,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  anime: Anime;
};

export function AnimeModal({ isOpen, onClose, anime }: Props) {
  const [descrip, setDescrip] = useState("");

  useEffect(() => {
    // parse HTML description
    const strippedHtml = anime.description.replace(/<[^>]+>/g, "");
    setDescrip(strippedHtml);
  }, [anime.description]);

  function parseDate(value: number) {
    const date = new Date(value * 1000).toLocaleString();

    return date;
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "3xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {anime.title.english || anime.title.native}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Display Characters */}
            <Stack direction="column" gap={4}>
              <span>Characters</span>
              <Flex gap={2} direction="row" flexWrap="wrap">
                {anime.characters.nodes.map((char) => (
                  <Flex key={char.id} gap={1} direction="column" width="60px">
                    <Box w="60px" h="60px" bgColor="whiteAlpha.500">
                      <Image
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        objectPosition="top center"
                        src={char.image.medium}
                        alt={char.name.full}
                      />
                    </Box>
                    <Text fontSize="12px">{char.name.full}</Text>
                  </Flex>
                ))}
              </Flex>
            </Stack>

            <Divider my={2} />

            {/* Display Staff */}
            <Stack direction="column" gap={4}>
              <span>Staff</span>
              <Flex gap={2} direction="row" flexWrap="wrap">
                {anime.staff.nodes.map((el) => (
                  <Flex key={el.id} gap={1} direction="column" width="60px">
                    <Box w="60px" h="60px">
                      <Image
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        objectPosition="top center"
                        src={el.image.medium}
                        alt={el.name.full}
                      />
                    </Box>
                    <Text fontSize="12px">{el.name.full}</Text>
                  </Flex>
                ))}
              </Flex>
            </Stack>

            <Divider my={2} />

            {/* Display description */}
            <span>Description</span>
            <Box mt={2}>{descrip}</Box>

            <Divider my={2} />

            {/* Display airingSchedule */}
            {anime.airingSchedule.nodes.length > 0 && (
              <>
                {anime.airingSchedule.nodes.map((el) => (
                  <div key={el.episode}>
                    <span>Airing Schedule</span>
                    <Stack direction="column" mt={2}>
                      <Flex gap={2}>
                        <span>Episode</span>
                        <Tag colorScheme="yellow">{el.episode}</Tag>
                      </Flex>
                      <Flex gap={2}>
                        <span>Airing at</span>
                        <Tag colorScheme="blue">{parseDate(el.airingAt)}</Tag>
                      </Flex>
                    </Stack>
                  </div>
                ))}
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
