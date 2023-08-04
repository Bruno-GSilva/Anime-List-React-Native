import * as React from "react";
import { View, FlatList } from "react-native";

import { EmptyCard } from "../../components/Cards/EmptyCard";
import { CardPagination } from "../../components/Cards/CardPagination";
import { useAnimeList } from "../../Hooks/useAnimeList";
import {  useRoute, RouteProp } from "@react-navigation/native";

interface RoutesParam {
  animeeId: number
}

const PaginationScreen = () => {
  const { dataAnime, setAnimeId } = useAnimeList();
  const route = useRoute<RouteProp<Record<number, RoutesParam>>>()

  React.useEffect(() => {
     setAnimeId(route.params?.animeeId)
  }, [route.params?.animeeId]);

  return (
    <View className="w-full h-full p-2 bg-slate-500">
      <FlatList
        data={dataAnime}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <CardPagination anime={item} />}
        ListEmptyComponent={<EmptyCard template="SimplesCard" />}
      />
    </View>
  );
};

export default PaginationScreen;