import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { SingleConsult } from "../../hooks/requestDb";
import Announcement from "../../components/Announcement";
import { AnnouncementDTO } from "../../DTOs/announcement.type";
import { GlobalVariables } from "../../styles";

export default function Search() {
  const [search, setSearch] = useState<{ [key: string]: any }>({});

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

  useEffect(() => {
    SingleConsult(search).then((result) => {
      console.log(result);
      setResult(result);
    });
  }, [search]);
  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerSearch}>
        <Entypo size={16} style={style.glass} name="magnifying-glass" />
        <TextInput
          onChangeText={(e) => {}}
          placeholder="Pesquise por Bairro ou cidade"
          style={style.searchBar}
        ></TextInput>
      </View>
      <FlatList
        style={{
          marginTop: 10,
        }}
        data={Object.keys(featuresArray)}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <Pressable
              onPress={() => {
                const id = Object.keys(search).find(
                  (x) => x === searchId[index]
                );

                console.log("id: " + id);
                if (Object.keys(search).includes(searchId[index])) {
                  console.log("removing");
                  let search_ = { ...search };
                  delete search_[searchId[index]];
                  console.log(search_);
                  setSearch(search_);
                } else {
                  console.log("adding");
                  const object = { ...search };
                  Object.defineProperty(object, searchId[index], {
                    value: 1,
                    writable: true,
                    enumerable: true,
                    configurable: true,
                  });
                  console.log(search);
                  setSearch(object);
                }
              }}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: Object.keys(search).includes(searchId[index])
                  ? GlobalVariables.color.blue
                  : "#FFF",
                borderWidth: StyleSheet.hairlineWidth,
                marginLeft: 10,
                borderRadius: 50,
                borderColor: GlobalVariables.color.medim_black,
              }}
            >
              <Text
                style={{
                  color: Object.keys(search).includes(searchId[index])
                    ? GlobalVariables.color.white
                    : "#000",
                }}
              >
                {item}
              </Text>
            </Pressable>
          );
        }}
      />
      <View
        style={{
          marginTop: 30,
          display: "flex",
          alignItems: "center",
        }}
      >
        <FlatList
          data={result}
          renderItem={({ item }) => {
            return (
              <Announcement
                announcement={item.announcement}
                details={item.details}
                pictures={item.pictures}
              ></Announcement>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
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
