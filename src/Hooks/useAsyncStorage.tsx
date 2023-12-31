import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStorage = () => {
  const setStorage = async (keyname: string, value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(keyname, jsonValue);
      console.log("salvo com sucesso no :", keyname)
    } catch (e) {
      console.error("error ao salvar", e);
    }
  };

  const getStorage = async (keyname: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(keyname);
      console.log("valor quer esta no data", jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error("error ao visualizar", e);
    }
  };

  const removeStorage = async (keyname: string) => {
    try {
      await AsyncStorage.removeItem(keyname);
      console.log("removido");
    } catch (e) {
      console.error("error ao remover", e);
    }
    console.log("Done.");
  };

  return { removeStorage, getStorage, setStorage };
};

export default useAsyncStorage;
