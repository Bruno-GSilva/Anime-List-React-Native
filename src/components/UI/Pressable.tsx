import * as React from "react";
import { Text, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface PressableProps {
  onPress?: () => void;
  label: string;
  nameIcon: string;
  color: string;
  size: number;
  style?: any;
}

export const PressableIcon = (props: PressableProps) => {
  return (
    <Pressable
      className="flex-1 flex-row px-2 py-1 bg-slate-900 rounded-xl border-2 active:bg-amber-500 border-white justify-center items-center mx-2"
      onPress={props.onPress}>
      <Text className="text-white text-xl font-bold mr-3">{props.label}</Text>
      <FontAwesome5
        name={props.nameIcon}
        color={props.color}
        size={props.size}
        style={props.style}
      />
    </Pressable>
  );
};
