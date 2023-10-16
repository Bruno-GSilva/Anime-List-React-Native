import * as React from "react";

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import AuthContext from "./src/contexts/authContext";
import StackNavigate from "./src/routes/stack.routes";

const App = () => {
  return (
    <NavigationContainer>
      <AuthContext>
        <StackNavigate />
      </AuthContext>     
    </NavigationContainer>
  );
};

export default App;
