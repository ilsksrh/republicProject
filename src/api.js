import axios from 'axios';
const authHeaders=()=>{
    const user=JSON.parse(localStorage.getItem("user"));
    if(user && user.accessToken){
        return {Authorization:"Bearer "+user.accessToken}
    }else{
        return {}
    }
}
export async function getOneUser(stuId){
    const response=await axios.get('http://localhost:8080/home/user/'+stuId,{headers:authHeaders()});
    return response.data
   
}
export async function addPost(spe){
    console.log(spe);
    const response = await axios.post('http://localhost:8080/home/post',spe,{headers:authHeaders()});
    return response.data;
}
export async function addFile(spe){
    console.log(spe);
    const response = await axios.post('http://localhost:8080/upload',spe,{headers:authHeaders()});
    return response.data;
}
export async function getAllPost(){
    const response=await axios.get('http://localhost:8080/home/post',{headers:authHeaders()});
    return response.data
}
export async function getOnePost(stuId){
    
    const response=await axios.get('http://localhost:8080/home/post/'+stuId,{headers:authHeaders()});
    return response.data
    
}
export async function addUser(spe){
    try{
    const response = await axios.post('http://localhost:8080/auth/register',spe);
    return {success:true,data:response.data}
    }catch(error){
        return {success:false,data:error.response.data}
    }
}
export async function login(spe){
    try{
    const response = await axios.post('http://localhost:8080/auth/login',spe);
    localStorage.setItem("user",JSON.stringify(response.data))
    return {success:true,data:"You have registered"};
    }catch(error){
        return {success:false,data:error.response.data}
    }
}