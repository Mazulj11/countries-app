import apiConfig from "@/configurations/apiConfig.js";

const getAllCountries = () => {
   return apiConfig.get("/all");
};

const getCountriesRegion = (region) => {
   return apiConfig.get("/region/" + region);
};

const getCountriesName = (name) => {
   return apiConfig.get("/name/" + name);
};

const getCountriesCode = (code) => {
   return apiConfig.get("/alpha/" + code);
};

export default {
   getAllCountries,
   getCountriesRegion,
   getCountriesName,
   getCountriesCode,
};
