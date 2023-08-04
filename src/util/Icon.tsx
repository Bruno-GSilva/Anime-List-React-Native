import * as React from "react";
import { Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface IconProps {
  name: string;
  size: number;
  color: string;
  onPress?: () => void;
}

export const Icon = ({ ...props }: IconProps) => {
  return (
    <Pressable
      className="p-3 justify-center items-center mx-2"
      onPress={props.onPress}>
      <FontAwesome5 {...props} />
    </Pressable>
  );
};
