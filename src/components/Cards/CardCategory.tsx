import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { Details } from "../../util/types/details_Interface";
import { SearchType } from "../../util/types/interfaces";

interface CardCategoryProp {
  anime: Details & SearchType;
}

export const CardCategory = ({ anime }: CardCategoryProp) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      className="w-32 h-48 mx-1 my-2 border-2 border-amber-500 rounded-md overflow-hidden active:border-white"
      onPress={() => {
        navigate("paginationScreen", { animeeId: anime.node?.id });
      }}>
      <ImageBackground
        key={anime.node?.id}
        source={{ uri: `${anime.node?.main_picture.large}` }}
        resizeMode="cover"
        className="w-full h-full items-center justify-end">
        <View className="px-3 my-3 rounded-md bg-[#00000060]">
          <Text
            className="max-w-48 text-md text-white font-bold py-3"
            numberOfLines={1}>
            {anime.node?.title}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};
