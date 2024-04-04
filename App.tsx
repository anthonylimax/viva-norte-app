import favoriteStore from "./src/stores/FavoriteStore";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Favorites from "./src/screens/favorites";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import NotificationScreen from "./src/screens/NotificationsScreen";
import AnnouncementScreen from "./src/screens/Announcement";
import Login from "./src/screens/Login";
import Profile from "./src/screens/Profile";
import Signin from "./src/screens/Signin";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={favoriteStore}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route, navigation }) => ({
            headerShown: false,

            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <FontAwesome6 name={route.name} color={color} size={size} />
              );
            },
            tabBarActiveTintColor: "#0566AE",
            tabBarInactiveTintColor: "#4B4A4A",
          })}
        >
          <Tab.Screen name="house" component={HomeStack} />
          <Tab.Screen name="heart" component={Favorites} />
          <Tab.Screen name="user" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );

  function HomeStack() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="homeComponent" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="notification" component={NotificationScreen} />
        <Stack.Screen
          options={{
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
          name="announcement"
          component={AnnouncementScreen}
        />
      </Stack.Navigator>
    );
  }
}
