import axios from "axios";

const instance = axios.create({
     baseURL:  "http://localhost:4600/",
  // baseURL: " https://salloon2k22.herokuapp.com/",
});

export default instance;
