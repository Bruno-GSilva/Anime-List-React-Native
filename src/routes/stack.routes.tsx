import * as React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


type UserAuth = {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

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
import { Icon } from "../util/Icon";
import { useNavigation } from "@react-navigation/native";
import { User } from "../util/User";
import SeasonScreen from "../screens/SeasonScreen";
import { FavoriteScreen } from "../screens/Favorite";

const Ways = () => {
  const { navigate } = useNavigation();
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="homeScreen">
      <Stack.Group
        screenOptions={{
          headerTitle: "",
          headerLeft: () => (
            <Text className="text-xl text-white font-extrabold">
              AnimeDBolso
            </Text>
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
        }}>
        <Stack.Screen name="watchingScreen" component={WatchingScreen} />
        <Stack.Screen name="homeScreen" component={HomeScreen} />
        <Stack.Screen
          name="paginationScreen"
          component={PaginationScreen}
          options={{
            animation: "slide_from_bottom",
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{
        animation: "slide_from_right",
        headerStyle: {
          backgroundColor: "#0f172a",
        },
        headerTintColor: "#fff",
      }}>
        <Stack.Screen
          name="RandomScreen"
          component={RandomScreen}
          options={{
            headerTitle: "Animes Random",
          }}
        />
        <Stack.Screen
          name="userScreen"
          component={UserScreen}
          options={{
            headerTitle: "Bruno Silva",
          }}
        />
        <Stack.Screen
          name="seasonScreen"
          component={SeasonScreen}
          options={{
            headerTitle: "Temporadas",
          }}
        />
        <Stack.Screen
          name="listScreen"
          component={ListScreen}
          options={{
            headerTitle: "Ajustes",
          }}
        />
        <Stack.Screen
          name="favoriteScreen"
          component={FavoriteScreen}
          options={{
            headerTitle: "Meus Favoritos",
          }}
        />
        <Stack.Screen
          name="searchScreen"
          component={SearchAnime}
          options={{
            headerTitle: "Pesquisa",
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
      </Stack.Group>
    </Stack.Navigator>
    // </AuthContext.Provider>
  );
};

export default Ways;
