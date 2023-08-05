import axios from "axios";
import * as React from "react";
import { View } from "react-native";



import Input from "../components/UI/Input";
import { ItemSearch } from "../components/ItemSearch";
import { useNavigation } from "@react-navigation/native";
import { SearchType } from "../util/types/interfaces";

type InputState = {
  DataAnime: [string | number | boolean] | SearchType;
  setDataAnime: React.Dispatch<React.SetStateAction<string>>;
};

const SearchScreen = () => {
  const { navigate } = useNavigation();

  const [animeList, setAnimeList] = React.useState<SearchType[]>([]);
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [DataAnime, setDataAnime] = React.useState("");

  const fetchAnime = async (AnimeName: string | InputState) => {
    await axios
      .get(`https://api.myanimelist.net/v2/anime?offset=${page}`, {
        params: {
          q: AnimeName,
          limit: 10,
        },
        headers: {
          "X-MAL-CLIENT-ID": process.env.ClientId,
        },
      })
      .then((res) => {
        const animes = res.data.data;

        // console.log(page);
        setAnimeList((prevAnimeList) => {
          const newAnimes = animes.filter(
            (anime: any) =>
              !prevAnimeList.some(
                (prevAnime) => prevAnime.node?.id === anime.node?.id
              )
          );
          return [...prevAnimeList, ...newAnimes];
        });
        if (page <= 40) {
          //limite max de rolagem
          setPage((newpage) => newpage + 5);
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        // console.error(err);
      });
  };
  const handleInputChange = (text: string) => {
    if (text === "") {
      setDataAnime('')
      animeList.length = 0
      // console.log('ta vazio')
    } else {
      // console.log(animeList.length);
      // console.log(DataAnime);
      setDataAnime(text);
    }
  };
  React.useEffect(() => {
    fetchAnime(DataAnime);
  }, [DataAnime]);

  return (
    <View className="flex-1 p-2 bg-slate-700">
      <Input
        iconLabel="search"
        placeholder="pesquise aqui"
        value={DataAnime}
        onChangeText={handleInputChange}
        onfocus={() => navigate("searchScreen")}
      />
      <ItemSearch
        data={animeList}
        inicial={() => fetchAnime(DataAnime)}
        Indicator={loading}
      />
    </View>
  );
};

export default SearchScreen;
