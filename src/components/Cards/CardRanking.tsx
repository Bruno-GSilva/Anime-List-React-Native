import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { Details } from "../../util/types/details_Interface";
import { SearchType } from "../../util/types/interfaces";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { GlobalContext } from "../../contexts/FavoriteContext";

interface CardRankingProp {
  anime: SearchType;
}

export const CardRanking = ({ anime }: CardRankingProp) => {
  const { navigate } = useNavigation();
  const { favorites, setFavorites } = useContext(GlobalContext);
  const [active, setActive] = useState(false);

  const addAnimeFavorites = (animeId: number) => {
    if (favorites.includes(animeId)) {
      setFavorites(favorites.filter((id) => id !== animeId));
    } else {
      setFavorites([...favorites, animeId]);
    }
    setActive(!active);
  };

  return (
    <Pressable
      className="relative w-32 h-48 mx-1 my-2 border-2 border-amber-500 rounded-md overflow-hidden active:border-white"
      onPress={() => {
        navigate("paginationScreen", { animeeId: anime.node?.id });
      }}
    >
      <Ionicons
        name={active ? "star" : "star-outline"}
        color="white"
        size={25}
        style={{
          position: "absolute",
          zIndex: 10,
          margin: 10,
          left: 0,
          top: 0,
        }}
        onPress={() => addAnimeFavorites(anime.node?.id)}
      />
      <ImageBackground
        key={anime.node?.id}
        source={{ uri: `${anime.node?.main_picture?.large}` }}
        resizeMode="cover"
        className="relative w-full h-full items-center justify-end"
      >
        <View className="px-3 my-3 rounded-md bg-[#00000060]">
          <Text
            className="max-w-48 text-md text-white font-bold px-1"
            numberOfLines={1}
          >
            {anime.node?.title}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};
