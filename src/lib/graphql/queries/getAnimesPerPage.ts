import { gql } from "@apollo/client";

// GraphQl query

export const GET_ANIMES_PAGE = gql`
  query getAnimesPerPage($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        hasNextPage
        perPage
      }
      media {
        id
        coverImage {
          large
        }
        title {
          english
          native
        }
        seasonYear
        characters(sort: ROLE, page: 1, perPage: 10) {
          nodes {
            id
            name {
              full
              native
            }
            image {
              medium
            }
            gender
            age
          }
        }
        description
        staff(sort: RELEVANCE, page: 1, perPage: 5) {
          nodes {
            id
            name {
              full
              native
            }
            image {
              medium
            }
            primaryOccupations
          }
        }
        airingSchedule(notYetAired: true, page: 1, perPage: 1) {
          nodes {
            episode
            airingAt
            timeUntilAiring
          }
        }
      }
    }
  }
`;
