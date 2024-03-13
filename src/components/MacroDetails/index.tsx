import { View } from "react-native";
import * as Components from "./styles";
import { StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export default function MacroDetails({ announcement }: any) {
  const amount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(announcement.price);

  return (
    <View style={styles.containerView}>
      <View style={styles.subContainer}>
        <Components.Title>{announcement.adress}</Components.Title>
      </View>
      <View style={styles.subContainer}>
        <Components.Price>{amount}</Components.Price>
        <Components.Tariff>
          Cond R${announcement.cond} | IPTU R${announcement.IPTU}
        </Components.Tariff>
        <Components.Tariff>
          <MaterialIcons name="fire-extinguisher" /> R$
          {announcement.tariffBomber}
        </Components.Tariff>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    marginTop: 30,
  },
  subContainer: {
    width: "50%",
    paddingLeft: 20,
    display: "flex",
  },
});
