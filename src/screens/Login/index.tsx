import { Button, SafeAreaView, StyleSheet, View } from "react-native";
import * as StyledComponents from "./style";
import { TextField } from "../../styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { VerifyCredentials } from "../../hooks/requestDb";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Login() {
  const navigate = useNavigation();
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
      <StyledComponents.ButtonSubmit
        onPress={() => {
          const fetching = async () => {
            const data = await VerifyCredentials(credentials);
            console.log(data);
            if (data !== null) {
              AsyncStorage.setItem("token", JSON.stringify(data));
              navigate.goBack();
            }
          };
          fetching();
        }}
      >
        <StyledComponents.LabelCredential>
          Entrar
        </StyledComponents.LabelCredential>
      </StyledComponents.ButtonSubmit>
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
    lineHeight: 60,
    fontSize: 30,
  },
});
