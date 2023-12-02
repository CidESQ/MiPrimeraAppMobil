import AsyncStorage from "@react-native-async-storage/async-storage";

import { TOKEN } from "../utilities/constants";

export async function setTokenApi() {
  try {
    AsyncStorage.setItem("token", TOKEN);
    return true;
  } catch (e) {
    return null;
  }
}
