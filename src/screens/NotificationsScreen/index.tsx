import { FlatList, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Notifications from "../../components/Notifications"
import * as Components from "./../../styles"
import { useSelector } from "react-redux"
import React from "react"
import HeaderBack from "../../components/HeaderBack"



export default function NotificationScreen(){
    const data = useSelector((state: any) => state.favorites.notification)
    return(
        <SafeAreaView style={style.container}>
            <HeaderBack name={"Notificações"}></HeaderBack>
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