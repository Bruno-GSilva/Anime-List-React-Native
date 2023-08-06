import React from "react";



interface GlobalContextProps {
  favorites: number[];
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
}

export const GlobalContext = React.createContext<GlobalContextProps>(
  {} as GlobalContextProps
);

interface FavoriteContextProps {
  children: React.ReactNode;
}

const FavoriteContext: React.FC<FavoriteContextProps> = ({
  children,
}: FavoriteContextProps): JSX.Element => {
  const [favorites, setFavorites] = React.useState<number[]>([]);

  return (
    <GlobalContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default FavoriteContext;
