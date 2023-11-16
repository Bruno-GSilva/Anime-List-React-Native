import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { CardFavorite } from "../Cards/CardFavorite";
import Animated, { SlideInLeft } from "react-native-reanimated";
import useAsyncStorage from "../../Hooks/useAsyncStorage";
import useAnimeFavorite from "../../Hooks/useAnimeFavorite";

export const FavoriteAnime = () => {
  const [animeFavorite, setAnimeFavorite] = useState();
  const { favoritesData } = useAnimeFavorite()

  const { getStorage, setStorage } = useAsyncStorage();

  async function getFavorite() {
    const animes = await getStorage("favorites");
    setAnimeFavorite(animes);
  }

  useEffect(() => {
    getFavorite()
    console.log(animeFavorite)
  }, []);

  return (
    <View className="flex-1 justify-center px-1 items-start bg-slate-800">
      <Animated.Text
        entering={SlideInLeft}
        className="text-2xl font-semibold text-black my-4 bg-green-300 p-4 rounded-r-lg"
      >
        Meus Favoritos
      </Animated.Text>
      <FlatList
        data={animeFavorite}
        renderItem={({ item }) => <CardFavorite anime={item} />}
      />
    </View>
  );
};
