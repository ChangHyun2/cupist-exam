import { createContext, useContext } from "react";
import { I_User } from "@types";
import { me } from "@db/users";

const AuthContext = createContext(me);

export const AuthContextProvider = ({
  children,
}: {
  value: I_User;
  children: JSX.Element;
}) => {
  // value = { user, login, logout, ... }

  return <AuthContext.Provider value={me}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
