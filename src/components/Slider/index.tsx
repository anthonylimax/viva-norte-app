import { useEffect, useLayoutEffect, useState } from "react";
import * as Components from "./../../styles";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationProp } from "../../@types/global";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { setLogged } from "../../Reducers/LoggedReducer";
export default function Slider({ navigation }: NavigationProp) {
  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      <Image
        style={{
          objectFit: "contain",
          width: 100,
        }}
        source={require("./../../../assets/logo.png")}
      />
    </View>
  );
}
