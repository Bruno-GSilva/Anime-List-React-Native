import * as React from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import { BaseUrl, ClientId } from "../util/key";
import { FavoriteAnime } from "../components/FlatLists/Favorite";

const FavoriteScreen = () => {
  return <FavoriteAnime />;
};

export default FavoriteScreen;
