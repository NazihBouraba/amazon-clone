import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:5001/clone-62836/us-central1/api" // the api (cloud function ) URL
})


export default instance;