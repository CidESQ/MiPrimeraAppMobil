import { API_URL } from "../utilities/constants";

export async function registerApi(values) {
  try {
    const url = `${API_URL}/auth/local/register`;

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    const response = await fetch(url, params);
    const result = await response.json;
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function loginApi(values) {
  try {
    const url = `${API_URL}/auth/local`;

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(`Error en login ${error}`);
    return null;
  }
}
