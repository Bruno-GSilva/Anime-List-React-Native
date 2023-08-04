import * as React from "react";
import { Pressable, Text } from "react-native";

interface User {
  name: string;
  onPress: () => void;
}

export const User = ({ ...props }: User) => {
  return (
    <Pressable className="w-12 h-12 my-2 rounded-full justify-center items-center border-amber-500 border-2" onPress={props.onPress}>
      <Text className="text-xl text-white font-bold">{props.name}</Text>
    </Pressable>
  );
};
