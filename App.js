import { View, Text, StyleSheet } from "react-native";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { useEffect, useMemo, useState } from "react";

import Auth from "./src/screens/Auth";
import colors from "./src/styles/colors";
import AuthContext from "./src/context/AuthContext";
import { setTokenApi } from "./src/API/token";
import AppScreen from "./src/screens/AppScreen";

export default function App() {
  const [auth, setAuth] = useState(false);
  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    // setAuth(null);
  }, []);

  const login = (user) => {
    console.log("Login : ");
    console.log(user);
    setTokenApi(user.jwt);
    setAuth({
      token: user.jwt,
      idUser: user.user._id,
    });
    setMyUser(user.user.username);
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout: () => null,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <>
      <AuthContext.Provider value={authData}>
        <PaperProvider>
          {auth ? <AppScreen usuario={myUser} /> : <Auth />}
        </PaperProvider>
      </AuthContext.Provider>
    </>
  );
}
