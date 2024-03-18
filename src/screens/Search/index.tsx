import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import { SafeAreaView, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { SingleConsult } from "../../hooks/requestDb";
import Announcement from "../../components/Announcement";
import { AnnouncementDTO } from "../../DTOs/announcement.type";

export default function Search() {
  const [search, setSearch] = useState("");
  const [result, setResult]: [result: AnnouncementDTO[], setResult: any] =
    useState([]);
  useEffect(() => {
    SingleConsult({ box_blindex: 1, num_banheiros: 1 }).then((result) => {
      console.log(result);
      setResult(result);
    });
  }, [search]);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerSearch}>
        <Entypo size={16} style={style.glass} name="magnifying-glass" />
        <TextInput
          onChangeText={(e) => setSearch(e)}
          placeholder="Pesquise por Bairro ou cidade"
          style={style.searchBar}
        ></TextInput>
      </View>
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
