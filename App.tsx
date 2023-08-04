import "react-native-gesture-handler";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { TabNavigate } from "./src/routes/tabs.routes";
import Login from "./src/screens/login";

export const AuthContext = React.createContext<any>(null);

const App = () => {
  const [isAuth, setIsAuth] = React.useState(true);
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        {isAuth ? <TabNavigate /> : <Login />}
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
