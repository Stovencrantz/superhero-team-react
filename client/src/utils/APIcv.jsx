import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";

const apicv_key = process.env.REACT_APP_APIcv_KEY;

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APICVKEY);
  }
};