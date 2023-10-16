import React, { InputHTMLAttributes } from "react";
import { Text, TextInput, View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputlabel?: string;
  iconLabel: string;
  onChangeText?: () => void;
}

const Input = ({ ...props }: InputProps): JSX.Element => {
  return (
    <>
      {props.inputlabel && (
        <Text className="font-medium text-base text-white my-2">
          {props.inputlabel ? props.inputlabel : "Insira Algo..."}
        </Text>
      )}

      <View className="relative w-full my-1 rounded-lg px-14 py-2 border-2 border-white focus:bg-slate-800 focus:border-amber-500">
        <Icon
          name={props.iconLabel}
          size={18}
          color={"#fff"}
          style={{
            position: "absolute",
            margin: 13,
            zIndex: 30,
          }}
        />
        <TextInput
          onChangeText={props.onChangeText}
          placeholderTextColor={"gray"}
          {...props}
        />
      </View>
    </>
  );
};
export default Input;
