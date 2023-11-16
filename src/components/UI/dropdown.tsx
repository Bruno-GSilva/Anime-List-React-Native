import { useState } from "react";
import { Text, View, Pressable, ScrollView } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export interface DropdownProps {
  data: string[] | null;
  label: string;
  radius: string;
}

export const Dropdown = ({ data, label, radius }: DropdownProps) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  return (
    <View
      className={`flex-1 mx-1 px-4${
        openDropdown ? "h-auto" : ""
      } bg-black rounded-md mb-4 mt-2 relative`}
    >
      <Pressable
        className="flex-row items-center p-3"
        onPress={() => setOpenDropdown(!openDropdown)}
      >
        <Text className="text-xl text-amber-500 ">{label}</Text>
        <Ionicons
          name={openDropdown ? "chevron-down" : "chevron-up"}
          size={32}
          color={"#ffffff"}
          style={{ marginTop: 5 }}
        />
      </Pressable>

      <View className={`border-2 top-0 mt-20 border-amber-500 absolute w-full z-50 ${radius? radius:'rounded-br-3xl'}`}>
        {openDropdown && data!.slice().reverse()
            .map((item) => (
              <View className={`p-2 border-2 border-black  my-1 ${radius? radius:'rounded-br-3xl'}`}>
                  <Text className="text-xl text-white bg-[#00000060] p-1 rounded-lg">{item}</Text>
              </View>
            ))
        }
      </View>

    </View>
  );
};
