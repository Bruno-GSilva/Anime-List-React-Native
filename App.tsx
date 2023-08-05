import "react-native-gesture-handler";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthContext from "./src/contexts/AuthContext";
import { TabNavigate } from "./src/routes/tabs.routes";
import StackNavigate from "./src/routes/stack.routes";

const App = () => {
  return (
    <NavigationContainer>
      {/* <AuthContext> */}
        <StackNavigate/>
      {/* </AuthContext> */}
    </NavigationContainer>
  );
};

export default App;
