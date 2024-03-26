import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Announcement from "../../components/Announcement";
import { AnnouncementDTO } from "../../DTOs/announcement.type";
import Animated, { SlideInRight } from "react-native-reanimated";
import * as Component from "../../styles";
import Slider from "../../components/Slider";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationProp } from "../../@types/global";
import { GetAll, SingleConsult } from "../../hooks/requestDb";
import { addAllAnnouncements } from "../../Reducers/FavoriteReducer";
import Entypo from "react-native-vector-icons/Entypo";
import { ScrollView } from "react-native-gesture-handler";

export default function Home({ navigation }: NavigationProp) {
  const data: AnnouncementDTO[] = useSelector(
    (state: any) => state.favorites.announcements
  );
  const [result, setResult]: [result: AnnouncementDTO[], setResult: any] =
    useState([]);

  const [search, setSearch] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(true);
  const refIndex = useRef(0);
  const staticSlides = [
    {
      text: "something here, text what you need to show.",
      image: require("./../../../assets/slide.png"),
    },
    {
      text: "something here, text what you need to show.",
      image: require("./../../../assets/slide.png"),
    },
    {
      text: "something here, text what you need to show.",
      image: require("./../../../assets/slide.png"),
    },
  ];
  useLayoutEffect(() => {
    GetAll()
      .then((x) => x.data)
      .then((result) => {
        dispatch(addAllAnnouncements(result));
      });
  }, []);

  useEffect(() => {
    SingleConsult(search).then((result) => {
      console.log(result);
      setResult(result);
    });
  }, [search]);
  return (
    <ScrollView style={style.view}>
      <Slider navigation={navigation}></Slider>
      <View style={style.containerSearch}>
        <Entypo size={16} style={style.glass} name="magnifying-glass" />
        <TextInput
          onFocus={() => {
            setOnFocus(true);
            console.log(onFocus);
          }}
          onBlur={() => {
            if (search.length == 0) {
              setOnFocus(false);
            }
          }}
          onChangeText={(e) => setSearch(e)}
          placeholder="Pesquise por Bairro ou cidade"
          style={style.searchBar}
        ></TextInput>
        <Pressable>
          <Image source={require("./../../../assets/filter.png")} />
        </Pressable>
      </View>
      {!onFocus && (
        <>
          <FlatList
            style={{ width: 324, alignSelf: "center" }}
            data={staticSlides}
            horizontal
            accessibilityLabel="slider"
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View>
                  <Image
                    source={item.image}
                    style={{
                      objectFit: "fill",
                      zIndex: -1,
                      backgroundColor: "black",
                      borderRadius: 20,
                      opacity: 0.8,
                    }}
                  />
                  <Text
                    style={{
                      width: 200,
                      textAlign: "center",
                      position: "absolute",
                      top: 70,
                      fontWeight: "700",
                      letterSpacing: 1,
                      color: Component.GlobalVariables.color.white,
                      right: 62,
                      lineHeight: 14,
                    }}
                  >
                    {item.text}
                  </Text>
                </View>
              );
            }}
          ></FlatList>
          <View
            style={{
              width: "78%",
              alignSelf: "center",
              marginTop: 20,
              marginBottom: -10,
            }}
          >
            <Component.TextAnnouncement
              style={{ color: Component.GlobalVariables.color.blue }}
            >
              Imóveis para você
            </Component.TextAnnouncement>
          </View>
          <View style={{ marginTop: 20, alignSelf: "center" }}>
            {data.map((item, key) => {
              return (
                <Animated.View key={key} entering={SlideInRight}>
                  <Announcement {...item}></Announcement>
                </Animated.View>
              );
            })}
          </View>
        </>
      )}
      {onFocus &&
        result.map((item, key) => {
          return (
            <View key={key} style={{ alignSelf: "center" }}>
              <Announcement
                announcement={item.announcement}
                details={item.details}
                pictures={item.pictures}
              ></Announcement>
            </View>
          );
        })}
    </ScrollView>
  );
  function ListHeaderComponent() {
    return (
      <Component.AddressView>
        <Component.AddressText style={{ fontSize: 20, marginRight: 40 }}>
          Imóveis para você
        </Component.AddressText>
        <TouchableOpacity
          onPress={() => {
            setLimit(false);
          }}
        >
          <Component.AddressText style={{ fontSize: 14 }}>
            ver mais
          </Component.AddressText>
        </TouchableOpacity>
      </Component.AddressView>
    );
  }
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 20,
  },
  flatlist: {},
  glass: {
    position: "absolute",
    left: 28,
    lineHeight: 40,
  },
  containerSearch: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
    flexDirection: "row",
    width: "90%",
    marginTop: -5,
    alignSelf: "center",
  },
  searchBar: {
    padding: 5,
    borderRadius: 20,
    width: "75%",
    paddingLeft: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
  },
});
