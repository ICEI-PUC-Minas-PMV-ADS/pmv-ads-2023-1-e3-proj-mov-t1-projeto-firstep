import API from './Webapi.services';
import { BASE_URL } from './Urls';
import axios from "axios";

export const login = async (param) => {
    const user = {
        enail: param.email.toLowerCase(),
        password: param.password
    }

    const res = await axios.post(`https://firstep-json.onrender.com/auth/login`, user)

    console.log(res.data)
    return res.data;
}