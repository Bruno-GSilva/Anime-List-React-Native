import axios from "axios";
import * as React from "react";
import { FlatList } from "react-native";

import { SeasonType } from "../../@types/api/interfaces";
import { ClientId } from "../../util/Key";
import { CardSeason } from "../Cards/CardSeason";
import { EmptyCard } from "../Cards/EmptyCard";

export const SeasonAnime = ({ season, year }: SeasonType) => {
  const choiceSeason: SeasonType = {
    season: season,
    year: year,
  };

  const [animeList, setAnimeList] = React.useState<SeasonType[]>([]);
  const fetchAnime = async () => {
    await axios
      .get(
        `https://api.myanimelist.net/v2/anime/season/${choiceSeason.year}/${choiceSeason.season}`,
        {
          params: {
            // q: AnimeName,
            limit: 5,
          },
          headers: {
            "X-MAL-CLIENT-ID": ClientId,
          },
        }
      )
      .then((res) => {
        setAnimeList(res.data.data);
      })
      .catch((err) => {
        console.error(err);
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
