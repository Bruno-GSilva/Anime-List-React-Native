import { ImageBackground, Pressable, Text, View } from "react-native";
import { CategoryAnime } from "../FlatLists/Category";
import { Details } from "../../util/types/details_Interface";

interface CardPaginationProps {
  anime: Details;
}

export const CardPagination = ({ anime }: CardPaginationProps) => {
  return (
    <View className="flex-1 items-center">
      <Text className="text-2xl text-white font-bold my-2" numberOfLines={2}>
        {anime.title}
      </Text>
      <View className="flex-1 flex-row">
        <ImageBackground
          key={anime.id}
          source={{ uri: `${anime.pictures?.[0].large}` }}
          resizeMode="cover"
          className="flex-1 h-80 items-center justify-end mx-2 rounded-md overflow-hidden border-2 border-amber-500">
          <View className="px-3 my-3 rounded-md bg-[#00000060]">
            <Text
              className="max-w-48 text-md text-white font-bold py-3"
              numberOfLines={1}>
              {anime.title}
            </Text>
          </View>
        </ImageBackground>
        <View className="relative flex-1 mx-2">
          <Text
            className="w-full text-sm text-amber-500 font-extrabold mb-1"
            numberOfLines={2}>
            {anime.alternative_titles?.ja}
          </Text>
          <Text
            className="w-full text-sm text-white font-normal my-1"
            numberOfLines={4}>
            {anime.synopsis}
          </Text>
          <Text
            className="w-full text-sm text-white font-normal my-1"
            numberOfLines={2}>
            Dia de Lançamento:{" "}
            {anime.broadcast?.day_of_the_week ? (
              <Text className="text-green-500">
                {anime.broadcast?.day_of_the_week}
              </Text>
            ) : (
              <Text className="text-red-500">
                Indisponivel
              </Text>
            )}
          </Text>
          <Text
            className="w-full text-sm text-white font-normal my-1"
            numberOfLines={2}>
            Quantidade de Eps:{" "}
            <Text className="text-green-500">{anime.num_episodes}</Text>
          </Text>
          <Text
            className="w-full text-sm text-white font-normal my-1"
            numberOfLines={2}>
            Temporada:{" "}
            <Text className="text-green-500">{`${anime.start_season?.season} / ${anime.start_season?.year}`}</Text>
          </Text>
          <Text
            className="w-full text-sm text-white font-normal my-1"
            numberOfLines={4}>
            Generos:{" "}
            <Text className="text-green-500">
              {anime.genres?.map((item) => item.name).join(", ")}
            </Text>
          </Text>
        </View>
      </View>
      <Pressable className="w-full p-4 justify-center items-center my-2 rounded-md bg-amber-500 active:bg-amber-600">
        <Text className="text-white text-md">Adicionar a sua lista</Text>
      </Pressable>
      <CategoryAnime category={1} />
    </View>
  );
};
