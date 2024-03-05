import { StackNavigationProp } from "@react-navigation/stack"

export type Notification = {
    title : string,
    description: string,
    name: string
}

export interface NavigationProp {
    navigation : StackNavigationProp<any>
}
