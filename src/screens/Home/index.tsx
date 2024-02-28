import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Announcement from "../../components/Announcement";
import { AnnouncementDTO } from "../../DTOs/announcement.type";
import { ScrollView } from "react-native";
import * as Component from "../../styles";
export default function Home(){

    const query : AnnouncementDTO[] = [{
        city : "Recife",
        image: [require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"), require("./../../../assets/example.png"), require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"), require("./../../../assets/example.png"), require("./../../../assets/example.png")],
        streetName: "Rua do imperador",
        number: 30,
        neighborHood: "Tejipio",
        condominiumName: "Prince Antonio Maia",
        id: "sadasd" ,
        price: 150000
    },
    {
        city : "Recife",
        image: [require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"), require("./../../../assets/example.png"), require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"), require("./../../../assets/example.png"), require("./../../../assets/example.png")],
        streetName: "Rua do imperador",
        number: 30,
        neighborHood: "Tejipio",
        condominiumName: "Prince Antonio Maia",
        id: "432" ,
        price: 150000
    },
    {
        city : "Recife",
        image: [require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"), require("./../../../assets/example.png"), require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"), require("./../../../assets/example.png"), require("./../../../assets/example.png")],
        streetName: "Rua do imperador",
        number: 30,
        neighborHood: "Tejipio",
        condominiumName: "Prince Antonio Maia",
        id: "4321" ,
        price: 150000
    },
    {
        city : "Recife",
        image: [require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"), require("./../../../assets/example.png"), require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"),require("./../../../assets/example.png"), require("./../../../assets/example.png"), require("./../../../assets/example.png")],
        streetName: "Rua do imperador",
        number: 30,
        neighborHood: "Tejipio",
        condominiumName: "Prince Antonio Maia",
        id: "123" ,
        price: 150000
    }
]

    return(
        <SafeAreaView style={style.view}>
                <FlatList showsVerticalScrollIndicator={false} data={query} ItemSeparatorComponent={Component.Separator} renderItem={({item}) =>{
                    return(<Announcement id={item.id} price={item.price} city={item.city} image={item.image} streetName={item.streetName} neighborHood={item.neighborHood} condominiumName={item.condominiumName} number={item.number}></Announcement>)
                }}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})