import * as React from "react";
import { Text } from "react-native";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

// screens
import HomeScreen from "../screens/home";
import Login from "../screens/login";
import Register from "../screens/Register";
import RandomScreen from "../screens/RandomScreen";
import UserScreen from "../screens/UserScreen";
import ListScreen from "../screens/lists/ListScreen";
import WatchingScreen from "../screens/lists/WatchingScreen";
import SearchAnime from "../screens/Search";
import PaginationScreen from "../screens/home/Pagination";
import { Icon } from "../components/UI/Icon";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import SeasonScreen from "../screens/SeasonScreen";
import { FavoriteScreen } from "../screens/Favorite";
import { User } from "../components/UI/User";

const Ways = () => {
  const { navigate } = useNavigation();
  const { Group, Navigator, Screen } = createNativeStackNavigator();

  const ScreenOptions: NativeStackNavigationOptions = {
    headerTitle: "",
    headerLeft: () => (
      <Text className="text-xl text-white font-extrabold">AnimeDBolso</Text>
    ),
    headerStyle: {
      backgroundColor: "#0f172a",
    },
    headerRight: () => (
      <>
        <Icon
          name="search"
          color="white"
          size={22}
          onPress={() => navigate("searchScreen")}
        />
        <User name="BS" onPress={() => navigate("userScreen")} />
      </>
    ),
  };

  return (
      <Navigator initialRouteName="homeScreen">
        <Group screenOptions={ScreenOptions}>
          <Screen name="homeScreen" component={HomeScreen} />
          <Screen name="watchingScreen" component={WatchingScreen} />
          <Screen
            name="paginationScreen"
            component={PaginationScreen}
            options={{
              animation: "slide_from_bottom",
            }}
          />
        </Group>

        <Group
          screenOptions={{
            animation: "slide_from_right",
            headerStyle: {
              backgroundColor: "#0f172a",
            },
            headerTintColor: "#fff",
          }}>
          <Screen
            name="RandomScreen"
            component={RandomScreen}
            options={{
              headerTitle: "Animes Random",
            }}
          />
          <Screen
            name="userScreen"
            component={UserScreen}
            options={{
              headerTitle: "Bruno Silva",
            }}
          />
          <Screen
            name="seasonScreen"
            component={SeasonScreen}
            options={{
              headerTitle: "Temporadas",
            }}
          />
          <Screen
            name="listScreen"
            component={ListScreen}
            options={{
              headerTitle: "Ajustes",
            }}
          />
          <Screen
            name="favoriteScreen"
            component={FavoriteScreen}
            options={{
              headerTitle: "Meus Favoritos",
            }}
          />
          <Screen
            name="searchScreen"
            component={SearchAnime}
            options={{
              headerTitle: "Pesquisa",
            }}
          />
        </Group>

        <Group screenOptions={{ headerShown: false }}>
          <Screen name="login" component={Login} />
          <Screen name="register" component={Register} />
        </Group>
      </Navigator>
  );
};

export default Ways;
