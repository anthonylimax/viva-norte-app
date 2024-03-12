import { Text, Image, FlatList } from "react-native"
import * as Component from "./style"
import HeaderAnnouncement from "../../components/HeaderAnnouncement";
import { useLayoutEffect, useState } from "react";
import { SingleAnnouncement } from "../../hooks/requestDb";

export default function AnnouncementScreen(){

    const [data, setData] : [data: any[], setData: any] = useState([]);
    useLayoutEffect(()=>{
        SingleAnnouncement("4f651f4a-0268-4782-87bb-0db50ca08d02").then(({data})=>{
            setData(data.pictures);
        })
    })

    const featuresArray = [
        'box blindex',
        'closet',
        'cozinha americana',
        'interfone',
        'mobiliado',
        'varanda gourmet',
        'varanda',
        'sala de jogos',
        'acesso para pessoas com deficiência',
        'suporte para bicicletas',
        'colega de trabalho',
        'elevador',
        'lavanderia',
        'recepção',
        'sauna',
        'planejado',
        'construído',
        'feito',
        'aceita animais',
        'quarto de serviço',
        'closet no quarto',
        'armário no banheiro',
        'armário na cozinha',
        'academia',
        'churrasqueira',
        'espaço gourmet',
        'espaço verde',
        'jardim',
        'piscina',
        'playground',
        'quadra esportiva',
        'salão de festas',
        'janelas amplas',
        'tv'
    ];

    return(
        <>
        <HeaderAnnouncement announcementName={"Paraiso Tropical"} id={"123"} >
        </HeaderAnnouncement>
        <FlatList data={data} renderItem={({item})=>{
            return(
                <Image source={{
                    uri: item.url
                }} height={400} width={400}/>
            )
        }}></FlatList>
        </>
    )
}