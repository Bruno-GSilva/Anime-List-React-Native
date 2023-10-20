import * as React from "react";
import { ScrollView, SafeAreaView, Text, View } from "react-native";

import { RankingAnime } from "../../components/FlatLists/Ranking";
import { SlideCard } from "../../components/Cards/SlideCard";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-purple-600">
      <ScrollView>
        <SafeAreaView className="px-3 justify-center bg-slate-800">
          <View className="flex-row mx-2 my-3 items-center justify-center">
            {/* aqui vai ficar o botao de random e o de categoria */}
          </View>
          <SlideCard />
          <Text className="text-white text-2xl font-bold mx-4 my-2">
            Animes Em Andamento
          </Text>
          <RankingAnime ranking="airing" />
          <Text className="text-white text-2xl font-bold mx-4 my-2">
            Top Series Animes
          </Text>
          <RankingAnime ranking="bypopularity" />
          <Text className="text-white text-2xl font-bold mx-4 my-2">
            Top Animes Filmes
          </Text>
          <RankingAnime ranking="movie" />
          <Text className="text-white text-2xl font-bold mx-4 my-2">
            Animes Populares
          </Text>
          <RankingAnime ranking="tv" />
          <Text className="text-white text-2xl font-bold mx-4 my-2">
            Proximos Lançamentos
          </Text>
          <RankingAnime ranking="upcoming" />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
