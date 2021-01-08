import React from "react";
import AuthApp from "./components/AuthApp";
import { useUserContext } from "../hooks/contexts/userContext";
import UnAuthApp from "./components/UnAuthApp";
import { UserProvider } from "./provider/UserProvider";

const Index: React.FC = () => {
  const { user } = useUserContext();

  return user ? <AuthApp /> : <UnAuthApp />;
};

const App: React.FC = () => (
  <UserProvider>
    <Index />
  </UserProvider>
);

export default App;
