import axios from "axios";

const url = process.env.REACT_APP_URL;

const fetchData = async (params) => {
    return axios.get(`${url}/${params}`)
        .then((res) => res.data.data)
        .catch(error => console.log(error.message))
}

export { fetchData }