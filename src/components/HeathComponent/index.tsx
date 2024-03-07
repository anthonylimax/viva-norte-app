
import Icon from "react-native-vector-icons/FontAwesome"
import { StyleSheet } from "react-native";
import {addFavorite, removeFavorite} from "./../../Reducers/FavoriteReducer"
import { useSelector, useDispatch } from "react-redux";

function HearthComponent({id}: {id: string}){
    const data : any[] = useSelector((state : any) => state.favorites.favorites)

    const dispatch = useDispatch();
    
    function toggleFavorite() {
        if (data.includes(id)) {
          dispatch(removeFavorite(id));
        } else {
          dispatch(addFavorite(id));
        }
      }

    return (<Icon onPress={toggleFavorite} color={"red"} size={24} name={!data.includes(id) ? "heart-o" : "heart"}></Icon>)
}


export default HearthComponent;