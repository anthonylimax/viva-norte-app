import styled from "styled-components/native"

const GlobalVariables = {
    constants:{
        imageAnnouncement: "300px",
    },
    color: {
        light_gray : "#00000010",
        white: "#FFF",
        black: "#3E4341",
        gray: "#636363"
    }
}



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