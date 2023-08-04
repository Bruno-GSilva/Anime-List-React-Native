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

export const PressableIcon = ({
  onPress,
  color,
  label,
  nameIcon,
  size,
  style,
}: PressableProps) => {
  return (
    <Pressable
      className="flex-1 flex-row px-2 py-1 bg-slate-900 rounded-xl border-2 active:bg-amber-500 border-white justify-center items-center mx-2"
      onPress={onPress}>
      <Text className="text-white text-xl font-bold mr-3">{label}</Text>
      <FontAwesome5 name={nameIcon} color={color} size={size} style={style} />
    </Pressable>
  );
};