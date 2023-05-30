import API from './Webapi.services';
import { BASE_URL } from './Urls';

export async function getUsuario(id){
    try{

        const req = await API.get(`${BASE_URL}/users/${id}`)
        return req.data

    }catch(error){
        console.error("Usuário não encontrado", error)

    }
}

/*export const getUsuario = async () => {
	try{
		return await API.get(`${BASE_URL}/users`).then(
response => {
return response.data;
},
error =>{
console.log(error);
return null;
}
);
}catch(error){
console.log(error);
return null;
}
}*/

export const insertUsuarios = async (param) => {
    try{
      return await API.post(`${BASE_URL}/users`, param).then( 
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

  export const updateUsuarios = async (param) => {
    try{
      return await API.put(`${BASE_URL}/users/${param.id}`, param).then( 
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

