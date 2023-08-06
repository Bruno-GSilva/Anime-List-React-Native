import React from "react";
import { View, Text, FlatList } from "react-native";
import { CardFavorite } from "../Cards/CardFavorite";
import Animated, { SlideInLeft, SlideInRight } from "react-native-reanimated";
import useAsyncStorage from "../../Hooks/useAsyncStorage";
import useAnimeFavorite from "../../Hooks/useAnimeFavorite";

export const FavoriteAnime = () => {
  const { favoritesData } = useAnimeFavorite();
  // const [animeData, setAnimeData] = React.useState()
  // const { getData } = useAsyncStorage()
  // React.useEffect(()=>{
  //   getData("favorites")
  //   .then(res => {
  //     setAnimeData(res)
  //     console.log("recebeu os dados", res)
  //   })
  //   .catch(err =>{
  //     console.error("n puxou", err)
  //   })
  // },[])

  return (
    <View className="flex-1 justify-center px-1 items-start bg-slate-800">
      <Animated.Text
        entering={SlideInLeft}
        className="text-2xl font-semibold text-black my-4 bg-green-300 p-4 rounded-r-lg">
        Meus Favoritos
      </Animated.Text>
      <FlatList
        data={favoritesData}
        renderItem={({ item }) => <CardFavorite anime={item} />}
      />
    </View>
  );
};
