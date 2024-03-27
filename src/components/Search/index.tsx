import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  Text,
  StyleSheet,
  TextInput,
  Modal,
  ScrollView,
} from "react-native";
import { SafeAreaView, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { SingleConsult } from "../../hooks/requestDb";
import Announcement from "../../components/Announcement";
import { AnnouncementDTO } from "../../DTOs/announcement.type";
import { GlobalVariables } from "../../styles";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Search({ setModal, data, setData }) {
  const [result, setResult]: [result: AnnouncementDTO[], setResult: any] =
    useState([]);

  const searchId = [
    "box_blindex",
    "closet",
    "american_kitchen",
    "intercom",
    "furnished",
    "gourmet_balcony",
    "balcony",
    "games_room",
    "pcd_access",
    "bicycle_rack",
    "coworker",
    "elevator",
    "laundry",
    "reception",
    "turkish_bath",
    "in_plan",
    "in_built",
    "done",
    "accept_animals",
    "service_room",
    "closet_in_bedroom",
    "cabinet_in_bathroom",
    "cabinet_in_kitchen",
    "gym",
    "grill",
    "gourmet_space",
    "green_space",
    "garden",
    "pool",
    "playground",
    "multisports_court",
    "party_room",
    "big_windows",
    "tv",
  ];
  const featuresArray = {
    "box blindex": 1,
    closet: 1,
    "cozinha americana": 1,
    interfone: 1,
    mobiliado: 1,
    "varanda gourmet": 1,
    varanda: 1,
    "sala de jogos": 1,
    "acesso para pessoas com deficiência": 1,
    "suporte para bicicletas": 1,
    "colega de trabalho": 1,
    elevador: 1,
    lavanderia: 1,
    recepção: 1,
    sauna: 1,
    planejado: 1,
    construído: 1,
    feito: 1,
    "aceita animais": 1,
    "quarto de serviço": 1,
    "closet no quarto": 1,
    "armário no banheiro": 1,
    "armário na cozinha": 1,
    academia: 1,
    churrasqueira: 1,
    "espaço gourmet": 1,
    "espaço verde": 1,
    jardim: 1,
    piscina: 1,
    playground: 1,
    "quadra esportiva": 1,
    "salão de festas": 1,
    "janelas amplas": 1,
    tv: 1,
  };

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          height: 60,
          margin: 20,
        }}
      >
        <Pressable onPress={() => setModal(false)}>
          <FontAwesome6
            style={{
              color: "#FFF",
              padding: 15,
              borderRadius: 50,
              backgroundColor: GlobalVariables.color.blue,
            }}
            size={20}
            name="arrow-left"
          ></FontAwesome6>
        </Pressable>
      </View>
      <View style={style.container}>
        {Object.keys(featuresArray).map((item, index) => {
          return (
            <Pressable
              key={index}
              style={{
                backgroundColor: Object.keys(data.filters).includes(
                  searchId[index]
                )
                  ? GlobalVariables.color.blue
                  : "#FFF",
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 10,
                borderColor: !Object.keys(data.filters).includes(
                  searchId[index]
                )
                  ? GlobalVariables.color.black
                  : "#FFF",
                padding: 10,
              }}
              onPress={() => {
                const id = Object.keys(data.filters).find(
                  (x) => x === searchId[index]
                );
                if (Object.keys(data.filters).includes(searchId[index])) {
                  console.log("removing");
                  let search_ = { ...data.filters };
                  delete search_[searchId[index]];
                  setData({ ...data, filters: search_ });
                } else {
                  console.log("adding");
                  const object = { ...data.filters };
                  Object.defineProperty(object, searchId[index], {
                    value: 1,
                    writable: true,
                    enumerable: true,
                    configurable: true,
                  });
                  console.log(object);
                  setData({ ...data, filters: object });
                }
              }}
            >
              <Text
                style={{
                  color: !Object.keys(data.filters).includes(searchId[index])
                    ? GlobalVariables.color.black
                    : "#FFF",
                }}
              >
                {item}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    flexWrap: "wrap",
  },
  glass: {
    position: "absolute",
    left: 20,
    lineHeight: 40,
  },
  containerSearch: {
    width: "90%",
    marginTop: 20,
    alignSelf: "center",
  },
  searchBar: {
    padding: 5,
    borderRadius: 20,
    width: "100%",
    alignSelf: "center",
    paddingLeft: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
  },
});
