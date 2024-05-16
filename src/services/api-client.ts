import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "0fccbf2bf86e4f1bbe0e5e3ba412d52e",
  },
});
