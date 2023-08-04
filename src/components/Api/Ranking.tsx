import axios from "axios";
import { useState, useEffect } from "react";
import { FlatList } from "react-native";

import { Details } from "../../@types/api/details_Interface";
import { RankingType } from "../../@types/api/interfaces";
import { BaseUrl, ClientId } from "../../util/Key";

import { Loading } from "../ItemSearch";
import { EmptyCard } from "../Cards/EmptyCard";
import { CardRanking } from "../Cards/CardRanking";

interface GetAnimeResponse {
  data: Details[];
}

export const RankingAnime = ({ ranking }: RankingType) => {
  const choiceRanking: RankingType = {
    ranking: ranking,
  };
  const [animeList, setAnimeList] = useState<Details[]>();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchAnime = async () => {
    try {
      const response = await axios.get<GetAnimeResponse>(
        `${BaseUrl}ranking?ranking_type=${choiceRanking.ranking}`,
        {
          params: {
            offset: page,
            limit: 5,
          },
          headers: {
            "X-MAL-CLIENT-ID": ClientId,
          },
        }
      );

      const animes = response.data.data;

      setAnimeList((prevAnimeList) => {
        const currentAnimeList = prevAnimeList ?? [];
        const newAnimes = animes.filter(
          (anime) =>
            !currentAnimeList.some((prevAnime) => prevAnime.id === anime.id)
        );
        return [...currentAnimeList, ...newAnimes];
      });
      if (page <= 40) {
        setPage((newpage) => newpage + 5);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <FlatList
      data={animeList}
      horizontal={true}
      onEndReached={fetchAnime}
      onEndReachedThreshold={0.1}
      ListFooterComponentStyle={{
        marginHorizontal: 10,
        justifyContent: "center",
      }}
      ListFooterComponent={<Loading loading={loading} />}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <CardRanking anime={item} />}
      ListEmptyComponent={<EmptyCard template="SimplesCard" />}
    />
  );
};
