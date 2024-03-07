import axios from "axios";

const apiURL = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL
});


export async function GetAll(){
    const result = await apiURL.get("/getAll");
    return result;
}