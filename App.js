import { View, Text, StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { useState } from "react";
import Auth from "./src/screens/Auth";
import colors from "./src/styles/colors";

export default function App() {
  const [auth, setAuth] = useState(false);
  return (
    <View style={myStyle.container}>
      <PaperProvider>
        {auth ? <Text>Zona De Usuario</Text> : <Auth />}
      </PaperProvider>
    </View>
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
