import { GestureHandlerRootView, Swipeable, TouchableOpacity } from "react-native-gesture-handler";
import { Details } from "../../util/types/details_Interface";
import { View, Text, Image, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface CardFavoriteProps {
  anime: Details;
}

export const CardFavorite = ({ anime }: CardFavoriteProps) => {
    
    const renderRightActions = () => {
        return (
          <>
            <TouchableOpacity className="w-32 h-full justify-center items-center my-1 bg-red-500">
              <View>
                <FontAwesome5 name="trash" size={32} color={'white'}/>
              </View>
            </TouchableOpacity>
          </>
        );
      };

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <View className="w-screen h-48 my-1 flex-row items-center bg-black overflow-hidden">
          <Image
            source={{ uri: anime.main_picture?.large }}
            className="w-32 h-32 object-contain mr-4 rounded-lg"
          />
          <Text className="w-48 text-2xl font-semibold text-white truncate" numberOfLines={2}>
            {anime.title}
          </Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
