import * as React from "react";

import { Text, View } from "react-native";

const RandomScreen = (): JSX.Element => {
  return (
    <View className="flex-1 justify-center items-center bg-slate-500">
      <Text className="text-2xl font-bold text-white">Seu Anime Random</Text>
    </View>
  );
};

export default RandomScreen;