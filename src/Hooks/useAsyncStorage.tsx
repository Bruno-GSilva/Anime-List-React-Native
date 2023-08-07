import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Details } from "../util/types/details_Interface";

const useAsyncStorage = () => {
  const storeData = async (keyname: string, value: Details[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(keyname, jsonValue);
    } catch (e) {
      console.error("error ao salvar", e);
    }
  };

  const getData = async (keyname: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(keyname);
      console.log("valor quer esta no data", jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error("error ao visualizar", e);
    }
  };

  const removeValue = async (keyname: string) => {
    try {
      await AsyncStorage.removeItem(keyname);
      console.log("removido");
    } catch (e) {
      console.error("error ao remover", e);
    }
    console.log("Done.");
  };

  return { storeData, getData, removeValue };
};

export default useAsyncStorage;
