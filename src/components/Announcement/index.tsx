import { Image, NativeScrollEvent, NativeSyntheticEvent, Text, View } from "react-native";
import * as Component from "../../styles";
import { AnnouncementDTO } from "../../DTOs/announcement.type";
import React, { Dispatch, useEffect, useLayoutEffect, useState } from "react";
import HearthComponent from "../HeathComponent";



export default function Announcement({ streetName, condominiumName, city, image, neighborHood, number, price, id }: AnnouncementDTO) {


    const [balls, setBalls]: [boolean[], any] = useState([]);
    useLayoutEffect(() => {
        const insertBalls: boolean[] = [];
        image.forEach((e, key) => {
            key == 0 ? insertBalls.push(true) : insertBalls.push(false)
        })
        setBalls(insertBalls);
    }, [])

    const value = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(price)

    function HandleScroller(event: NativeSyntheticEvent<NativeScrollEvent>) {
        const finalBall = Math.round(event.nativeEvent.contentOffset.x / 299);
        const newArray = [...balls];
        newArray.forEach((element, key) => {
            if (key == finalBall) {
                newArray[key] = true;
            }
            else {
                newArray[key] = false;
            }
        });
        setBalls(newArray)
    }


    return (
        <Component.AnnouncementBox>
            <View>
                <HearthComponent id={id} />
                <Component.CarouselImagesAnnouncement
                    scrollEventThrottle={16} onScroll={HandleScroller} showsHorizontalScrollIndicator={false} horizontal>
                    {
                        image.map((img, key) => {
                            return (<Component.AnnouncementImage key={key} source={img}></Component.AnnouncementImage>);
                        })
                    }
                </Component.CarouselImagesAnnouncement>
                <Component.AlignerBallCaurosel>
                    {
                        balls.map((element, key) => {
                            const result = balls.indexOf(true) + 1;
                            if (key < 2) {
                              return <Component.BallCaurosel filled={element} key={key}></Component.BallCaurosel>;
                            } else if (key === 2 && result <= 3) {
                              return <Component.BallCaurosel filled={element} key={key}></Component.BallCaurosel>;
                            } else if (key > 2 && element) {
                              return (
                                <Component.lastBallContainer key={key}>
                                  <Component.BallCaurosel filled={element}></Component.BallCaurosel>
                                  {element && result > 0 && (
                                    <Component.TextAnnouncementPlus> +{balls.length - result}</Component.TextAnnouncementPlus>
                                  )}
                                </Component.lastBallContainer>
                              );
                            }
                            return null; // adicionado para evitar um aviso de 'unreachable code'
                          })
                    }
                </Component.AlignerBallCaurosel>
            </View>
            <Component.TextAnnouncement>{condominiumName}</Component.TextAnnouncement>
            <Component.AdressText>{streetName}, {number} - {neighborHood}, {city}.</Component.AdressText>
            <Component.Value bold={false}><Component.Value bold={true}>{value}</Component.Value> total sem taxa.</Component.Value>
        </Component.AnnouncementBox>
    );
}