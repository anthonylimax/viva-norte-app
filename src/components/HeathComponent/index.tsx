import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";
import { addFavorite, removeFavorite } from "./../../Reducers/FavoriteReducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { InsertFavorites, RemoveFavorite } from "../../hooks/requestDb";

function HearthComponent({
  id,
  color,
  onPress,
}: {
  id: string;
  onPress?: any;
  color?: string;
}) {
  const navigate = useNavigation<StackNavigationProp<any>>();
  const getKey = async () => {
    try {
      const key = await AsyncStorage.getItem("token");
      if (key !== null) {
        if (data.includes(id)) {
          dispatch(removeFavorite(id));
          const token = await AsyncStorage.getItem("token");
          console.log(token);
          if (token) {
            const json = JSON.parse(token)[0].id;
            console.log(json);
            RemoveFavorite(json, id);
          }
        } else {
          dispatch(addFavorite(id));
          const token = await AsyncStorage.getItem("token");
          if (token) {
            const json = JSON.parse(token)[0].id;
            console.log(json);
            InsertFavorites(json, id);
          }
        }
      } else {
        if (navigate.getState().index == 0) {
          navigate.push("login");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const data: any[] = useSelector((state: any) => state.favorites.favorites);
  const numRef = useRef(0);
  useEffect(() => {
    if (numRef.current == 0) {
      numRef.current++;
    } else {
      toggleFavorite();
    }
    return () => {};
  }, [onPress]);

  const dispatch = useDispatch();

  function toggleFavorite() {
    getKey();
  }

  return (
    <Icon
      onPress={toggleFavorite}
      color={color ? color : "red"}
      size={24}
      name={!data.includes(id) ? "heart-o" : "heart"}
    ></Icon>
  );
}

export default HearthComponent;
