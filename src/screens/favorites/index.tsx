import { useSelector } from "react-redux";
import * as Components from "./../../styles"
import { AnnouncementDTO } from "../../DTOs/announcement.type";
import{ useState } from "react";
import  { FlatList, StyleSheet, Text,SafeAreaView } from "react-native";
import Announcement from "../../components/Announcement";
import Animated, {SlideInRight, SlideOutRight } from "react-native-reanimated";

export default function Favorites() {
    const data: AnnouncementDTO[] = useSelector((state: any) => state.favorites.announcements)
    const favorites : any[] = useSelector((state : any) => state.favorites.favorites);

    const [query, setQuery]: [AnnouncementDTO[], any] = useState(data);
    
    return (
        <SafeAreaView style={style.view}>
            <Components.AddressText style={{ fontSize: 24, padding: 20, width: "100%" }}>Favoritos</Components.AddressText>
            {
                favorites.length > 0 ? <Components.SaveText>{favorites.length} salvamento{favorites.length > 1 && "s"}</Components.SaveText> : <Components.SaveText>Nenhum anuncio salvo.</Components.SaveText>
            }
            <Components.FavoriteTextMediumBlack>Todos os salvamentos:</Components.FavoriteTextMediumBlack>
            <FlatList data={query} showsVerticalScrollIndicator={false} renderItem={({ item }) : any => {
                if(favorites.includes(item.announcement.id_announcement)){
                    return (
                        <Animated.View entering={SlideInRight} exiting={SlideOutRight}>
                            <Announcement {...item}></Announcement>
                            <Components.Separator />
                        </Animated.View>
                    )
                }
            }}></FlatList>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    view: {
        flex: 1,
        padding:20,
        alignItems: "center",
        justifyContent: "center"
    }
})