import styled from "styled-components/native"

export const GlobalVariables = {
    constants:{
        imageAnnouncement: "300px",
    },
    color: {
        light_gray : "#00000010",
        white: "#FFF",
        light_black: "#17151699",
        black: "#3E4341",
        medim_black: "#322E2D",
        gray: "#636363",
        blue: "#0566AE"
    }
}

export const SaveText = styled.Text`
    width: 100%;
    padding: 0 20px;
    margin-bottom: 10px;
    margin-top: -20px;
    text-align: left;
    color: ${GlobalVariables.color.light_black};
    font-size: 14px;
    font-weight: 500;
`
export const FavoriteTextMediumBlack = styled.Text`
    width: 100%;
    padding: 0 20px;
    text-align: left;
    color: ${GlobalVariables.color.medim_black};
    font-size: 24px;
    font-weight: 700;
`
export const TitleHeader = styled.Text`
    color: ${GlobalVariables.color.blue};
    font-size: 20px;
    font-weight: 600;
`

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    height: 70px;
    align-items: center;
    justify-content: center;
`

export const Embedded = styled.TouchableOpacity`
    display: flex;
    width: 45px;
    height: 45px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    background-color: ${GlobalVariables.color.blue};
`

export const AddressView = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    flex-direction: row;
`
export const TextAdressComponent = styled.View`
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0px;
`
export const AddressText = styled.Text`
    font-weight: 600;
    font-size: 14px;
    color: ${GlobalVariables.color.blue};
`


export const AnnouncementBox = styled.View`
    display: flex;
    flex-direction: column;
`

export const AnnouncementImage = styled.Image`
    width: 300px;
    height: 200px;
    border-radius: 20px;
`
export const lastBallContainer = styled.View`

    display: flex;
    align-items: center;
    flex-direction: row;
`



export const CarouselImagesAnnouncement = styled.ScrollView`
    overflow: hidden;
    width: 300px;
    height: 200px;
`

export const BallCaurosel = styled.View<{filled: boolean}>`
   width: 20px;
    height: 20px;
    border: 1px solid white;
    background-color: ${props => props.filled ? "white" : "transparent"};
    border-radius: 20px;

`
export const AlignerBallCaurosel = styled.View`
    display: flex;
    gap: 2px;
    bottom: 10px;
    width: 80px;
    left: 110px;
    flex-direction: row;
    position: absolute;
`

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    margin: 40px 0;
    background-color: ${GlobalVariables.color.light_gray};
`

export const SeparatorNotification = styled.View`
    width: 100%;
    height: 1px;
    margin: 5px 0;
    background-color: ${GlobalVariables.color.light_gray};
`

export const TextAnnouncement = styled.Text`
    font-size: 20px;
    color: ${GlobalVariables.color.black};
    font-weight: 700;
`
export const TextAnnouncementPlus = styled.Text`
    font-size: 13px;
    color: ${GlobalVariables.color.white};
    font-weight: 700;
`
export const AdressText = styled.Text`
    font-size: 16px;
    color: ${GlobalVariables.color.gray};
    font-weight: 500;
`
export const Value = styled.Text<{bold: boolean}>`
    font-weight: ${props => props.bold ? 700 : 400};
    font-size: 16px;
    color: ${GlobalVariables.color.black};
`

export const CarouselComponent = styled.ScrollView`
`