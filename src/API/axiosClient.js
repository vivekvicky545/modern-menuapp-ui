import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "http://localhost:8090/";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default axiosClient;
