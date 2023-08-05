export interface SearchType{
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

export type categoryType = {
  category:
    | 1 // | "Action"
    | 2 // | "Adventure"
    | 4 // | "Comedy"
    | 8 // | "Drama"
    | 10 // | "Fantasy"
    | 16 // | "Magic"
    | 18 // | "Mecha"
    | 7 // | "Mystery"
    | 22 // | "Romance"
    | 24 // | "Science-fiction"
    | 28 // | "Yaoi"
    | 37 // | "Supernatural"
    | 14 // | "Horror"
    | 30 // | "Sports"
    | 36; // | "Slice of Life";
};