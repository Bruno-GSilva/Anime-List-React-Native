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
import Login from "../screens/authentication/loginScreen";
import useAsyncStorage from "../Hooks/useAsyncStorage";
import { GlobalContext } from "../contexts/authContext";

const StackNavigate = () => {
  const [user, setUser] = React.useState(null);
  const [name, setName] = React.useState("");
  
  const { Group, Navigator, Screen } = createNativeStackNavigator();
  const { isAuth, setIsAuth } = React.useContext(GlobalContext);
  const { getData } = useAsyncStorage();

  async function DataLocale() {
    try {
      const Auth = await getData("userLoggedIn");

      if (Auth !== null) {
        setUser(Auth);
        setIsAuth(true);
        setName(Auth!.email!.split("@")[0]);
        console.log("Opa! Ja tinha alguem logado!");
      } else {
        console.log("não tem ninguem logado :<");
      }
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    DataLocale();
  }, []);

  const ScreenOptions: NativeStackNavigationOptions = {
    headerTitle: "",
    animation: "slide_from_right",
    header: Header,
  };

  React.useEffect(() => {
    try {
      if (!user == null) {
        setIsAuth(true);
        setName(user!.email!.split("@")[0]);
      }
    } catch (error) {
      console.error(error);
    }

    DataLocale();
  }, [isAuth]);

  return (
    <Navigator initialRouteName="loginScreen">
      {isAuth ? (
        <>
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
              options={{ headerTitle: `Olá, ${name.toLocaleUpperCase()}` }}
            />
            <Screen
              name="searchScreen"
              component={SearchScreen}
              options={{
                headerTitle: "Pesquise Aqui",
              }}
            />
          </Group>
        </>
      ) : (
        <Screen
          name="loginScreen"
          component={Login}
          options={{ headerShown: false }}
        />
      )}
    </Navigator>
  );
};

export default StackNavigate;
