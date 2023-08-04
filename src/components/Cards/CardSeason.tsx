import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";

export const CardSeason = ({ ...anime }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      className="h-32 w-auto mx-2 my-2 border-2 border-amber-500 overflow-hidden active:border-white rounded-md"
      onPress={() =>
        navigate("paginationScreen", { AnimeId: anime.item.node?.id })
      }>
      <ImageBackground
        key={anime.item.node?.id}
        source={{ uri: `${anime.item.node?.main_picture.large}` }}
        resizeMode="cover"
        className="w-full h-full items-center justify-end">
        <View className="w-12 px-3 my-3 rounded-md bg-[#00000060] overflow-hidden">
          <Text
            className="text-md text-white font-bold py-3"
            numberOfLines={1}>
            {anime.item.node?.title}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};
