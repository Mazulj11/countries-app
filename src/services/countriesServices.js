import axios from "axios";

let config = {
   baseURL: import.meta.env.VITE_API_URL,
   headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
   },
   withCredentials: true,
};

const getCountries = async () => {
   try {
      await axios.get("/all", config);
   } catch (error) {
      console.log(error);
   }
};

export default {
   getCountries,
};
