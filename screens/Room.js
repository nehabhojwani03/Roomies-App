import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
import { EvilIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { Ionicons } from '@expo/vector-icons';

const Room = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([
        { id: 1, name: "Sam Pg", age: '2 BHK', address: 'Near Pes University, Bangalore', gender: "Woman", image: require('../assets/images/room1.jpeg') },
        { id: 2, name: "Micheal flats", age: '3 BHK', address: 'Near Pes University, Bangalore', gender: "Man", image: require('../assets/images/room2.jpeg') },
        { id: 3, name: "Sri sai pg", age: '2 BHK', address: 'Near Pes University, Bangalore', gender: "Unisex", image: require('../assets/images/room3.jpeg') },
        { id: 4, name: "Samantha pg", age: '4 BHK', address: 'Near Pes University, Bangalore', gender: "Woman", image: require('../assets/images/room4.jpeg') },
        { id: 5, name: "Olivia pg", age: '2 BHK', address: 'Near Pes University, Bangalore', gender: "man", image: require('../assets/images/room1.jpeg') },
    ]);

    const [favorites, setFavorites] = useState([]);

    const handleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter((item) => item !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };

    const handleNavigation = (id) => {
        let routeName = '';
        switch (id) {
            case 1:
                routeName = 'Room1';
                break;
            case 2:
                routeName = 'Room2';
                break;
            case 3:
                routeName = 'Room3';
                break;
            case 4:
                routeName = 'Room4';
                break;
            case 5:
                routeName = 'Room5';
                break;
            default:
                routeName = 'DefaultRoommate';
        }
        navigation.navigate(routeName);
    };


    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={item.image} style={styles.Img} />
            <View style={{ marginLeft: 170, marginTop: -170 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', marginTop: 4 }}>
                    <View style={{ marginTop: 10 }}>
                        <Ionicons name="home" size={18} color="black" />
                    </View>
                    <View>
                        <Text style={{ marginTop: 10, fontSize: 16 }}> {item.age} for {item.gender} </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginTop: 10 }}>
                        <Ionicons name="location" size={20} color="black" />
                    </View>
                    <View>
                        <Text style={{ marginTop: 10, fontSize: 16 }}> {item.address}</Text>
                    </View>
                </View>


                <View style={{ marginHorizontal: -15 }}>
                    <TouchableOpacity onPress={() => handleNavigation(item.id)}>
                        <Ionicons name="paper-plane-outline" size={25} style={{ marginTop: 20, marginLeft: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleFavorite(item.id)}>
                        <Ionicons
                            name={favorites.includes(item.id) ? 'heart' : 'heart-outline'}
                            size={25}
                            style={{ marginTop: -25, marginLeft: 150, color: favorites.includes(item.id) ? 'red' : 'black' }}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.backIcon}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <ArrowLeftIcon color={'#AA336A'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleTextContainer}>
                        <Text style={styles.titleText(COLORS.primary, SIZES.xSmall - 5)}>Rooms</Text>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#B4B4B8', width: '100%' }} />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
};

export default Room;

const styles = StyleSheet.create({
    card: {
        width: 350,
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
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center'
    },
    topContainer: {
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        height: 45,
        // borderColor: 'red',
        // borderWidth: 1
    },
    containerThree: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    textInput: {
        height: 70, // Set the height to 300
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
        textAlignVertical: 'top', // Aligns text at the top vertically
    },
    backIcon: {
        marginLeft: 10
    },
    titleTextContainer: {
        marginHorizontal: 140
        // alignItems: 'center'
    },
    titleText: (color, top) => ({
        fontWeight: "500",
        fontSize: SIZES.xLarge,
        marginTop: top,
        color: color,
        marginLeft: -17,
    }),
});
