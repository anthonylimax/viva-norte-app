import styled from "styled-components/native";
import { GlobalVariables } from "../../styles";



export const Title = styled.Text`
    color: ${GlobalVariables.color.blue};
    font-size: 14px;
`

export const BodyNotification = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 60px;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export const CircleIcon = styled.View`
    width: 40px;
    height: 40px;
    background-color: ${GlobalVariables.color.blue};
    border-radius: 100px;
    align-items: center;
    justify-content: center;
`


export const TextBody = styled.View`
    width: 50%;
`

export const notificationDescription = styled.Text`
    font-size: 14px;
    color: #262729;
`