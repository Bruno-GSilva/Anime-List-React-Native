import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ways from "./stack.routes";
import { Icon } from "../components/UI/Icon";
import UserScreen from "../screens/UserScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import SeasonScreen from "../screens/SeasonScreen";
import { FavoriteScreen } from "../screens/Favorite";
import ListScreen from "../screens/lists/ListScreen";

export const TabNavigate = () => {
  const { navigate } = useNavigation();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="ways"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          borderTopColor: "#0f172a",
          backgroundColor: "#0f172a",
        },
      }}>
      <Tab.Screen
        name="ways"
        component={Ways}
        options={{
          tabBarIcon: ({ size }) => (
            <Icon
              name="home"
              color={"white"}
              size={size}
              onPress={() => navigate("homeScreen")}
            />
          ),
        }}
      />
      <Tab.Group
        screenOptions={{
          headerShown: true,
          headerLeft: () => <Icon name="arrow-left" color="white" size={18} />,
          headerStyle: {
            backgroundColor: "#0f172a",
          },
          headerTintColor: "white",
        }}>
        <Tab.Screen
          name="favorite"
          component={FavoriteScreen}
          options={{
            headerTitle: "Meus Favoritos",
            tabBarIcon: ({ size }) => (
              <FontAwesome5
                name="star"
                color={"white"}
                solid
                size={size}
                onPress={() => navigate("favoriteScreen")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="season"
          component={SeasonScreen}
          options={{
            headerTitle: "Temporadas",
            tabBarIcon: ({ size }) => (
              <FontAwesome5
                name="snowflake"
                color={"white"}
                size={size}
                onPress={() => navigate("seasonScreen")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ajustes"
          component={ListScreen}
          options={{
            headerTitle: "Ajustes",
            tabBarIcon: ({ size }) => (
              <Icon
                name="cog"
                color={"white"}
                size={size}
                onPress={() => navigate("listScreen")}
              />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};
