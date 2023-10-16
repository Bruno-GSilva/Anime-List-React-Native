import * as React from "react";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { getAuth, onAuthStateChanged } from 'firebase/auth'

// screens
import UserScreen from "../screens/userScreen";
import PaginationScreen from "../screens/pagination/paginationScreen";
import { TabNavigate } from "./tabs.routes";
import Header from "../components/Header";
import SearchScreen from "../screens/search/searchScreen";
import Login from "../screens/authentication/loginScreen";

const StackNavigate = () => {
  const { Group, Navigator, Screen } = createNativeStackNavigator();
  const [isAuth, setIsAuth] = React.useState(false)
  const [name, setName] = React.useState('')
  // const { isAuth } = React.useContext(GlobalContext);
  const auth = getAuth()

  onAuthStateChanged(auth, (user)=>{
    if(user){
      setIsAuth(true)
      setName(user?.email!.split('@')[0])
    }else{
      console.log("User is signed out")
    }
  })


  const ScreenOptions: NativeStackNavigationOptions = {
    headerTitle: "",
    animation: "slide_from_right",
    header: Header,
  };

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
              options={{ headerTitle: name }}
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
