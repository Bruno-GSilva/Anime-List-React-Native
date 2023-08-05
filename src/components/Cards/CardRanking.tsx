import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { Details } from "../../util/types/details_Interface";
import { SearchType } from "../../util/types/interfaces";
import { FontAwesome5 } from "@expo/vector-icons";

interface CardRankingProp {
  anime: Details & SearchType;
}

export const CardRanking = ({ anime }: CardRankingProp) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { navigate } = useNavigation();

  return (
    <Pressable
      className="relative w-32 h-48 mx-1 my-2 border-2 border-amber-500 rounded-md overflow-hidden active:border-white"
      onPress={() => {
        navigate("paginationScreen", { animeeId: anime.node?.id });
      }}>
      <FontAwesome5
        name="star"
        color="white"
        solid={isFavorite}
        size={25}
        style={{
          position: "absolute",
          zIndex: 10,
          margin: 10,
          left: 0,
          top: 0,
        }}
        onPress={() => setIsFavorite(!isFavorite)}
      />
      <ImageBackground
        key={anime.node?.id}
        source={{ uri: `${anime.node?.main_picture?.large}` }}
        resizeMode="cover"
        className="relative w-full h-full items-center justify-end">
        <View className="px-3 my-3 rounded-md bg-[#00000060]">
          <Text
            className="max-w-48 text-md text-white font-bold px-1"
            numberOfLines={1}>
            {anime.node?.title}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};
