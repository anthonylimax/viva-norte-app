import {
  Text,
  Image,
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as Component from "./style";
import HeaderAnnouncement from "../../components/HeaderAnnouncement";
import { useLayoutEffect, useState } from "react";
import { SingleAnnouncement } from "../../hooks/requestDb";
import MacroDetails from "../../components/MacroDetails";
import * as GlobalElements from "./../../styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import WhatItOffers from "../../components/WhatItOffers";
import { ScrollView } from "react-native";
import Maps from "../../components/Map";
import Whatsapp from "../../components/Whatsapp";

export default function AnnouncementScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [pictures, setPictures]: [data: any[], setData: any] = useState([]);
  const [mainImage, setMainImage]: [any | null, any] = useState();
  const [announcement, setAnnouncement]: [any, any] = useState({});
  const [details, setDetails] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useLayoutEffect(() => {
    SingleAnnouncement(route.params.id).then(({ data }) => {
      setAnnouncement(data.announcement);
      setDetails(data.details);
      setPictures(data.pictures);
      setMainImage(data.pictures[0]);
    });
  }, []);
  if (mainImage) {
    return (
      <ScrollView style={styles.view}>
        <HeaderAnnouncement
          announcementName={"Paraiso Tropical"}
          id={"4f651f4a-0268-4782-87bb-0db50ca08d02"}
        ></HeaderAnnouncement>

        <Image
          source={{ uri: mainImage.url }}
          style={{
            width: "100%",
            height: 400,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />

        <View
          style={{
            marginTop: -80,
            maxHeight: 80,
            width: "80%",
            padding: 5,
            alignSelf: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "white",
          }}
        >
          <FlatList
            horizontal
            data={pictures}
            renderItem={({ item, index }): any => {
              if (index < 4 || showAll) {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setMainImage(item)}
                  >
                    <View
                      style={{
                        borderRadius: 10,
                        height: 50,
                        marginLeft: index == 4 ? 5 : 0,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        source={{
                          uri: item.url,
                        }}
                        style={{
                          height: 60,
                          objectFit: "cover",
                          width: 60,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                );
              } else if (index == 4 && !showAll) {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      setShowAll(true);
                    }}
                  >
                    <View
                      style={{
                        position: "relative",
                        borderRadius: 10,
                        height: 50,
                        backgroundColor: "#00000070",
                        marginLeft: index == 4 ? 5 : 0,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        source={{
                          uri: item.url,
                        }}
                        style={{
                          opacity: 0.4,
                          height: 60,
                          objectFit: "cover",
                          width: 60,
                        }}
                      />
                      <Text
                        style={{
                          position: "absolute",
                          top: 25,
                          color: "#FFF",
                          lineHeight: 10,
                          left: 20,
                          zIndex: 3,
                        }}
                      >
                        {pictures.length - index}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }
            }}
          ></FlatList>
        </View>
        <MacroDetails announcement={announcement}></MacroDetails>
        <GlobalElements.Description>
          Apartamento amplo e moderno com projeto de paisagismo, arquitetônico e
          alto padrão de acabamentos
        </GlobalElements.Description>
        <View style={styles.MainContainerIcons}>
          <View style={styles.containerIcons}>
            <Ionicons
              size={20}
              color={GlobalElements.GlobalVariables.color.blue}
              name="resize"
            />
            <GlobalElements.Description style={{ fontSize: 16, margin: 0 }}>
              {announcement.area} m²
            </GlobalElements.Description>
          </View>
          <View style={styles.containerIcons}>
            <Ionicons
              size={20}
              color={GlobalElements.GlobalVariables.color.blue}
              name="bed-outline"
            />
            <GlobalElements.Description style={{ fontSize: 16, margin: 0 }}>
              {announcement.num_rooms} quarto
              {announcement.num_garage_space > 1 ? "s" : ""}
            </GlobalElements.Description>
          </View>
          <View style={styles.containerIcons}>
            <MaterialIcons
              size={20}
              color={GlobalElements.GlobalVariables.color.blue}
              name="shower"
            />
            <GlobalElements.Description style={{ fontSize: 16, margin: 0 }}>
              {announcement.num_banheiros} banheiro
              {announcement.num_garage_space > 1 ? "s" : ""}
            </GlobalElements.Description>
          </View>
          <View style={styles.containerIcons}>
            <MaterialCommunityIcons
              color={GlobalElements.GlobalVariables.color.blue}
              size={20}
              name="garage"
            />
            <GlobalElements.Description style={{ fontSize: 16, margin: 0 }}>
              {announcement.num_garage_space} garage
              {announcement.num_garage_space > 1 ? "ns" : "m"}
            </GlobalElements.Description>
          </View>
        </View>
        <Component.Title style={{ marginTop: 20, marginLeft: 20 }}>
          O que esse lugar oferece
        </Component.Title>
        <WhatItOffers data={details}></WhatItOffers>
        <View
          style={{
            borderColor: "#E7E6EB",
            width: "90%",
            alignSelf: "center",
            marginVertical: 20,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        ></View>
        <Component.Title style={{ marginTop: 20, marginLeft: 20 }}>
          Localize no mapa
        </Component.Title>
        <GlobalElements.Description>
          Navegue pela região o qual o imóvel se encontra e descubra o que está
          aos arredores.
        </GlobalElements.Description>
        <Maps address={announcement.adress}></Maps>
        <Whatsapp phone={announcement.agent_number}></Whatsapp>
      </ScrollView>
    );
  } else {
    return <></>;
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "white",
  },
  MainContainerIcons: {
    alignSelf: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  containerIcons: {
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
});
