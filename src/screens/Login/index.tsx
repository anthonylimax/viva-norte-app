import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import * as StyledComponents from "./style";
import { TextField } from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { VerifyCredentials } from "../../hooks/requestDb";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalVariables } from "../../styles";
import Animated from "react-native-reanimated";
import { StackNavigationProp } from "@react-navigation/stack";
export default function Login() {
  const navigate = useNavigation<StackNavigationProp<any>>();
  const [error, setError] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView renderToHardwareTextureAndroid style={styles.container}>
      <StyledComponents.Header>
        <Ionicons
          onPress={() => navigate.goBack()}
          style={styles.arrow}
          name="chevron-back"
        ></Ionicons>
        <StyledComponents.TextTitle>Entrar</StyledComponents.TextTitle>
        <View
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: "#dddcdf",
            width: "90%",
            position: "absolute",
            bottom: 0,
          }}
        ></View>
      </StyledComponents.Header>
      <Image
        source={require("./../../../assets/logo.png")}
        style={{
          alignSelf: "center",
          marginTop: 30,
        }}
      ></Image>
      <StyledComponents.CredentialsField>
        <View>
          <StyledComponents.LabelCredential>
            Email
          </StyledComponents.LabelCredential>
          <TextField
            placeholder="Insira o seu mail"
            onChangeText={(e) => {
              setCredentials({
                ...credentials,
                email: e,
              });
              console.log(credentials);
            }}
            textContentType="emailAddress"
          ></TextField>
        </View>
        <View>
          <StyledComponents.LabelCredential>
            Senha
          </StyledComponents.LabelCredential>
          <TextField
            placeholder="Insira a sua senha"
            onChangeText={(e) => {
              setCredentials({
                ...credentials,
                password: e,
              });
              console.log(credentials);
            }}
            secureTextEntry
            textContentType="password"
          ></TextField>
        </View>
      </StyledComponents.CredentialsField>
      <Animated.Text
        style={{
          color: error ? "red" : "transparent",
          textAlign: "center",
          alignSelf: "center",
          padding: 10,
        }}
      >
        Email ou senha incorretos, por favor tente novamente!
      </Animated.Text>
      <StyledComponents.ButtonSubmit
        onPress={() => {
          const fetching = async () => {
            const data = await VerifyCredentials(credentials);
            console.log(data);
            if (data) {
              AsyncStorage.setItem("token", JSON.stringify(data));
              navigate.goBack();
            } else {
              setError(true);
            }
          };
          fetching();
        }}
      >
        <StyledComponents.LabelCredential
          style={{ color: "white", lineHeight: 25 }}
        >
          Entrar
        </StyledComponents.LabelCredential>
      </StyledComponents.ButtonSubmit>

      <TouchableOpacity
        onPress={() => {
          navigate.navigate("signin");
        }}
      >
        <Text
          style={{
            color: GlobalVariables.color.blue,
            textAlign: "center",
            alignSelf: "center",
            padding: 30,
          }}
        >
          Não tem uma conta ainda?
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  arrow: {
    position: "absolute",
    top: 0,
    left: 0,
    lineHeight: 80,
    fontSize: 30,
  },
});
