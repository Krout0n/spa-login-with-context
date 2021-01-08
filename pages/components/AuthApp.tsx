import React from "react";
import { useUserContext } from "../../hooks/contexts/userContext";

const AuthApp: React.FC = () => {
  const { user, setUserLogout } = useUserContext();
  if (!user) {
    throw new Error("user is null but authed!!!");
  }
  return (
    <>
      <h1>Hello, {user.name}!</h1>
      <button onClick={setUserLogout}>Logout</button>
    </>
  );
};

export default AuthApp;
