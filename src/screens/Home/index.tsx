import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import Announcement from "../../components/Announcement";
import { AnnouncementDTO } from "../../DTOs/announcement.type";
import Animated, {SlideInRight, getUseOfValueInStyleWarning
} from "react-native-reanimated";
import * as Component from "../../styles";
import Slider from "../../components/Slider";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavigationProp } from "../../@types/global";
import HearthComponent from "../../components/HeathComponent";
import { getBackgroundPermissionsAsync } from "expo-location";


export default function Home({navigation} : NavigationProp){


    const data : AnnouncementDTO[] = useSelector((state : any) => state.favorites.announcements)
    const [query, setQuery] : [ AnnouncementDTO[], any] = useState(data);

    const [limit, setLimit] = useState(true);
    const refIndex = useRef(0);
    return(
        <SafeAreaView style={style.view}>
                <Slider navigation={navigation}></Slider>
                <FlatList ListHeaderComponent={ListHeaderComponent}  showsVerticalScrollIndicator={false} data={query} ItemSeparatorComponent={Component.Separator} renderItem={({item}) =>{
                    refIndex.current++;
                    if(limit && refIndex.current < 3){
                        return(<Animated.View entering={SlideInRight}> 
                            <Announcement id={item.id} price={item.price} city={item.city} image={item.image} streetName={item.streetName} neighborHood={item.neighborHood} condominiumName={item.condominiumName} number={item.number}></Announcement>
                        </Animated.View>)
                        
                    }
                    else if(!limit){
                        return(<Animated.View entering={SlideInRight}> 
                            <Announcement id={item.id} price={item.price} city={item.city} image={item.image} streetName={item.streetName} neighborHood={item.neighborHood} condominiumName={item.condominiumName} number={item.number}></Announcement>
                        </Animated.View>)
                    }
                    else{
                        return null;
                    } 
                }}/>
        </SafeAreaView>
    )
    function ListHeaderComponent(){
        return (
            <Component.AddressView>
                <Component.AddressText style={{fontSize: 20, marginRight: 40}}>Imóveis para você</Component.AddressText>
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