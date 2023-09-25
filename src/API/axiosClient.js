import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "http://54.158.185.161:8090/";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default axiosClient;
