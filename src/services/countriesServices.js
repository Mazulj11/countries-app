import apiConfig from "@/configurations/apiConfig.js";

const getAllCountries = () => {
   return apiConfig.get("/all");
};

const getCountriesRegion = (region) => {
   return apiConfig.get("/region/" + region);
};

export default {
   getAllCountries,
   getCountriesRegion,
};
