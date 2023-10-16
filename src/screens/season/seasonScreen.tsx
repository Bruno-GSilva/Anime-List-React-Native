import * as React from "react";

import { Text, View, SafeAreaView } from "react-native";
import { SeasonAnime } from "../../components/FlatLists/Season";
import { ScrollView } from "react-native-gesture-handler";
import { PressableIcon } from "../../components/UI/Pressable";

const SeasonScreen = (): JSX.Element => {
  return (
    <SafeAreaView className="flex-1 p-2 items-center justify-center bg-slate-800">
      <ScrollView>
        <View className="flex-row justify-center items-center">
          <PressableIcon nameIcon="sort-down" color="white" label="Ano" size={20} style={{marginTop:-5}}/>
          <PressableIcon nameIcon="sort-down" color="white" label="Temporada" size={20} style={{marginTop:-5}}/>
        </View>
        <Text className="text-2xl text-white font-bold my-2 mx-4">
          Temporada Inverno 2024
        </Text>
        <SeasonAnime season="winter" year={2024} />
        <Text className="text-2xl text-white font-bold my-2 mx-4">
          Temporada Outono 2023
        </Text>
        <SeasonAnime season="fall" year={2023} />
        <Text className="text-2xl text-white font-bold my-2 mx-4">
          Temporada Primavera 2023
        </Text>
        <SeasonAnime season="spring" year={2023} />
        <Text className="text-2xl text-white font-bold my-2 mx-4">
          Temporada Verão 2023
        </Text>
        <SeasonAnime season="summer" year={2023} />
        <Text className="text-2xl text-white font-bold my-2 mx-4">
          Temporada Inverno 2023
        </Text>
        <SeasonAnime season="winter" year={2023} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SeasonScreen;
