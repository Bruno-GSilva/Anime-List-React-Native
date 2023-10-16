import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Icon, User } from "./UI/Icon";
import { GlobalContext } from "../contexts/authContext";

const Header: React.FC = () => {
  const { navigate } = useNavigation();
  const { setIsAuth } = React.useContext(GlobalContext);
  return (
    <View className="w-full h-20 pt-3 pb-1 px-4 flex-row justify-between items-center bg-slate-900">
      <Text className="text-xl text-white font-extrabold">AnimeDBolso</Text>
      <View className="flex-row">
        <Icon
          name="search"
          color="white"
          size={22}
          onPress={() => navigate("searchScreen")}
        />
        <User name="BS" onPress={() => navigate("userScreen")} />
      </View>
    </View>
  );
};

export default Header;
