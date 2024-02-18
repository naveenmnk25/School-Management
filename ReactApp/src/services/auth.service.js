import axios from "axios";

const API_URL = "https://localhost:44335/api/Auth/";

const register = (username, password, role) => {
  return axios.post(API_URL + "Register", {
    username,
    password,
    role
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "Login", {
      username,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      return response.data.user;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
