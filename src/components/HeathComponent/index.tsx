
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

    return (<Icon onPress={toggleFavorite} size={24} style={container.icon} name={!data.includes(id) ? "heart-o" : "heart"}></Icon>)
}

const container = StyleSheet.create({
    icon: {
        position: "absolute",
        top: 20,
        zIndex: 3,
        backgroundColor: "#FFFFFF60",
        padding: 5,
        borderRadius: 40,
        color: "#B71415",
        right: 40,
    }
})

export default HearthComponent;