import { Details } from "./details_Interface";

export interface GetAnimeResponse {
    data: Details[];
    paging: {
      previous: string;
      next: string;
    };
  }