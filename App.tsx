import * as React from "react";
import * as FileSystem from "expo-file-system";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import AuthContext from "./src/contexts/authContext";
import StackNavigate from "./src/routes/stack.routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView className="flex-1">
        <AuthContext>
          <StackNavigate />
        </AuthContext>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
