import Ionicons from "react-native-vector-icons/Ionicons";
import { AnnouncementDTO } from "../../DTOs/announcement.type";
import * as Components from "./style"
import * as Elements from "./../../styles"
import HearthComponent from "../HeathComponent";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function HeaderAnnouncement({announcementName, id} : {announcementName : string, id: string}){
    const [press, setPress] = useState(false);
    
    const navigator = useNavigation();
    return(
        <Components.HeaderView>
            
            <Elements.Embedded onPress={()=>{
                if(navigator.getState()?.index == 1){
                    navigator.goBack();
                }
            }}>
                <Ionicons name="arrow-back" color={"#FFF"} size={20}/>
            </Elements.Embedded>
            <Components.Text>{announcementName}</Components.Text>
            <Elements.Embedded onPress={()=>{
                setPress(!press);
            }}>
            <HearthComponent onPress={press} color={"white"} id={id}></HearthComponent>
            </Elements.Embedded>
        </Components.HeaderView>

    );
}