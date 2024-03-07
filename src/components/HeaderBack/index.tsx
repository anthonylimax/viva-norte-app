import Ionicons from "react-native-vector-icons/Ionicons";
import * as Components from "./../../styles"
import { useNavigation } from "@react-navigation/native";


export default function HeaderBack({name} : {name: string}){
    const navigation = useNavigation();
    return(
        <Components.Header>
                <Components.Embedded style={{position: "absolute", left: 20, bottom: 15}} onPress={()=>{
                    if(navigation.getState()?.index == 1){
                        navigation.goBack();
                    }
                }}>
                    <Ionicons name="arrow-back" color={"#FFF"} size={20}/>
                </Components.Embedded>
                    <Components.TitleHeader>{name}</Components.TitleHeader>
            </Components.Header>
    )
}