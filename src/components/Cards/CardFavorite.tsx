import {
  GestureHandlerRootView,
  Swipeable,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Details } from "../../util/types/details_Interface";
import { View, Text, Image, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface CardFavoriteProps {
  anime: Details;
}

export const CardFavorite = ({ anime }: CardFavoriteProps) => {
  const renderRightActions = () => {
    return (
        <TouchableOpacity className="w-32 h-full justify-center items-center border border-white bg-red-500">
            <FontAwesome5 name="trash" size={32} color={"white"} />
        </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={renderRightActions}
        containerStyle={{
          display: "flex",
          flexDirection:"row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"#fff"
        }}>
        <View className="w-screen p-4 flex-row items-start border  border-white bg-black overflow-hidden">
          <Image
            source={{ uri: anime.main_picture?.large }}
            className="w-32 h-48 object-contain mr-4 rounded-lg"
          />
          <View>
            <Text
              className="w-48 text-2xl font-semibold text-white truncate"
              numberOfLines={2}>
              {anime.title}
            </Text>
            <Text
              className="w-48 text-xl font-semibold text-green-500 truncate"
              numberOfLines={2}>
              {anime.alternative_titles?.ja}
            </Text>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
