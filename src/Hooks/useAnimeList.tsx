import axios from "axios";
import { useEffect, useState } from "react";

import { Details } from "../@types/api/details_Interface";
import { ClientId, BaseUrl } from "../util/Key";

export const useAnimeList = () => {
  const [dataAnime, setDataAnime] = useState<Details[]>([]);
  const [animeId, setAnimeId] = useState(0);

  useEffect(() => {
    const getInfoAnime = async (animeId: number) => {
      try {
        await axios
          .get(`${BaseUrl}${animeId}?`, {
            headers: {
              "X-MAL-CLIENT-ID": ClientId,
            },
            params: {
              fields:
                "id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics",
            },
          })
          .then((res) => {
            setDataAnime([res.data]);
          });
      } catch (err) {
        console.error("deu erro no Pagination");
      }
    };
    getInfoAnime(animeId);
  }, [animeId]);

  return { dataAnime, setAnimeId, animeId };
};
