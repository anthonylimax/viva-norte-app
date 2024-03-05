import FontAwesome from "react-native-vector-icons/FontAwesome"
import * as Elements from "./style"
import { Notification } from "../../@types/global"
import * as Components from "./../../styles"


export default function Notifications({title, description, name} : Notification){
    return(
        <Elements.BodyNotification>
            <Elements.CircleIcon>
                <FontAwesome size={20} color={"#FFF"} name={name} />
            </Elements.CircleIcon>
            <Elements.TextBody>
                <Elements.Title>{title}</Elements.Title>
                <Elements.notificationDescription>{description}</Elements.notificationDescription>
            </Elements.TextBody>
        </Elements.BodyNotification>
    )
}