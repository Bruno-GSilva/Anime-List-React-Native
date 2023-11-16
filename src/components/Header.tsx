import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Icon, User } from "./UI/Icon";
import useAsyncStorage from "../Hooks/useAsyncStorage";

const Header: React.FC = () => {
  const [name, setName] = React.useState('')
  
  const { navigate } = useNavigation();
  const { getStorage } = useAsyncStorage()
  
  async function DataLocale() {
    try {
      const Auth = await getStorage("userLoggedIn");
      const Username = Auth!.email!.split('@')[0][0]

      if (Auth !== null) {
        if(Auth){
          setName(Username)
        }
        console.log("Opa! Ja tinha alguem logado!");
      } else {
        console.log("não tem ninguem logado :<");
      }
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(()=>{
    DataLocale()
  },[])

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
        <User name={name.toUpperCase()} onPress={() => navigate("userScreen")} />
      </View>
    </View>
  );
};

export default Header;
