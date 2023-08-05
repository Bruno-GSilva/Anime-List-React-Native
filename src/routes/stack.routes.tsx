import * as React from "react";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

// screens
import Login from "../screens/login";
import Register from "../screens/Register";
import UserScreen from "../screens/UserScreen";
import PaginationScreen from "../screens/home/Pagination";
import { TabNavigate } from "./tabs.routes";
import Header from "../components/Header";
import SearchScreen from "../screens/Search";
import Input from "../components/UI/Input";

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
        }}>
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
