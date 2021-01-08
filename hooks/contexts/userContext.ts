import { createContext, useContext } from "react";

export type IUser = {
  name: string;
};

export type IUserContext = {
  user: IUser | null;
  setUserLogin: (user: IUser | null) => void;
  setUserLogout: () => void;
};

export const UserContext = createContext<IUserContext>({
  user: null,
  setUserLogin: () => {},
  setUserLogout: () => {},
});

export const useUserContext = (): IUserContext => useContext(UserContext);
