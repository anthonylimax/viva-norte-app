import { ImageSourcePropType } from "react-native"

export type AnnouncementDTO = {
    id: string
    condominiumName ?: string 
    image : ImageSourcePropType[]
    streetName : string
    number: number
    price: number
    neighborHood : string
    city: string
}