import axios from "axios";
import { useState, useEffect } from "react";
import { FlatList } from "react-native";

import { ClientId } from "../../util/Key";

import { SearchType } from "../../@types/api/interfaces";
import { CardCategory } from "../Cards/CardCategory";
import { EmptyCard } from "../Cards/EmptyCard";

type categoryType = {
  category:
    | 1 // | "Action"
    | 2 // | "Adventure"
    | 4 // | "Comedy"
    | 8 // | "Drama"
    | 10 // | "Fantasy"
    | 16 // | "Magic"
    | 18 // | "Mecha"
    | 7 // | "Mystery"
    | 22 // | "Romance"
    | 24 // | "Science-fiction"
    | 28 // | "Yaoi"
    | 37 // | "Supernatural"
    | 14 // | "Horror"
    | 30 // | "Sports"
    | 36; // | "Slice of Life";
};

export const CategoryAnime = ({ category }: categoryType) => {
  const choiceCategory = {
    category: category,
  };

  const [animeList, setAnimeList] = useState<SearchType[]>([]);

  const fetchAnime = async () => {
    try {
      const response = await axios.get(`https://api.myanimelist.net/v2/anime`, {
        params: {
          q: "abcdefghijklmnopqrstuvxyz",
          limit: 20,
          offset: 1,
          fields: "genres",
        },
        headers: {
          "X-MAL-CLIENT-ID": ClientId,
        },
      });
      const animes = response.data.data;
      // console.log(animes)
      animes.map((item: SearchType) => {
        item.node?.genres.filter((genero) => {
          if (genero.id === choiceCategory.category) {
            // console.log(`animes filtrados = ${genero.name}`);
            const alreadyExists = animeList.some(
              (anime) => anime.node?.id === item.node?.id
            );
            if (!alreadyExists) {
              setAnimeList((novoItem) => [...novoItem, item]);
            }
          }
        });
      });
    } catch (err) {
      console.error("deu erro nas categorias");
    }
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <FlatList
      data={animeList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <CardCategory anime={item} />}
      ListEmptyComponent={<EmptyCard template="SimplesCard" />}
    />
  );
};
