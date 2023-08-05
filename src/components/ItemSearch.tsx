import { View, FlatList } from "react-native";
import { EmptyCard } from "./Cards/EmptyCard";
import {  useRoute } from "@react-navigation/native";
import React from "react";
import { SearchType } from "../util/types/interfaces";
import { CardSearch } from "./Cards/CardSearch";
import { Loading } from "./UI/Loading";

interface ItemSearchProps {
  data: SearchType[];
  inicial: () => void;
  Indicator: boolean;
}

export const ItemSearch = ({ data, inicial, Indicator }: ItemSearchProps) => {
  const { name } = useRoute();
  return (
    <View className="flex-1">
      <FlatList
        data={data}
        renderItem={({ item }) => <CardSearch anime={item} />}
        onEndReached={inicial}
        onEndReachedThreshold={0.1}
        ListFooterComponentStyle={{marginVertical: 10}}
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
