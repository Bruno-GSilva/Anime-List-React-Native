import * as React from "react";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

// screens
import UserScreen from "../screens/userScreen";
import PaginationScreen from "../screens/pagination/paginationScreen";
import { TabNavigate } from "./tabs.routes";
import Header from "../components/Header";
import SearchScreen from "../screens/search/searchScreen";

const StackNavigate = () => {
  const { Group, Navigator, Screen } = createNativeStackNavigator();
  const ScreenOptions: NativeStackNavigationOptions = {
    headerTitle: "",
    animation: "slide_from_right",
    header: Header,
  };

  return (
    <Navigator>
      <Group screenOptions={ScreenOptions}>
        <Screen name="tabs" component={TabNavigate} />
        <Screen
          name="paginationScreen"
          component={PaginationScreen}
          options={{ animation: "slide_from_bottom" }}
        />
      </Group>

      <Group
        screenOptions={{
          headerStyle: { backgroundColor: "#0f172a" },
          headerTintColor: "#fff",
          animation: "slide_from_right",
        }}
      >
        <Screen
          name="userScreen"
          component={UserScreen}
          options={{ headerTitle: "nome do usuario" }}
        />
        <Screen
          name="searchScreen"
          component={SearchScreen}
          options={{
            headerTitle: "Pesquise Aqui",
          }}
        />
      </Group>
    </Navigator>
  );
};

export default StackNavigate;
