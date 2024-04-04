import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header, LabelCredential, TextTitle } from "../Login/style";
import { Description, GlobalVariables } from "../../styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import {
  MediaTypeOptions,
  launchCameraAsync,
  launchImageLibraryAsync,
} from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Style from "./../Login/style";
import { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { SignIn, VerifyCredentials } from "../../hooks/requestDb";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { setLogged } from "../../Reducers/LoggedReducer";
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

  const dispatch = useDispatch();
  const [picture, setPicture]: [any, any] = useState();
  const [toSend, setToSend]: [any, any] = useState();
  const [showCalendar, setShowCalendar] = useState(false);
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
          <Style.Text onPress={() => setShowCalendar(true)}>
            {credentials.date}
          </Style.Text>
        </View>
        {showCalendar && (
          <DateTimePicker
            mode={"date"}
            onChange={(event, selectedDate) => {
              console.log(event, selectedDate);
              setShowCalendar(false);
              setCredentials({
                ...credentials,
                date: `${
                  selectedDate.getDate() > 9
                    ? selectedDate.getDate()
                    : "0" + selectedDate.getDate()
                }/${
                  selectedDate.getMonth() > 9
                    ? selectedDate.getMonth()
                    : "0" + selectedDate.getMonth()
                }/${selectedDate.getFullYear()}`,
              });
            }}
            value={new Date()}
          ></DateTimePicker>
        )}
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
          style={style.button}
          onPress={async () => {
            const result = await SignIn({
              ...credentials,
            });
            console.log(result?.status);
            if (result?.status === "completed") {
              const res = await VerifyCredentials({
                email: credentials.email,
                password: credentials.password,
              });
              console.log(res);
              if (res) {
                AsyncStorage.setItem("token", JSON.stringify(res));
                dispatch(setLogged(true));
                navigator.navigate("homeComponent");
              }
            }
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
            Cadastrar-se
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
const style = StyleSheet.create({
  button: {
    height: 50,
    marginTop: 20,
    alignSelf: "center",
    display: "flex",
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: GlobalVariables.color.blue,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  description: {
    marginTop: -10,
    marginLeft: 0,
    marginBottom: 30,
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
