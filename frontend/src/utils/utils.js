import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
const fetchData = async (url) => {
  return await axios
    .get(`${baseUrl}/${url}`)
    .then((data) => data.data)
    .catch((error) => error.message);
};
const postData = async (url, body) => {
  return await axios
    .post(`${baseUrl}/${url}`, body)
    .then((data) => data.data)
    .catch((error) => error.message);
};

export { fetchData, postData };
