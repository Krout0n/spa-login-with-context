import React, { useState } from "react";
import { IUser, UserContext } from "../../hooks/contexts/userContext";

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUserLogin] = useState<IUser | null>(null);
  return (
    <UserContext.Provider
      value={{ user, setUserLogin, setUserLogout: () => setUserLogin(null) }}
    >
      {children}
    </UserContext.Provider>
  );
};
