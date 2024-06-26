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

export async function InsertFavorites(
  id_user: string,
  id_announcement: string
) {
  const result = await apiURL.post("/setFavorite", {
    id_user,
    id_announcement,
    type: "add",
  });
  console.log({
    id_user,
    id_announcement,
    type: "add",
  });
  return result;
}

export async function RemoveFavorite(id_user: string, id_announcement: string) {
  const result = await apiURL.post("/setFavorite", {
    id_user,
    id_announcement,
    type: "remove",
  });

  return result.data;
}

export async function GetFavorites(id: string) {
  try {
    const result = await apiURL.post("/getFavorites", { id });
    if (result !== undefined) {
      return result.data;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
  }
}

export async function SignIn(credentials: {
  name: string;
  cpf: string;
  phone: string;
  email: string;
  password: string;
  date: string;
}) {
  try {
    const replacer = credentials.date.split("/");
    const formattedData = `${replacer[2]}-${replacer[1]}-${replacer[0]}`;
    const credentialsData = {
      name: credentials.name,
      password: credentials.password,
      email: credentials.email,
      cpf: credentials.cpf,
      phone: credentials.phone,
      date: formattedData,
    };
    console.log(credentialsData);

    const response = await apiURL.post("/createnewuser", credentialsData);
    console.log(response.data);
    return response.data; // Ou outra manipulação de sucesso
  } catch (error) {
    console.error("Erro:", error);
    return false;
  }
}
