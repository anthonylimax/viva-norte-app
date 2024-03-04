import favoriteStore from './src/stores/FavoriteStore';
import {Provider} from "react-redux"
import Home from './src/screens/Home';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Favorites from './src/screens/favorites';

export default function App() {

  const Tab = createBottomTabNavigator();
  return (
    <Provider store={favoriteStore}>
        <NavigationContainer>
        <Tab.Navigator screenOptions={({route, navigation}) =>({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) =>{
            return <FontAwesome6 name={route.name} color={color} size={size}/>
          },
          tabBarActiveTintColor: "#0566AE",
          tabBarInactiveTintColor: "#4B4A4A"
        })}>
          <Tab.Screen name='house' component={Home} />
          <Tab.Screen name='heart' component={Favorites} />
          <Tab.Screen name='magnifying-glass' component={Home} />
          <Tab.Screen name='user' component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
      </Provider>
  );
}
