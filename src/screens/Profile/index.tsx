import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import * as Style from "./style";
import { Description, GlobalVariables, Header, TextField } from "../../styles";
import { LabelCredential, TextTitle } from "../Login/style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
type ProfileData = {
  email: string;
  id: string;
  name: string;
  nasc_data: string;
  phone: string;
  password: string;
  picture: string;
};

export default function Profile() {
  const [modal, setModal] = useState(false);
  const [data, setData]: [data: ProfileData, setData: any] = useState({
    email: "",
    id: "",
    name: "",
    nasc_data: "",
    phone: "",
    password: "",
    picture: "",
  });
  useEffect(() => {
    async function GetStorage() {
      const data = await AsyncStorage.getItem("token");
      if (data !== null) {
        const json = JSON.parse(data)[0];
        setData(json);
      }
    }
    GetStorage();
  }, []);

  function convertToYear(data: string) {
    let text = "";
    for (let i = 0; i < 10; i++) {
      if (i == 4 || i == 7) {
        text += "/";
      } else {
        text += data[i];
      }
    }
    return text;
  }
  return (
    <SafeAreaView>
      <Header>
        <TextTitle style={{ fontWeight: "400" }}>Minha conta</TextTitle>
      </Header>
      <Description
        style={{
          textAlign: "center",
          marginLeft: 0,
          marginTop: 0,
          width: "100%",
        }}
      >
        Aqui você encontra suas informações pessoais da conta
      </Description>
      <TouchableOpacity
        onPress={() => setModal(true)}
        style={{
          width: 120,
          height: 120,
          alignSelf: "center",
          marginBottom: 40,
        }}
      >
        <Image
          style={{
            position: "relative",
            width: 120,
            height: 120,
            alignSelf: "center",
            margin: 30,
            borderRadius: 120,
          }}
          source={data.picture}
        />
        <View
          style={{
            position: "absolute",
            bottom: -30,
            right: 0,
            borderRadius: 50,
            borderWidth: StyleSheet.hairlineWidth + 2,
            borderColor: "white",
            backgroundColor: GlobalVariables.color.blue,
            padding: 7,
          }}
        >
          <FontAwesome6 name="pen" size={10} color={"white"}></FontAwesome6>
        </View>
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
        <LabelCredential>Nome</LabelCredential>
        <Style.TextComponent disabled>{data.name}</Style.TextComponent>
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
        <LabelCredential>Email</LabelCredential>
        <Style.TextComponent disabled>{data.email}</Style.TextComponent>
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
        <LabelCredential>Telefone</LabelCredential>
        <Style.TextComponent disabled>{data.phone}</Style.TextComponent>
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
        <LabelCredential>Data de Nascimento</LabelCredential>
        <Style.TextComponent>
          {convertToYear(data.nasc_data)}
        </Style.TextComponent>
      </View>
    </SafeAreaView>
  );
}
