import API from './Webapi.services';
import { BASE_URL } from './Urls';

export async function getProjetos(id){
    try{

        const req = await API.get(`${BASE_URL}/projetos/${id}`)
        return req.data

    }catch(error){
        console.error("Erro na requisição de projetos", error)

    }
}

