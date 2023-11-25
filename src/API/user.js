import API_URL from "../utilities/constants";

export function registerApi(values) {
  const url = `${API_URL}/api/auth/local/register`;

  // Request API.
  axios
    .post(url, {
      username: values.username,
      email: values.email``,
      password: values.password,
    })
    .then((response) => {
      // Handle success.
      console.log("Well done!");
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
    });
}
