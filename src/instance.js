import axios from "axios";

const fetchData = axios.create({
    baseURL: process.env.REACT_APP_API_KEY,
    timeout: 1000,
    headers: {
        Accept: "*/*",
    },
});

export default fetchData;
