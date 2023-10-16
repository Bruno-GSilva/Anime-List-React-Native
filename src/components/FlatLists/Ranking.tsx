import axios from "axios";
import { useState, useEffect } from "react";
import { FlatList } from "react-native";

import { Details } from "../../util/types/details_Interface";


import { Loading } from "../UI/Loading";
import { EmptyCard } from "../Cards/EmptyCard";
import { CardRanking } from "../Cards/CardRanking";
import { RankingType } from "../../util/types/interfaces";
import { GetAnimeResponse } from "../../util/types/getAnimeResponse";

export const RankingAnime = ({ ranking }: RankingType) => {
  const choiceRanking = {
    ranking: ranking,
  };
  const [animeList, setAnimeList] = useState<Details[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchAnime = async () => {
    try {
      const response = await axios.get<GetAnimeResponse>(
        `https://api.myanimelist.net/v2/anime/ranking?ranking_type=${choiceRanking.ranking}`,
        {
          params: {
            offset: page,
            limit: 5,
          },
          headers: {
            "X-MAL-CLIENT-ID": "8029b12661c0bb90c8c39e954b4cf86f",
          },
        }
      );

      const animesData = response.data.data;
      const animesPaging = response.data.paging.next;

      if (animesPaging) {
        if (page <= 25) {
          setPage((page) => page + 5);
        } else {
          setLoading(false);
          return;
        }
      } else {
        setLoading(false);
        return;
      }

      setAnimeList((prevAnimes) => prevAnimes.concat(animesData));
    } catch (err) {
      console.error("deu error do no ranking", err);
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
