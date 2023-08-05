import { Pressable, View, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SearchType } from "../../util/types/interfaces";

interface CardSearchProps {
  anime: SearchType;
}

export const CardSearch = ({ anime }: CardSearchProps) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      key={anime.node?.id}
      className="w-full my-1 p-2 flex-row items-center border-2 border-amber-500 bg-black rounded-md active:border-white active:bg-[#00000050]"
      onPress={() =>
        navigate("paginationScreen", { animeeId: anime.node?.id })
      }>
      <View className="w-32 h-32 m-1 rounded-md overflow-hidden border-2 border-amber-500">
        <ImageBackground
          source={{ uri: `${anime.node?.main_picture?.large}` }}
          resizeMode="cover"
          className="w-full h-full items-center justify-end"
        />
      </View>
      <Text
        className="w-52 ml-4 text-xl text-white font-bold"
        numberOfLines={2}>
        {anime.node?.title}
      </Text>
    </Pressable>
  );
};
