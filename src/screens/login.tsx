import * as React from "react";
import Reanimated, { SlideInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, View, Text, TextInput, Pressable, Alert } from "react-native";
import { AuthContext } from "../../App";
import Input from "../components/Input";

const Login = (): JSX.Element => {

  const { navigate } = useNavigation();
  const { isAuth, setIsAuth } = React.useContext(AuthContext)

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const validation = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsAuth(true);
        console.log(userCredential.user.email)
      })
      .catch((error) => {
        setIsAuth(false);
        console.log(error)
      });
  }

  return (
    <View className="flex-1 px-10 justify-center items-center bg-black">
      <View className="w-full border-2 border-amber-500 px-8 py-4  rounded-md justify-center items-center">
        <Reanimated.Text
          entering={SlideInUp}
          className="text-2xl text-white font-bold mb-5"
        >
          Beta Anime DBolso
        </Reanimated.Text>
        <Input iconLabel="envelope" inputlabel="Email" value={email} onChangeText={(e) => setEmail(e)} placeholder="digite seu email" />
        <Input iconLabel="lock" inputlabel="Password" value={password} onChangeText={(e) => setPassword(e)} placeholder="digite sua senha" password />
        <Pressable className="w-full py-2 px-4 m-4 justify-center items-center border-2 border-white rounded-md active:border-amber-500" onPress={validation}>
          <Text className="text-white text-2xl font-bold">Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
