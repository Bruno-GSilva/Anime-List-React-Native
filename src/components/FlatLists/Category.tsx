import axios from "axios";
import { useState, useEffect } from "react";
import { FlatList } from "react-native";

import { CardCategory } from "../Cards/CardCategory";
import { EmptyCard } from "../Cards/EmptyCard";
import { SearchType, categoryType } from "../../util/types/interfaces";
import { BaseUrl, ClientId } from "../../util/key";

export const CategoryAnime = ({ category }: categoryType) => {
  const choiceCategory = {
    category: category,
  };

  const [animeList, setAnimeList] = useState<SearchType[]>([]);

  const fetchAnime = async () => {
    try {
      const response = await axios.get(`${BaseUrl}`, {
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
      animes.map((item: SearchType) => {
        item.node?.genres.filter((genero) => {
          if (genero.id === choiceCategory.category) {
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
      console.error("deu erro nas categorias", err);
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
