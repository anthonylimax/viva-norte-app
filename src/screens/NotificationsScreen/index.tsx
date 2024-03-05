import { FlatList, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Notifications from "../../components/Notifications"
import Ionicons from "react-native-vector-icons/Ionicons"
import * as Components from "./../../styles"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"



export default function NotificationScreen(){
    const navigation = useNavigation();
    const data = useSelector((state: any) => state.favorites.notification)
    return(
        <SafeAreaView style={style.container}>
            <Components.Header>
                <Components.Embedded style={{position: "absolute", left: 20, bottom: 15}} onPress={()=>{
                    if(navigation.getState()?.index == 1){
                        navigation.goBack()
                    }
                }}>
                    <Ionicons name="arrow-back" color={"#FFF"} size={20}/>
                </Components.Embedded>
                    <Components.TitleHeader>Notificações</Components.TitleHeader>
            </Components.Header>
            <FlatList data={data} ItemSeparatorComponent={Components.SeparatorNotification} renderItem={({item}) =>{
                return(
                    <Notifications description={item.description} title={item.title} name={item.name} />
                )
            } }/>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    }
})