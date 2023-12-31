import { StyleSheet } from "react-native";
import colors from "./colors";

const formStyles = StyleSheet.create({
  input: {
    marginBottom: 25,
    backgroundColor: colors.primary,
    color: colors.fontLight,
    fontSize: 16,
    borderRadius: 5,
  },
  primaryBtn: {
    backgroundColor: colors.lightDark,
    padding: 10,
    marginTop: 60,
    color: colors.fontLight,
  },
  secondaryBtn: {
    marginTop: 30,
    color: colors.lightDark,
    padding: 10,
  },
});

export default formStyles;
