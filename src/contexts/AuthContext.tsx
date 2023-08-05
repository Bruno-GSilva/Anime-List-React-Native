import React from "react";

interface GlobalContextProps {
  isAuth: boolean | null;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AuthContextProps {
  children: React.ReactNode;
}

export const GlobalContext = React.createContext({} as GlobalContextProps);

const AuthContext:React.FC<AuthContextProps> = ({ children }: AuthContextProps): JSX.Element => {
  const [isAuth, setIsAuth] = React.useState(false);
  return (
    <GlobalContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AuthContext;