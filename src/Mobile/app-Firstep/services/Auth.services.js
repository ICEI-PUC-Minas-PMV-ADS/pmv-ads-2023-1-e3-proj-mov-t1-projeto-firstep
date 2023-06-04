import API from './Webapi.services';
import { BASE_URL } from './Urls';

export const login = async (param) => {

    try {
        return await API.post(`${BASE_URL}/auth/login`, param).then(

            response => {
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );

    } catch (error) {

        return null;
    }
}