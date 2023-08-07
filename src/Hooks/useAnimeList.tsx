import axios from "axios";
import { useEffect, useState } from "react";


import { Details } from "../util/types/details_Interface";
import { Text } from "react-native";

export const useAnimeList = () => {
  const [dataAnime, setDataAnime] = useState<Details[]>([]);
  const [animeId, setAnimeId] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInfoAnime = async (animeId: number) => {
      try {
        const response = await axios.get<Details>(`${'https://api.myanimelist.net/v2/anime/'}${animeId}?`, {
          headers: {
            "X-MAL-CLIENT-ID": "8029b12661c0bb90c8c39e954b4cf86f",
          },
          params: {
            fields:
              "id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics",
          },
        });

        const animes = response.data;
        
        if (animes) {
          setLoading(false);
          setDataAnime([animes]);
        } else {
          return <Text>...Loading</Text>;
        }

      } catch (err) {
        console.error("deu erro no Pagination", err);
      }
    };
    getInfoAnime(animeId);
  }, [animeId]);

  return { dataAnime, setAnimeId, animeId, loading };
};
