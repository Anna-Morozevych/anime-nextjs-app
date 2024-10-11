import { Anime, PageInfo } from "@/types";
import { apolloClient } from "../apollo-client/client";
import { GET_ANIMES_PAGE } from "../graphql/queries/getAnimesPerPage";

export type Response = {
  status: boolean;
  errorMessage: string;
  data: Anime[];
  pageInfo: PageInfo | null
};



export async function getAnimesPerPage(page: number = 1, perPage: number = 50) {
  // try to get data from server
  try {
    const { data } = await apolloClient.query({
      query: GET_ANIMES_PAGE,
      variables: {
        page,
        perPage,
      },
    });

    const res: Response = {
      status: true,
      errorMessage: "",
      data: data.Page.media,
      pageInfo: data.Page.pageInfo
    };
    return res;

    // error handler
  } catch (error) {
    console.log(error)
    const res: Response = {
      status: false,
      errorMessage: "request error",
      data: [],
      pageInfo: null
    };

    return res
  }
}
