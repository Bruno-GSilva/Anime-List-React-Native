export interface SearchType {
  node?: {
    id: number;
    title: string;
    main_picture: {
      medium: string;
      large: string;
    };
    genres: [{
      id: number;
      name: string;
    }];
  };
}

export interface SeasonType extends SearchType {
  season: "summer" | "spring" | "winter" | "fall";
  year: number;
}

export interface RankingType extends SearchType {
  ranking:
    | "all"
    | "airing"
    | "upcoming"
    | "tv"
    | "ova"
    | "movie"
    | "special"
    | "bypopularity"
    | "favorite";
}