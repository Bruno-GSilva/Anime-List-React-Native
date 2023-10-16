import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, ImageBackground } from "react-native";
import Input from "../../components/UI/Input";
import { GlobalContext } from "../../contexts/authContext";
import { Button } from "../../components/UI/Button";

const Login = () => {
  const { setIsAuth } = React.useContext(GlobalContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const validation = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsAuth(true);
        console.log(userCredential.user.email);
      })
      .catch((error) => {
        setIsAuth(false);
        console.log(error);
      });
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images6.alphacoders.com/656/thumb-1920-656029.png",
      }}
      className="flex-1 px-4 justify-center items-center"
      blurRadius={5}
    >
      <View className="border-white border-2 w-full p-2 rounded-md bg-slate-800">
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
          onChangeText={(e) => setPassword(e)}
        />
        <Button Label="Entrar" onPress={validation} className="bg-amber-500" />
      </View>
    </ImageBackground>
  );
};

export default Login;
