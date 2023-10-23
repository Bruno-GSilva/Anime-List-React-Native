import axios from "axios";
import React from "react";
import useAsyncStorage from "./useAsyncStorage";

import { Details } from "../util/types/details_Interface";
import { BaseUrl, ClientId } from "../util/KeyUser";
import { GlobalContext } from "../contexts/FavoriteContext";

const useAnimeFavorite = () => {
  const { storeData, getData } = useAsyncStorage();
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
        const newData = responses.map((res) => res.data);
        setFavoritesData(newData);
        storeData("favorites", newData);
      } catch (error) {
        console.error("error na requisicão", error);
      }
    };
    getData("favorites")
    fetchData(favorites);
  }, [favorites]);

  return { favoritesData };
};

export default useAnimeFavorite;