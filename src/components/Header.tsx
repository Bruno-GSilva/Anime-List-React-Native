import * as React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Icon } from "../util/Icon";
import { User } from "../util/User";

import { AuthContext } from "../routes/stack.routes";

const Header: React.FC = () => {
  const { navigate } = useNavigation();
  const { setIsAuth } = React.useContext(AuthContext);
  return (
    <View className="w-full h-20 p-3 flex-row justify-between items-center bg-black">
      <User name="BS" />
      <View className="flex-row">
        <Icon
          name="home"
          color="black"
          size={26}
          onPress={() => navigate("homeScreen")}
        />
        <Icon
          name="sign-out-alt"
          color="black"
          size={26}
          onPress={() => setIsAuth(false)}
        />
      </View>
    </View>
  );
};

export default Header;