import { Linking } from "react-native";
import * as Component from "./style";
import { View, Text } from "react-native";
import { Description } from "../../styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Whatsapp({ phone }: { phone: string }) {
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Component.Text>Ficou interessado? Envie uma mensagem!</Component.Text>
      <Description style={{ marginLeft: 0 }}>
        Envie uma mensagem para o corretor para maiores informações sobre o
        imóvel e sua compra.
      </Description>
      <Component.ButtonWhatsappCTA
        onPress={() =>
          Linking.openURL(`http://api.whatsapp.com/send?phone=${phone}`)
        }
      >
        <FontAwesome name="whatsapp" size={30} color={"green"}></FontAwesome>
        <Text>Enviar mensagem para o corretor</Text>
      </Component.ButtonWhatsappCTA>
    </View>
  );
}
