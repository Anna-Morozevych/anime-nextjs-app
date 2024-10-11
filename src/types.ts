export interface User {
  userName: string;
  jobTitle: string;
}

export interface PageInfo {
  total: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
  perPage: number;
  __typename: string;
}

export interface Anime {
  id: number;
  title: {
    english: string;
    native: string;
  };
  coverImage: {
    large: string;
  };
  seasonYear: number;
  characters: {
    nodes: CharactersNode[];
  };
  description: string;
  staff: {
    nodes: StaffNode[];
  };
  airingSchedule: {
    nodes: AiringScheduleNode[];
  };
}

export interface CharactersNode {
  age: string;
  gender: string;
  id: number;
  image: MediumImage;
  name: Name;
}

export interface StaffNode {
  id: number;
  image: MediumImage;
  name: Name;
  primaryOccupations: string[];
}

export interface AiringScheduleNode {
  episode: number;
  airingAt: number;
  timeUntilAiring: number;
}

export interface MediumImage {
  medium: string;
  __typename: string;
}

export interface Name {
  full: string;
  native: string;
  __typename: string;
}
