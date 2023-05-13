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

export const insertProjetos = async (param) => {
    try{
      return await API.post(`${BASE_URL}/projetos`, param).then( 
        response => {
          return response.data;
        },
        error =>{
          console.log(error);
          return  null;
        }
      );
    }catch(error){
      console.log(error);
      return null;
    }
  }

  export const updateProjetos = async (param) => {
    try{
      return await API.put(`${BASE_URL}/projetos/${param.id}`, param).then( 
        response => {
          return response.data;
        },
        error =>{
          console.log(error);
          return  null;
        }
      );
    }catch(error){
      console.log(error);
      return null;
    }
  }

  export const deleteProjetos = async (id) => {
    try{
      return await API.delete(`${BASE_URL}/projetos/${id}`, param).then( 
        response => {
          return response.data;
        },
        error =>{
          console.log(error);
          return  null;
        }
      );
    }catch(error){
      console.log(error);
      return null;
    }
  }