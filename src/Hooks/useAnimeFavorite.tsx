import axios from "axios";
import React from "react";
import useAsyncStorage from "./useAsyncStorage";

import { Details } from "../util/types/details_Interface";
import { BaseUrl, ClientId } from "../util/KeyUser";
import { GlobalContext } from "../contexts/favoriteContext";

const useAnimeFavorite = () => {
  const { setStorage } = useAsyncStorage();
  const { favorites } = React.useContext(GlobalContext);

  const [favoritesData, setFavoritesData] = React.useState<Details[]>([]);

  React.useEffect(() => {
    const fetchData = async (ids: number[]) => {
      try {
        const responses = await Promise.all(
          ids.map((animeId) =>
            axios.get<Details>(`${BaseUrl}${animeId}?`, {
              headers: {
                "X-MAL-CLIENT-ID": ClientId,
              },
              params: {
                fields: "id,title,main_picture,alternative_titles",
              },
            })
          )
        );
        const animeData = responses.map((res) => res.data);
        
        setFavoritesData(animeData);
        setStorage("favorites", animeData);

      } catch (error) {
        console.error("error na requisicão", error);
      }
    };
    fetchData(favorites);
  }, [favorites]);

  return { favoritesData };
};

export default useAnimeFavorite;
