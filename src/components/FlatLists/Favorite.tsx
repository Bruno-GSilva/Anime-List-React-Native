import axios from "axios";
import React from "react";
import { BaseUrl, ClientId } from "../../util/key";
import { View, Text, FlatList } from "react-native";
import { Details } from "../../util/types/details_Interface";
import { CardFavorite } from "../Cards/CardFavorite";
import {
  GestureHandlerRootView,
  Swipeable,
  TouchableOpacity,
} from "react-native-gesture-handler";

export const FavoriteAnime = () => {
  const [favoriteIds, setFavoriteIds] = React.useState<Details[]>([]);
  const fetchData = async (ids: number[]) => {
    try {
      const responses = await Promise.all(
        ids.map((animeId) =>
          axios.get<Details>(`${BaseUrl}${animeId}?`, {
            headers: {
              "X-MAL-CLIENT-ID": ClientId,
            },
            params: {
              fields:
                "id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics",
            },
          })
        )
      );
      const newData = responses.map((res) => res.data);
      setFavoriteIds(newData);
    } catch (error) {
      console.error("error na requisicão", error);
    }
  };
  React.useEffect(() => {
    fetchData([21, 53998, 51535]);
  }, []);

  return (

        <View className="flex-1 justify-center px-1 items-center bg-slate-500">
          <Text className="text-2xl font-semibold text-white">
            Meus Favoritos
          </Text>
          <FlatList
            data={favoriteIds}
            renderItem={({ item }) => <CardFavorite anime={item} />}
          />
        </View>
  );
};
