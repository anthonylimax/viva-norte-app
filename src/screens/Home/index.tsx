import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import Announcement from "../../components/Announcement";
import { AnnouncementDTO } from "../../DTOs/announcement.type";
import Animated, {
    FlipInEasyX, FlipInEasyY
} from "react-native-reanimated";
import * as Component from "../../styles";
import Slider from "../../components/Slider";
import { useRef, useState } from "react";
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
    const [limit, setLimit] = useState(true);
    const refIndex = useRef(0);
    return(
        <SafeAreaView style={style.view}>
                <Slider></Slider>
                <FlatList ListHeaderComponent={ListHeaderComponent}  showsVerticalScrollIndicator={false} data={query} ItemSeparatorComponent={Component.Separator} renderItem={({item}) =>{
                    refIndex.current++;
                    if(limit && refIndex.current < 3){
                        return(<Animated.View entering={FlipInEasyY}> 
                            <Announcement id={item.id} price={item.price} city={item.city} image={item.image} streetName={item.streetName} neighborHood={item.neighborHood} condominiumName={item.condominiumName} number={item.number}></Announcement>
                        </Animated.View>)
                      
                    }
                    else if(!limit){
                        return(<Animated.View entering={FlipInEasyY}> 
                            <Announcement id={item.id} price={item.price} city={item.city} image={item.image} streetName={item.streetName} neighborHood={item.neighborHood} condominiumName={item.condominiumName} number={item.number}></Announcement>
                        </Animated.View>)
                    }
                }}/>
        </SafeAreaView>
    )
    function ListHeaderComponent(){
        return (
            <Component.AddressView>
                <Component.AddressText style={{fontSize: 20}}>Imóveis para você</Component.AddressText>
                <TouchableOpacity onPress={()=>{
                    setLimit(false)
                }}><Component.AddressText style={{fontSize: 14}}>ver mais</Component.AddressText></TouchableOpacity>
            </Component.AddressView>
        )
    }
}

const style = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})