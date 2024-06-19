import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeNavigation from './HomeNavigation';
import PreferenceScreen from '../screens/PreferenceScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import ToolsScreen from '../screens/ToolsScreen';
import AppUpdateScreen from '../screens/AppUpdateScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import PreferenceTwoScreen from '../screens/PreferenceTwoScreen';
import PreferenceThreeScreen from '../screens/PreferenceThreeScreen';
import PreferenceFourScreen from '../screens/PreferenceFourScreen';
import PreferenceFiveScreen from '../screens/PreferenceFiveScreen';
import PreferenceSixScreen from '../screens/PreferenceSixScreen';
//import LookingForScreen from '../screens/LookingForScreen';
import PropertyListingScreen from '../screens/PropertyListingScreen';
import PropertyListingScreenTwo from '../screens/PropertyListingScreenTwo';
import PropertyScreenListingThree from '../screens/PropertyListingScreenThree';
import PropertyScreenListingFour from '../screens/PropertyListingScreenFour';
import Selectlocation from '../components/Selectlocation';
import Roommates from '../screens/Roommates';
import AddressDetails from '../components/AddressDetails';
import Room from '../screens/Room';
import Roommate1 from '../components/Roommates/Roommate1';
import Roommate4 from '../components/Roommates/Roommate4';
import Roommate3 from '../components/Roommates/Roommate3';
import Roommate2 from '../components/Roommates/Roommate2';
import Roommate5 from '../components/Roommates/Roommate5';
import Roommate6 from '../components/Roommates/Roommate6';
import Room1 from '../components/Rooms/Room1';
import Room2 from '../components/Rooms/Room2';
import Room3 from '../components/Rooms/Room3';
import Room4 from '../components/Rooms/Room4';
import Room5 from '../components/Rooms/Room5';
import ManageChores from '../components/CoLivingTools/ManageChores';
import ManageTasks from '../components/CoLivingTools/ManageTasks';
import ManageGroceries from '../components/CoLivingTools/ManageGroceries';


const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>

        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeNavigation} />
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
        <Stack.Screen name="Preference" options={{ headerShown: false }} component={PreferenceScreen} />
        <Stack.Screen name="Privacy" options={{ headerShown: false }} component={PrivacyScreen} />
        <Stack.Screen name="Tools" options={{ headerShown: false }} component={ToolsScreen} />
        <Stack.Screen name="AppUpdate" options={{ headerShown: false }} component={AppUpdateScreen} />
        <Stack.Screen name="EditProfile" options={{ headerShown: false }} component={EditProfileScreen} />
        <Stack.Screen name="PreferenceTwo" options={{ headerShown: false }} component={PreferenceTwoScreen} />
        <Stack.Screen name="PreferenceThree" options={{ headerShown: false }} component={PreferenceThreeScreen} />
        <Stack.Screen name="PreferenceFour" options={{ headerShown: false }} component={PreferenceFourScreen} />
        <Stack.Screen name="PreferenceFive" options={{ headerShown: false }} component={PreferenceFiveScreen} />
        <Stack.Screen name="PreferenceSix" options={{ headerShown: false }} component={PreferenceSixScreen} />
        <Stack.Screen name="PropertyListing" options={{ headerShown: false }} component={PropertyListingScreen} />
        <Stack.Screen name="PropertyListingTwo" options={{ headerShown: false }} component={PropertyListingScreenTwo} />
        <Stack.Screen name="PropertyListingThree" options={{ headerShown: false }} component={PropertyScreenListingThree} />
        <Stack.Screen name="PropertyListingFour" options={{ headerShown: false }} component={PropertyScreenListingFour} />
        <Stack.Screen name="Selectlocation" options={{ headerShown: false }} component={Selectlocation} />
        <Stack.Screen name="AddressDetails" options={{ headerShown: false }} component={AddressDetails} />
        <Stack.Screen name="Roommates" options={{ headerShown: false }} component={Roommates} />
        <Stack.Screen name="Room" options={{ headerShown: false }} component={Room} />
        <Stack.Screen name="Roommate1" options={{ headerShown: false }} component={Roommate1} />
        <Stack.Screen name="Roommate2" options={{ headerShown: false }} component={Roommate2} />
        <Stack.Screen name="Roommate3" options={{ headerShown: false }} component={Roommate3} />
        <Stack.Screen name="Roommate4" options={{ headerShown: false }} component={Roommate4} />
        <Stack.Screen name="Roommate5" options={{ headerShown: false }} component={Roommate5} />
        <Stack.Screen name="Roommate6" options={{ headerShown: false }} component={Roommate6} />
        <Stack.Screen name="Room1" options={{ headerShown: false }} component={Room1} />
        <Stack.Screen name="Room2" options={{ headerShown: false }} component={Room2} />
        <Stack.Screen name="Room3" options={{ headerShown: false }} component={Room3} />
        <Stack.Screen name="Room4" options={{ headerShown: false }} component={Room4} />
        <Stack.Screen name="Room5" options={{ headerShown: false }} component={Room5} />
        <Stack.Screen name="ManageChores" options={{ headerShown: false }} component={ManageChores} />
        <Stack.Screen name="ManageTasks" options={{ headerShown: false }} component={ManageTasks} />
        <Stack.Screen name="ManageGroceries" options={{ headerShown: false }} component={ManageGroceries} />



        {/* <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} /> */}
        {/* <Stack.Screen name="Find" options={{ headerShown: false }} component={FindScreen} /> */}
        {/* <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <Drawer.Navigator>
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Settings" component={SettingScreen} />
            </Drawer.Navigator>
          )}
        </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}