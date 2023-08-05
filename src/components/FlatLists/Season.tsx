import axios from "axios";
import * as React from "react";
import { FlatList } from "react-native";

import { CardSeason } from "../Cards/CardSeason";
import { EmptyCard } from "../Cards/EmptyCard";
import { SeasonType } from "../../util/types/interfaces";
import { BaseUrl, ClientId } from "../../util/key";

export const SeasonAnime = ({ season, year }: SeasonType) => {
  const choiceSeason: SeasonType = {
    season: season,
    year: year,
  };

  const [animeList, setAnimeList] = React.useState<SeasonType[]>([]);
  const fetchAnime = async () => {
    await axios
      .get(`${BaseUrl}season/${choiceSeason.year}/${choiceSeason.season}`, {
        params: {
          limit: 5,
        },
        headers: {
          "X-MAL-CLIENT-ID": ClientId,
        },
      })
      .then((res) => {
        setAnimeList(res.data.data);
      })
      .catch((err) => {
        console.error("deu error na season", err);
      });
  };

  React.useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <FlatList
      data={animeList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={(anime) => <CardSeason {...anime} />}
      ListEmptyComponent={<EmptyCard template="SimplesCard" />}
    />
  );
};
