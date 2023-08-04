import { useNavigation } from "@react-navigation/native";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { Details } from "../../@types/api/details_Interface";
import { SearchType } from "../../@types/api/interfaces";


interface CardRankingProp {
  anime: Details & SearchType;
}

export const CardRanking = ({ anime }: CardRankingProp) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      className="w-32 h-48 mx-1 my-2 border-2 border-amber-500 rounded-md overflow-hidden"
      onPress={() => {
        navigate("paginationScreen", {animeeId: anime.node?.id });
      }}>
      <ImageBackground
        key={anime.node?.id}
        source={{ uri: `${anime.node?.main_picture?.large}` }}
        resizeMode="cover"
        className="w-full h-full items-center justify-end">
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
