"use client";
import { Anime, PageInfo } from "@/types";
import { Grid, Stack } from "@chakra-ui/react";
import AnimeItem from "./AnimeItem";
import Pagination from "./Pagination";

type Props = {
  animeList: Anime[];
  pageInfo: PageInfo;
};

export default function AnimeList({ animeList, pageInfo }: Props) {
  return (
    // Anime List
    <Stack direction="column" gap={14}>
      {/* Dispalay Anime List */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={6}
        maxW="90rem"
        margin="auto"
      >
        {animeList.map((anime) => (
          <AnimeItem key={anime.id} anime={anime} />
        ))}
      </Grid>

      {/* Dispalay Pagination */}
      <Pagination pageInfo={pageInfo} />
    </Stack>
  );
}
