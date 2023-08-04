import * as React from "react";
import axios from "axios";
import { View, ImageBackground, Image } from "react-native";

import { ClientId } from "../../util/Key";
import { RankingType } from "../../@types/api/interfaces";
import { useMathRandom } from "../Random";

import { EmptyCard } from "./EmptyCard";

export const SlideCard = () => {
  const choiceRanking: RankingType = {
    ranking: "upcoming",
  };

  const { valueRandom } = useMathRandom();

  const [animeList, setAnimeList] = React.useState<RankingType[]>([]);
  const fetchAnime = async () => {
    await axios
      .get(
        `https://api.myanimelist.net/v2/anime/ranking?ranking_type=${choiceRanking.ranking}`,
        {
          headers: {
            "X-MAL-CLIENT-ID": ClientId,
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data[1].node.title);
        setAnimeList(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    fetchAnime();
  }, []);

  return animeList?.length ? (
    <View className="relative w-full h-80 items-center rounded-md overflow-hidden">
      <Image
        source={{ uri: `${animeList[valueRandom].node?.main_picture.large}` }}
        resizeMode="cover"
        className="w-full h-full bg-[#00000090]"
        blurRadius={5}
      />
      <ImageBackground
        source={{ uri: `${animeList[valueRandom].node?.main_picture.large}` }}
        className="z-30 absolute w-full h-full rounded-md  overflow-hidden"
        resizeMode="contain"
      />
    </View>
  ) : (
    <EmptyCard template="SlideCard" />
  );
};
