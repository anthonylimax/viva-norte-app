import { useEffect, useLayoutEffect, useState } from "react"
import * as Components from "./../../styles"
import { Text, View } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import * as Location from "expo-location"
import { getAddress } from "../../hooks/api"

export default function Slider() {

    const [local, setLocal] : [any, any] = useState(null);
    const [err, setErr] = useState(true)



    useLayoutEffect(() => {
        async function GetPermision() {
            let { status } = await Location.getForegroundPermissionsAsync();
            if (status !== "granted") {
                setErr(true);
                return
            }
            let location = await Location.getCurrentPositionAsync();
            getAddress(location.coords.latitude.toString(), location.coords.longitude.toString()).then(result => result).then(data => {
                setLocal(data)
                setErr(false)
            }).catch((err)=>{
                setErr(true)
            })

            setLocal();
            

            return;
        }
        GetPermision();
    }, [])

    return (
        <>
            <Text style={{color: "#171516", textAlign: "left", width: 300, marginTop: 20}}>Localização</Text>
            <Components.AddressView>
                <Components.TextAdressComponent>
                    <Entypo color={"#0566AE"} name="location-pin" size={25}></Entypo>
                    <Components.AddressText>
                        {
                            !err ? `${local.address_components[2].long_name}, ${local.address_components[1].long_name}, ${local.address_components[0].long_name}` : "Loading..."
                        }
                    </Components.AddressText>
                </Components.TextAdressComponent>
                <Components.Embbebed>
                    <FontAwesome name="bell" color={"#FFF"} size={25}></FontAwesome>
                </Components.Embbebed>
            </Components.AddressView>
        </>

    )
}