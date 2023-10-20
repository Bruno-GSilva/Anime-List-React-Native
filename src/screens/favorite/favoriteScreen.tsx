import * as React from "react";
import { FavoriteAnime } from "../../components/FlatLists/Favorite";

import { supabase } from "../../lib/supabase";

const FavoriteScreen = () => {

  React.useEffect(() => {
    const getData = async () => {
      try {
        let { data, error } = await supabase
          .from("user_lists")
          .select("favorites_list");

        if (data !== null) {
          console.log("tem algo", data);
        } else {
          console.log(error)
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return <FavoriteAnime />;
};

export default FavoriteScreen;
