import * as React from "react";
import { getAuth } from "firebase/auth";
import { Text, View, Pressable } from "react-native";
import { Icon } from "../components/UI/Icon";
import useAsyncStorage from "../Hooks/useAsyncStorage";
import { GlobalContext } from "../contexts/AuthContext";

const UserScreen = () => {
  const auth = getAuth();
  const { removeValue } = useAsyncStorage();
  const { setIsAuth } = React.useContext(GlobalContext);

  const signOutUser = async () => {
    try {
      await auth.signOut();
      setIsAuth(false);
      removeValue("userLoggedIn");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View className="flex-1 bg-black">
      <View className="flex-1">
        <View className="w-full flex-row items-center p-4 bg-slate-500 my-1">
          <Icon name="list-ul" size={21} color="white" />
          <Text className="text-2xl font-semibold text-white">
            Minha Lista 1
          </Text>
        </View>
        <View className="w-full flex-row items-center p-4 bg-red-500 my-1">
          <Icon name="list-ul" size={21} color="white" />
          <Text className="text-2xl font-semibold text-white">
            Minha Lista 2
          </Text>
        </View>
        <View className="w-full flex-row items-center p-4 bg-amber-500 my-1">
          <Icon name="list-ul" size={21} color="white" />
          <Text className="text-2xl font-semibold text-white"></Text>
        </View>
      </View>
      <View>
        <Pressable
          className="w-full flex-row items-center p-2 bg-slate-500"
          onPress={signOutUser}
        >
          <Icon name="sign-out-alt" size={20} color="white" />
          <Text className="text-xl font-semibold text-white">Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserScreen;
