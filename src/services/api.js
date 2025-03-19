import axios from 'axios';

const API_URL ="http://127.0.0.1:8000"

export const getUsers = async () => {
    try{
        const response = await axios.get('http://127.0.0.1:8000/api/users');
        console.log(response.data);
        
        return response.data;
    } catch (error){
        console.error("Error fetching users:", error); 
        return null;
    }
};