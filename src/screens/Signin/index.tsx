import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header, LabelCredential, TextTitle } from "../Login/style";
import { Description, Embedded, GlobalVariables } from "../../styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import {
  MediaTypeOptions,
  launchCameraAsync,
  launchImageLibraryAsync,
} from "expo-image-picker";
import * as Style from "./../Login/style";
import { useState } from "react";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Entypo from "react-native-vector-icons/Entypo";
import { SignIn, VerifyCredentials } from "../../hooks/requestDb";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import LoggedReducer, { setLogged } from "../../Reducers/LoggedReducer";
import { useDispatch } from "react-redux";

export default function Signin() {
  const navigator = useNavigation<StackNavigationProp<any>>();
  const [click, setClick] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    cpf: "",
    date: "",
    password: "",
    phone: "",
  });
  const [picture, setPicture]: [any, any] = useState();
  const [toSend, setToSend]: [any, any] = useState();
  const openImagePicker = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (result.assets) {
      setPicture(result.assets[0].uri);
      setToSend(result.assets[0].base64);
      setClick(false);
    }
  };
  const handlePicture = async () => {
    setClick(true);
  };

  const openCamera = async () => {
    let result = await launchCameraAsync({
      allowsEditing: true,
      mediaTypes: MediaTypeOptions.Images,
      aspect: [4, 3],
      base64: true,
      quality: 1,
    });
    if (result.assets) {
      setPicture(result.assets[0].uri);
      setToSend(result.assets[0]);
      setClick(false);
    }
  };

  return (
    <>
      {click && (
        <Pressable
          onPress={() => {
            setClick(false);
          }}
          style={{
            flex: 1,
            zIndex: 3,
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "#00000030",
          }}
        >
          <View
            style={{
              position: "absolute",
              display: "flex",
              borderTopEndRadius: 30,
              borderTopLeftRadius: 30,
              padding: 20,
              justifyContent: "space-around",
              flexDirection: "row",
              bottom: 0,
              width: 300,
              alignSelf: "center",
              zIndex: 0,
              height: 100,
              opacity: 1,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={openCamera}
            >
              <Entypo
                name="camera"
                color={GlobalVariables.color.blue}
                size={40}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={openImagePicker}
            >
              <Entypo
                name="image"
                color={GlobalVariables.color.blue}
                size={40}
              />
            </TouchableOpacity>
          </View>
        </Pressable>
      )}
      <ScrollView style={style.container}>
        <Header style={style.header}>
          <Ionicons
            onPress={() => navigator.goBack()}
            style={style.arrow}
            name="chevron-back"
          ></Ionicons>
          <TextTitle>Crie sua conta</TextTitle>
        </Header>
        <Description style={style.description}>
          Crie sua conta para poder ter acesso as demais funcionalidades,
          adicionar imóveis aos favoritos, contato com os corretores e mais.
        </Description>
        <TouchableOpacity
          onPress={handlePicture}
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
              zIndex: 0,
              borderRadius: 120,
            }}
            source={
              picture ? picture : require("./../../../assets/profile_image.png")
            }
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
          <Style.TextField
            onChangeText={(e) => {
              setCredentials({ ...credentials, name: e });
            }}
          ></Style.TextField>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
          <LabelCredential>CPF</LabelCredential>
          <Style.TextField
            onChangeText={(e) => {
              setCredentials({ ...credentials, cpf: e });
            }}
          ></Style.TextField>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
          <LabelCredential>Email</LabelCredential>
          <Style.TextField
            keyboardType="email-address"
            onChangeText={(e) => {
              setCredentials({ ...credentials, email: e });
            }}
          ></Style.TextField>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
          <LabelCredential>Phone</LabelCredential>
          <Style.TextField
            keyboardType="phone-pad"
            dataDetectorTypes={"phoneNumber"}
            onChangeText={(e) => {
              setCredentials({ ...credentials, phone: e });
            }}
          ></Style.TextField>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
          <LabelCredential>Data de nascimento</LabelCredential>
          <Style.TextField
            onChangeText={(e) => {
              setCredentials({ ...credentials, date: e });
            }}
            textContentType="birthdateDay"
            keyboardType="email-address"
          ></Style.TextField>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
          <LabelCredential>Password</LabelCredential>
          <Style.TextField
            onChangeText={(e) => {
              setCredentials({ ...credentials, password: e });
            }}
            secureTextEntry
            textContentType="birthdate"
          ></Style.TextField>
        </View>
        <TouchableOpacity
          onPress={async () => {
            const result = await SignIn({
              ...credentials,
              picture: toSend,
            });
            if (result) {
              const res = await VerifyCredentials({
                email: credentials.email,
                password: credentials.password,
              });
              if (res) {
                AsyncStorage.setItem("token", JSON.stringify(res));
                const dispatch = useDispatch();
                dispatch(setLogged(true));
                navigator.navigate("homeComponent");
              }
            }
          }}
        >
          <Text>NASDOANDS</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  description: {
    marginTop: -10,
    marginLeft: 0,
    width: "100%",
    textAlign: "center",
  },
  header: {
    marginBottom: 0,
  },
  arrow: {
    position: "absolute",
    top: 0,
    left: 0,
    lineHeight: 80,
    fontSize: 30,
  },
});
