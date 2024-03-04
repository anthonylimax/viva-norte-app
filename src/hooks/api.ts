import axios from "axios";

const apiURL = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL
});

async function getAddress(lat: string, long: string) {
    try {
        console.log("here")
        const response = await apiURL.post("/getlocalization", { long, lat });
        return response.data;
    } catch (error) {
        console.error("Error fetching address:", error);
        throw error; 
    }
}

export { getAddress };