import * as React from "react";
import { useNavigation } from "@react-navigation/native";

import { Button, Text, View } from "react-native";

const WatchingScreen = (): JSX.Element => {
  const { goBack, navigate } = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-emerald-500">
      <Text className="text-4xl text-white font-bold my-2">Ajustes</Text>
      <Button title="Ir para a outra tela" onPress={() => navigate("listScreen")} />
    </View>
  );
};

export default WatchingScreen;