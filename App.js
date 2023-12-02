import { View, Text, StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { useEffect, useMemo, useState } from "react";
import Auth from "./src/screens/Auth";
import colors from "./src/styles/colors";
import AuthContext from "./src/context/AuthContext";

export default function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(null);
  }, []);

  const login = (user) => {
    console.log("Login : ");
    console.log(user);
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
    <AuthContext.Provider value={authData}>
      <PaperProvider>
        {auth ? <Text>Zona De Usuario</Text> : <Auth />}
      </PaperProvider>
    </AuthContext.Provider>
  );
}

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.dark,
  },
});
