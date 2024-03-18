import { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { SafeAreaView, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

export default function Search() {
  const [search, setSearch] = useState("");

  useEffect(() => {}, [search]);

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
