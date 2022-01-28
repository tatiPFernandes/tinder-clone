import axios from "axios";

const instance = axios.create({
  // localhost
  // baseURL: "http://localhost:8001",
  // host on heroku
  baseURL = "https://basic-tinder-clone.herokuapp.com/"
  
});

export default instance;