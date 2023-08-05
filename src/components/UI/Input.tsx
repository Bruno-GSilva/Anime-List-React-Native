import React from "react";
import { Text, TextInput, View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";

interface InputProps{
  inputlabel?: string;
  iconLabel: string;
  password?: boolean;
  placeholder: string;
  value: string;
  onfocus?: () => void;
  onChangeText: (e: string) => void;
}

const Input = ({ ...props }: InputProps): JSX.Element => {
  return (
    <>
      {props.inputlabel ? (
        <Text className="font-medium text-base text-white my-2">
          {props.inputlabel ? props.inputlabel : "Insira Algo..."}
        </Text>
      ) : null}

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
          secureTextEntry={!props.password ? false : true}
          autoFocus
          placeholder={props.placeholder}
          placeholderTextColor={"gray"}
          value={props.value}
          onChangeText={props.onChangeText}
          className="focus:text-white"
          onFocus={props.onfocus}
        />
      </View>
    </>
  );
};
export default Input;
