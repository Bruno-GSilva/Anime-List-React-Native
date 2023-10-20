import React, { InputHTMLAttributes, useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";

interface InputProps extends TextInputProps {
  inputlabel?: string;
  iconLabel: string;
  securityIcon?: boolean;
  onChangeText?: (text: string) => void;
}

export const Input = ({
  iconLabel,
  securityIcon,
  onChangeText,
  inputlabel,
  ...rest
}: InputProps): JSX.Element => {
  const [lock, setLock] = useState<boolean>(true);
  return (
    <>
      {inputlabel && (
        <Text className="font-medium text-base text-white my-2">
          {inputlabel ? inputlabel : "Insira Algo..."}
        </Text>
      )}

      <View className="relative w-full my-1 rounded-lg px-14 py-2 border-2 border-white focus:bg-slate-800 focus:border-amber-500">
        <Icon
          name={iconLabel}
          size={18}
          color={"#fff"}
          style={{
            position: "absolute",
            margin: 13,
            zIndex: 30,
          }}
        />
        {securityIcon && (
          <Icon
            name={"eye"}
            size={18}
            color={"#fff"}
            style={{
              position: "absolute",
              right: 0,
              margin: 13,
              zIndex: 30,
            }}
            onPress={() => setLock(!lock)}
          />
        )}
        <TextInput
          secureTextEntry={securityIcon ? lock : false}
          onChangeText={() => onChangeText}
          placeholderTextColor={"gray"}
          {...rest}
        />
      </View>
    </>
  );
};
