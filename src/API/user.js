import API_URL from "../utilities/constants";
// import axios from "axios";

export async function registerApi(values) {
  try {
    const url = `${API_URL}/auth/local/register`;

    const params = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }

  //   // Request API.
  //   axios
  //     .post(url, {
  //       username: values.username,
  //       email: values.email``,
  //       password: values.password,
  //     })
  //     .then((response) => {
  //       // Handle success.
  //       console.log("Well done!");
  //       console.log("User profile", response.data.user);
  //       console.log("User token", response.data.jwt);
  //     })
  //     .catch((error) => {
  //       // Handle error.
  //       console.log("An error occurred:", error.response);
  //     });
}
