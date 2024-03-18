import axios from "axios";

const apiURL = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export async function GetAll() {
  const result = await apiURL.get("/getAll");
  return result;
}

export async function VerifyCredentials(credentials: {
  email: string;
  password: string;
}) {
  const result = await apiURL.post("/loginVerification", credentials);
  return result.data;
}

export async function SingleConsult(params: any) {
  const result = await apiURL.post("/searchAnnouncements", params);
  return result.data;
}

export async function SingleAnnouncement(id: string) {
  const result = await apiURL.post("/announcement/id", { id });
  return result;
}
