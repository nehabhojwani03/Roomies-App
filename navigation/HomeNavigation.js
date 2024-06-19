import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AboutScreen from "../screens/AboutScreen";
import HomeScreen from "../screens/HomeScreen";
import ToolsScreen from "../screens/ToolsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "black",
        headerStyle: {
          backgroundColor: "#AA336A",
        },
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#AA336A",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Co-living Tools"
        component={ToolsScreen}
        options={{
          tabBarLabel: "Tools",
          tabBarIcon: ({ color }) => (
            // <Ionicons name="chatbubbles-outline" size={25} color={color} />
            <MaterialIcons name="electric-bolt" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: "AboutUs",
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-circle-outline" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
