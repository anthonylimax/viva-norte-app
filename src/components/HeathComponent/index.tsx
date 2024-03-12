
import Icon from "react-native-vector-icons/FontAwesome"
import { StyleSheet } from "react-native";
import {addFavorite, removeFavorite} from "./../../Reducers/FavoriteReducer"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

function HearthComponent({id, color, onPress}: {id: string, onPress?: any , color?: string}){
    const data : any[] = useSelector((state : any) => state.favorites.favorites)
    const numRef = useRef(0);
    useEffect(()=>{
      if(numRef.current == 0){
        numRef.current++;
      }
      else{
      toggleFavorite();
      }
      return ()=>{}
    }, [onPress])

    const dispatch = useDispatch();
    
    function toggleFavorite() {
        if (data.includes(id)) {
          dispatch(removeFavorite(id));
        } else {
          dispatch(addFavorite(id));
        }
      }

    return (<Icon onPress={toggleFavorite} color={color ? color : "red"} size={24} name={!data.includes(id) ? "heart-o" : "heart"}></Icon>)
}

export default HearthComponent;