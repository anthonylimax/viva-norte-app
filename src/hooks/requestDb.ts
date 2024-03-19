import AsyncStorage from "@react-native-async-storage/async-storage";
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
export async function SignIn(credentials: {
  name: string;
  cpf: string;
  phone: string;
  email: string;
  password: string;
  date: string;
  picture: any;
}) {
  try {
    const form = new FormData();
    const credentialsData = {
      name: credentials.name,
      password: credentials.password,
      email: credentials.email,
      cpf: credentials.cpf,
      phone: credentials.phone,
      date: credentials.date,
    };
    console.log(credentials);
    form.append("content", JSON.stringify(credentialsData));
    if (credentials.picture) {
      form.append("file", credentials.picture);
    }
    const request = apiURL.post("/createNewUser", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = await request;
    const data = result.data;
    if ((await data?.status) == "completed") {
      const json = await VerifyCredentials({
        email: credentials.email,
        password: credentials.password,
      });
      setTimeout(() => {
        AsyncStorage.setItem("token", JSON.parse(json));
      });
    } else {
      console.log("erro aqui");
      return false;
    }
  } catch (e) {
    console.log("erro", e);
    return false;
  }
}
