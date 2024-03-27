import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image as Img,
  Pressable,
} from "react-native";
import * as Style from "./style";
import { Description, GlobalVariables, Header, TextField } from "../../styles";
import { LabelCredential, TextTitle } from "../Login/style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { Component, useEffect, useState } from "react";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { setLogged } from "../../Reducers/LoggedReducer";
import { useDispatch, useSelector } from "react-redux";
import { RemoveAllFavorites } from "../../Reducers/FavoriteReducer";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
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
  const navigator = useNavigation<StackNavigationProp<any>>();
  const [modal, setModal] = useState(false);
  const DEFAULT = {
    email: "",
    id: "",
    name: "",
    nasc_data: "",
    phone: "",
    password: "",
    picture: require("./../../../assets/profile_image.png"),
  };
  const [data, setData]: [data: ProfileData, setData: any] = useState({
    email: "",
    id: "",
    name: "",
    nasc_data: "",
    phone: "",
    password: "",
    picture: require("./../../../assets/profile_image.png"),
  });
  const profile: any = useSelector((state: any) => state.logged.logged);
  const dispatch = useDispatch();
  useEffect(() => {
    async function GetStorage() {
      const data = await AsyncStorage.getItem("token");
      const json = JSON.parse(data)[0] || DEFAULT;
      setData(json);
      if (data && !profile) {
        dispatch(setLogged(true));
      }
    }
    GetStorage();
  }, [profile]);

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
  return profile ? (
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
      <Style.LogoutButton
        onPress={async () => {
          await AsyncStorage.removeItem("token");
          dispatch(setLogged(false));
          setData({
            email: "",
            id: "",
            name: "",
            nasc_data: "00/00/0000",
            phone: "",
            password: "",
            picture: require("./../../../assets/profile_image.png"),
          });
          dispatch(RemoveAllFavorites({}));
        }}
      >
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            color: "white",
            fontWeight: "700",
          }}
        >
          LOGOUT
        </Text>
      </Style.LogoutButton>
    </SafeAreaView>
  ) : (
    <SafeAreaView
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Img
        style={{
          width: 160,
          marginTop: 20,
          objectFit: "contain",
          alignSelf: "center",
        }}
        source={require("./../../../assets/logo.png")}
      ></Img>
      <Text
        style={{
          alignSelf: "center",
          width: "90%",
          textAlign: "center",
          color: GlobalVariables.color.ForSubTitle,
          fontSize: 16,
        }}
      >
        Crie uma conta para desfrutar de todas as funcionalidades do aplicativo.
      </Text>
      <Pressable
        style={{
          marginTop: 20,
          backgroundColor: GlobalVariables.color.blue,
          height: 40,
          width: 160,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: StyleSheet.hairlineWidth + 1,
          borderColor: GlobalVariables.color.blue,
        }}
        onPress={() => {
          navigator.navigate("login");
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Entrar
        </Text>
      </Pressable>
      <Pressable
        style={{
          marginTop: 10,
        }}
        onPress={() => {
          navigator.navigate("signin");
        }}
      >
        <Text
          style={{
            color: GlobalVariables.color.blue,
            fontSize: 14,
          }}
        >
          Cadastrar-se
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
