import * as React from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Button, Text, View, Pressable } from "react-native";
import { Icon } from "../components/UI/Icon";

const UserScreen = () => {
  const auth = getAuth()
  const [name, setName] = React.useState('')

  onAuthStateChanged(auth ,(user)=>{
    return setName(user?.email!);
  })
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
          <Text className="text-2xl font-semibold text-white">
          </Text>
        </View>
      </View>
      <View>
        <Pressable className="w-full flex-row items-center p-2 bg-slate-500" onPress={()=> setIsAuth(false)}>
          <Icon name="sign-out-alt" size={20} color="white" />
          <Text className="text-xl font-semibold text-white">
            Logout
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserScreen;
