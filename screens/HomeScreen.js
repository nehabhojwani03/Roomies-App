import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ScrollView, TextInput, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from '@expo/vector-icons';
import axios from "axios";
import constant from "../constant";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {

  const navigation = useNavigation();


  const [loading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [photos, setPhotos] = useState("");
  const [token, setToken] = useState("");

  const getToken = () => {
    setIsLoading(true);
    AsyncStorage.getItem("userdata")
      .then((token) => {
        if (token != null) {
          // setIsLoading(false)
          console.log("Something" + token);
          setToken(token);
          getData(token);
        }
      })
      .catch((err) => {
        console.log("Profle" + err);
        setIsLoading(false);
      });
  };

  const getData = (token) => {
    setIsLoading(true);
    axios({
      method: "get",
      url: constant.BASE_URL + "/auth/me",
      headers: { Authorization: token },
    })
      .then((apiResponse) => {
        const { name, photos } = apiResponse.data.data;
        setName(name);
        setPhotos(photos);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Profile" + err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  const [selectedSource, setSelectedSource] = useState('home');
  const [selectedType, setSelectedType] = useState('');

  const handleSourcePress = (source) => {
    setSelectedSource(source);
  };

  const handleTypePress = (type) => {
    setSelectedType(type);
  };

  // next pressed


  const handlePress = () => {
    // Alert.alert('Button Pressed');
    navigation.navigate("Room")
  };

  return (
    <SafeAreaView >
      {/* <View >
        <TouchableOpacity>
          <Image
            source={require("../assets/images/user.png")}
            style={styles.userImg}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Welcome Back, {name}</Text>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/notification.png")}
            style={styles.notificationImg}
          />
        </TouchableOpacity>
      </View> */}
      <View style={{
        width: '90%',
        // borderWidth: 1,
        marginTop: -39,
        height: 90,
        marginHorizontal: 19,
        margin: 1,
        borderRadius: 10,
        borderColor: '#6C0345',
        shadowOffset: { width: 0.2, height: 0.4 },
        shadowOpacity: 0.4,
        elevation: 5,
        backgroundColor: 'white'
      }}>
        <View>
          <Text style={{
            fontSize: 22,
            fontWeight: '500',
            marginTop: 7,
            marginHorizontal: 13,
            color: '#AA336A',
            letterSpacing: 0.7,
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 4,
          }}>Hey {name}!</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text style={{ fontWeight: '500', marginHorizontal: 13, marginTop: 10 }}>You have two rooms available</Text>
            <Text style={{ fontWeight: '500', marginHorizontal: 15, marginTop: 2 }}>for rent.</Text>
          </View>
          <View style={{ borderWidth: 0, height: 56, width: 70, marginTop: -10, marginHorizontal: 10 }}>
            <Image
              style={{ height: 86, width: 120, marginTop: -20, marginHorizontal: -10 }}
              source={require('../assets/images/roomies1.png')} />
          </View>
        </View>
        <View style={{
          width: '100%',
          // borderWidth: 1,
          marginTop: 29,
          height: 300,
          marginHorizontal: 0,
          margin: 1,
          borderRadius: 10,
          borderColor: '#6C0345',
          shadowOffset: { width: 0.2, height: 0.4 },
          shadowOpacity: 0.4,
          elevation: 5,
          backgroundColor: 'white'
        }}>
          <View>
            <Text style={{ fontWeight: '400', marginHorizontal: 13, marginTop: 10, fontSize: 22 }} > Location</Text>
          </View>


          <View style={{ flexDirection: 'row' }}>
            <View>
              <TextInput style={{
                height: 40,
                width: 320,
                borderWidth: 1,
                borderColor: '#CCCCCC',
                borderRadius: 14,
                paddingHorizontal: 20,
                // margin: 6, // Added margin for spacing
                marginHorizontal: 15,
                marginTop: 10
              }} value=""
                placeholder="Search by Location"
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Selectlocation')}>
              <View style={{ marginTop: 17, right: 45 }}>
                <FontAwesome5
                  style={{
                  }}
                  name="map-marker-alt" size={22} color="#CCCCCC" />
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{
              fontWeight: '400',
              marginHorizontal: 65,
              marginTop: 30,
              fontSize: 18
            }}>What are you looking for?</Text>
          </View>
          <View style={{ height: 10 }}></View>

          <View style={{ flexDirection: 'row' }}>
            {/* box1 */}
            <View style={{
              width: '40%',
              // borderWidth: 1,
              marginTop: 19,
              height: 120,
              marginHorizontal: 26,
              margin: 1,
              borderRadius: 10,
              borderColor: '#6C0345',
              shadowOffset: { width: 0.2, height: 0.4 },
              shadowOpacity: 0.4,
              elevation: 5,
              backgroundColor: 'white'
            }}>
              <View style={{
                height: 75,
                width: 100,
                marginTop: 5,
                // borderWidth: 1, 
                marginHorizontal: 18
              }}>
                <Image
                  style={{ height: 100, width: 120, marginTop: -10, marginHorizontal: -10 }}
                  source={require('../assets/images/roomies1.png')} />

              </View>
              <TouchableOpacity onPress={() => navigation.navigate("Roommates")}>
                <View style={{
                  marginTop: 1,
                  // borderWidth: 1,
                  height: 38,
                  width: '100%',
                  borderBottomEndRadius: 10,
                  borderBottomLeftRadius: 10,
                  backgroundColor: '#AA336A'

                }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      marginTop: 7,
                      color: 'white',
                      fontWeight: "bold",
                    }}
                  >Roommates</Text>
                </View>
              </TouchableOpacity>

            </View>
            {/* box 2 */}

            <View style={{
              width: '40%',
              // borderWidth: 1,
              marginTop: 19,
              height: 120,
              marginHorizontal: -10,
              margin: 1,
              borderRadius: 10,
              borderColor: '#6C0345',
              shadowOffset: { width: 0.2, height: 0.4 },
              shadowOpacity: 0.4,
              elevation: 5,
              backgroundColor: 'white'
            }}>
              <View style={{
                height: 75,
                width: 100,
                marginTop: 5,
                // borderWidth: 1, 
                marginHorizontal: 18
              }}>
                <Image
                  style={{ height: 100, width: 120, marginTop: -10, marginHorizontal: -10 }}
                  source={require('../assets/images/room.png')} />


              </View>
              <TouchableOpacity onPress={() => navigation.navigate("Room")} >
                <View style={{
                  marginTop: 1,
                  // borderWidth: 1,
                  height: 38,
                  width: '100%',
                  borderBottomEndRadius: 10,
                  borderBottomLeftRadius: 10,
                  backgroundColor: '#AA336A'

                }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      marginTop: 7,
                      color: 'white',
                      fontWeight: "bold",
                    }}
                  >Rooms</Text>
                </View>
              </TouchableOpacity>

            </View>

          </View>

        </View>
        <View style={{
          width: '100%',
          // borderWidth: 1,
          marginTop: 29,
          height: 140,
          marginHorizontal: 0,
          margin: 1,
          borderRadius: 10,
          borderColor: '#6C0345',
          shadowOffset: { width: 0.2, height: 0.4 },
          shadowOpacity: 0.4,
          elevation: 5,
          backgroundColor: 'white'
        }}>
          <View>
            <Text style={{
              fontWeight: '400',
              marginHorizontal: 13,
              marginTop: 10,
              fontSize: 22
            }}>Quick Actions</Text>
          </View>
          {/* <View style={{ flexDirection: 'row' }}>
            <View style={{}}></View>
          </View> */}
          <View style={styles.containerTwo}>
            <TouchableOpacity
              style={[styles.tab, selectedSource === 'home' ? styles.selectedTab : null]}
              onPress={() => handleSourcePress('home')}>
              <Text style={[styles.tabText, selectedSource === 'home' ? styles.selectedTabText : null]}>1 Bhk</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, selectedSource === 'restaurant' ? styles.selectedTab : null]}
              onPress={() => handleSourcePress('restaurant')}>
              <Text style={[styles.tabText, selectedSource === 'restaurant' ? styles.selectedTabText : null]}>2 Bhk</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, selectedSource === 'events' ? styles.selectedTab : null]}
              onPress={() => handleSourcePress('events')}>
              <Text style={[styles.tabText, selectedSource === 'events' ? styles.selectedTabText : null]}>3 Bhk</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, selectedSource === 'others' ? styles.selectedTab : null]}
              onPress={() => handleSourcePress('others')}>
              <Text style={[styles.tabText, selectedSource === 'others' ? styles.selectedTabText : null]}>Others</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handlePress}>
            <View style={{
              height: 35,
              width: 80,
              borderRadius: 10,
              backgroundColor: '#6C0345',
              left: 240,
              top: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                textAlign: 'center',
                fontSize: 16,
                marginTop: 0,
                color: 'white',
                fontWeight: "bold",
              }} >Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>




  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  userImg: {
    width: 50,
    height: 50,
    marginTop: -40,
    marginLeft: 5,
  },
  text: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: -44,
    marginLeft: 53,
  },
  notificationImg: {
    width: 30,
    height: 30,
    marginLeft: 350,
    marginTop: -35,
  },
  card: {
    width: 380,
    height: 200,
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  Img: {
    width: 150,
    height: 200,
    borderRadius: 20,
  },
  containerTwo: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 6,
    marginTop: 4,

  },
  tab: {
    // flex: 1,
    height: 35,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 8,
    marginLeft: 8,
    padding: 5,
    borderWidth: 1,
    borderColor: '#AA336A',
  },
  selectedTab: {
    backgroundColor: '#AA336A',
  },
  tabText: {
    color: '#2A4D50',
  },
  selectedTabText: {
    color: 'white',
  },

  titleText: (color, top) => ({
    fontWeight: "500",
    fontSize: SIZES.xLarge,
    marginTop: top,
    color: color,
    marginLeft: -51,
  }),
});
