import { View, Text, FlatList, ImageBackground, Pressable } from "react-native";
import { EmptyCard } from "./Cards/EmptyCard";
import { SearchType } from "../util/types/api/interfaces";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import React from "react";
interface ItemSearchProps {
  data: SearchType[];
  inicial: () => void;
  Indicator: boolean;
}

interface LoadingProps {
  loading: boolean;
}

export const Loading = ({ loading }: LoadingProps): any => {
  if (loading) {
    return <ActivityIndicator size={"large"} color={"white"} />;
  } else {
    return null;
  }
};

export const ItemSearch = ({ data, inicial, Indicator }: ItemSearchProps) => {
  const { name } = useRoute();
  const { navigate } = useNavigation();
  return (
    <View className="flex-1">
      <FlatList
        data={data}
        renderItem={(anime) => (
          <Pressable
            key={anime.item.node?.id}
            className="w-full my-1 p-2 flex-row items-center border-2 border-amber-500 bg-black rounded-md active:border-white active:bg-[#00000050]"
            onPress={() =>
              navigate("paginationScreen", { AnimeId: anime.item.node?.id })
            }>
            <View className="w-32 h-32 m-1 rounded-md overflow-hidden border-2 border-amber-500">
              <ImageBackground
                source={{ uri: `${anime.item.node?.main_picture?.large}` }}
                resizeMode="cover"
                className="w-full h-full items-center justify-end"
              />
            </View>
            <Text
              className="w-52 ml-4 text-xl text-white font-bold"
              numberOfLines={2}>
              {anime.item.node?.title}
            </Text>
          </Pressable>
        )}
        onEndReached={inicial}
        onEndReachedThreshold={0.1}
        ListFooterComponentStyle={{
          marginVertical: 10,
        }}
        ListFooterComponent={<Loading loading={Indicator} />}
        ListEmptyComponent={
          name !== "homeScreen" ? (
            <>
              <EmptyCard template="SearchCard" />
              <EmptyCard template="SearchCard" />
              <EmptyCard template="SearchCard" />
              <EmptyCard template="SearchCard" />
            </>
          ) : null
        }
      />
    </View>
  );
};
