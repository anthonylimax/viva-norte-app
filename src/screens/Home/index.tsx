import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Announcement from "../../components/Announcement";
import { AnnouncementDTO } from "../../DTOs/announcement.type";
import Animated, { SlideInRight } from "react-native-reanimated";
import * as Component from "../../styles";
import Slider from "../../components/Slider";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationProp } from "../../@types/global";
import { GetAll } from "../../hooks/requestDb";
import { addAllAnnouncements } from "../../Reducers/FavoriteReducer";

export default function Home({ navigation }: NavigationProp) {
  const data: AnnouncementDTO[] = useSelector(
    (state: any) => state.favorites.announcements
  );
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(true);
  const refIndex = useRef(0);

  useLayoutEffect(() => {
    GetAll()
      .then((x) => x.data)
      .then((result) => {
        dispatch(addAllAnnouncements(result));
      });
  }, []);
  return (
    <SafeAreaView style={style.view}>
      <Slider navigation={navigation}></Slider>
      <FlatList
        style={style.flatlist}
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        data={data}
        ItemSeparatorComponent={Component.Separator}
        renderItem={({ item }): any => {
          refIndex.current++;
          if (limit && refIndex.current < 3) {
            return (
              <Animated.View entering={SlideInRight}>
                <Announcement {...item}></Announcement>
              </Animated.View>
            );
          } else if (!limit) {
            return (
              <Animated.View entering={SlideInRight}>
                <Announcement {...item}></Announcement>
              </Animated.View>
            );
          }
        }}
      />
    </SafeAreaView>
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
    alignItems: "center",
    justifyContent: "center",
  },
  flatlist: {},
});
