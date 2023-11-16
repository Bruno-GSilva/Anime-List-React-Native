import * as React from "react";
import axios from "axios";
import { Pressable, ImageBackground, Image, Text } from "react-native";

import { EmptyCard } from "./EmptyCard";
import { RankingType } from "../../util/types/interfaces";
import { BaseUrl, ClientId } from "../../util/KeyUser";
import { useNavigation } from "@react-navigation/native";

export const SlideCard = () => {
  const { navigate } = useNavigation();
  const choiceRanking: RankingType = {
    ranking: "upcoming",
  };

  const [animeList, setAnimeList] = React.useState<RankingType[]>([]);
  const fetchAnime = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}ranking?ranking_type=${choiceRanking.ranking}`,
        {
          headers: {
            "X-MAL-CLIENT-ID": ClientId,
          },
        }
      );
      // console.log(response.data.data);
      setAnimeList(response.data.data);
    } catch (err) {
      console.error("deu erro no slide", err);
    }
  };

  React.useEffect(() => {
    fetchAnime();
  }, []);

  return animeList?.length ? (
    <Pressable
      className="relative w-full h-96 items-center rounded-md overflow-hidden active:border-amber-500 z-40"
      onPress={() => {
        navigate("paginationScreen", { animeeId: animeList[4].node?.id });
      }}>
      <Image
        source={{ uri: `${animeList[4].node?.main_picture?.large}` }}
        resizeMode="cover"
        className="absolute w-full h-full bg-[#00000090]"
        blurRadius={5}
      />
      <Text className="w-3/4 absolute bottom-0 left-0 p-1 rounded-l-md m-2 z-50 bg-[#00000060] text-2xl font-bold text-amber-500" numberOfLines={1}>
        Novo temporada de {animeList[4].node?.title} chegando agora!  
      </Text>
      <ImageBackground
        source={{ uri: `${animeList[4].node?.main_picture.large}` }}
        className="z-30 absolute w-full h-full rounded-md  overflow-hidden"
        resizeMode="contain"
      />
    </Pressable>
  ) : (
    <EmptyCard template="SlideCard" />
  );
};
