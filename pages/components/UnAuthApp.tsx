import React, { useState } from "react";
import { useUserContext } from "../../hooks/contexts/userContext";

const UnAuthApp: React.FC = () => {
  const { setUserLogin } = useUserContext();
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Please, log in!</h1>

      <label>Name:</label>
      <input
        type="text"
        minLength={1}
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <button onClick={() => setUserLogin({ name })}>Log in</button>
    </div>
  );
};

export default UnAuthApp;
