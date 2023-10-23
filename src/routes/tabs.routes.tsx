import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "../components/UI/Icon";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import SeasonScreen from "../screens/season/seasonScreen";
import FavoriteScreen from "../screens/favorite/favoriteScreen";
import ListScreen from "../screens/lists/ListScreen";
import HomeScreen from "../screens/home";
import FavoriteContext from "../contexts/FavoriteContext";

export const TabNavigate = () => {
  const { navigate } = useNavigation();
  const { Navigator, Screen, Group } = createBottomTabNavigator();

  return (
    <FavoriteContext>
      <Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "#f59e0b",
          tabBarStyle: {
            borderTopColor: "#0f172a",
            backgroundColor: "#0f172a",
          },
        }}>
        <Screen
          name="homeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5
                name="home"
                color={color}
                size={size}
                onPress={() => navigate("homeScreen")}
              />
            ),
          }}
        />
        <Screen
          name="favoriteScreen"
          component={FavoriteScreen}
          options={{
            headerTitle: "Meus Favoritos",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5
                name="star"
                color={color}
                solid
                size={size}
                onPress={() => navigate("favoriteScreen")}
              />
            ),
          }}
        />
        <Screen
          name="seasonScreen"
          component={SeasonScreen}
          options={{
            headerTitle: "Temporadas",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5
                name="snowflake"
                color={color}
                size={size}
                onPress={() => navigate("seasonScreen")}
              />
            ),
          }}
        />
        <Screen
          name="listScreen"
          component={ListScreen}
          options={{
            headerTitle: "Ajustes",
            tabBarIcon: ({ size, color }) => (
              <Icon
                name="cog"
                color={color}
                size={size}
                onPress={() => navigate("listScreen")}
              />
            ),
          }}
        />
      </Navigator>
    </FavoriteContext>
  );
};
