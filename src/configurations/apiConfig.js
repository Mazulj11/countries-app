import axios from "axios";

const apiURL = "https://restcountries.com/v3.1";

export default axios.create({
   baseURL: apiURL,
   headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
   },
});
