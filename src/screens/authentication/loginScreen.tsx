import * as React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Input } from "../../components/UI/Input";
import { Button } from "../../components/UI/Button";
import useAsyncStorage from "../../Hooks/useAsyncStorage";
import { GlobalContext } from "../../contexts/authContext";
import Icon from "@expo/vector-icons/FontAwesome5";

const Login = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const Auth = getAuth();

  const { storeData } = useAsyncStorage();
  const { setIsAuth } = React.useContext(GlobalContext);

  const Validation = async () => {
    await signInWithEmailAndPassword(Auth, email, password)
      .then(() => {
        const user = Auth.currentUser;

        if (user !== null) {
          storeData("userLoggedIn", user);
          setIsAuth(true);
        } else {
          console.log("usuario não existe!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const noValidation = () => {
    setIsAuth(true);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images6.alphacoders.com/656/thumb-1920-656029.png",
      }}
      className="flex-1 px-4 justify-center items-center"
      blurRadius={5}
    >
      <View className="border-white border-2 w-full p-6 rounded-md bg-slate-800">
        <Text className="text-white text-3xl my-4 w-full text-center">
          Animes DBolso
        </Text>
        <Input
          className="text-white"
          iconLabel="user-alt"
          placeholder="seu email aqui..."
          inputlabel="Seu Email"
          onChangeText={(e) => setEmail(e)}
        />
        <Input
          className="text-white"
          iconLabel="lock"
          placeholder="sua senha aqui..."
          inputlabel="Sua Senha"
          securityIcon
          onChangeText={(e) => setPassword(e)}
        />
        <Button
          Label="Entrar"
          onPress={Validation}
          className="bg-amber-500 my-4"
        />
        <View className="w-full justify-center flex-row">
          <Pressable className="h-12 w-12 rounded-2xl mr-3 my-2 justify-center items-center border-2 border-white active:border-amber-500">
            <Icon name="github" size={23} color={"#fff"} />
          </Pressable>
          <Pressable className="h-12 w-12 rounded-2xl mr-3 my-2 justify-center items-center border-2 border-white active:border-amber-500">
            <Icon name="google" size={23} color={"#fff"} />
          </Pressable>
          <Pressable className="h-12 w-12 rounded-2xl mr-0 my-2 justify-center items-center border-2 border-white active:border-amber-500">
            <Icon name="facebook" size={23} color={"#fff"} />
          </Pressable>
        </View>
        <Pressable onPress={noValidation}>
          <Text className="text-sky-100 text-center my-2 underline underline-offset-2 active:text-white">
            Pular Etapa
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Login;
