import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EvilIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const Roommates = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([
        { id: 1, name: "Tiffany", age: 20, gender: "Woman", image: require('../assets/images/Profile1.jpg') },
        { id: 2, name: "Micheal", age: 22, gender: "Man", image: require('../assets/images/Profile2.jpg') },
        { id: 3, name: "Timothy", age: 20, gender: "Man", image: require('../assets/images/Profile3.jpg') },
        { id: 4, name: "Samantha", age: 19, gender: "Woman", image: require('../assets/images/Profile4.jpg') },
        { id: 5, name: "Olivia", age: 24, gender: "Woman", image: require('../assets/images/Profile5.jpg') },
    ]);

    const [favorites, setFavorites] = useState([]);

    const handleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter((item) => item !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };
    // const handleSend = (id) => {
    //     alert(`Sending message to ID: ${id}`);
    // };

    const handleNavigation = (id) => {
        let routeName = '';
        switch (id) {
            case 1:
                routeName = 'Roommate1';
                break;
            case 2:
                routeName = 'Roommate2';
                break;
            case 3:
                routeName = 'Roommate3';
                break;
            case 4:
                routeName = 'Roommate4';
                break;
            case 5:
                routeName = 'Roommate5';
                break;
            case 6:
                routeName = 'Roommate6';
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
                <Text style={{ marginTop: 10, fontSize: 16 }}>Age: {item.age} {item.gender}</Text>
                {/* <TouchableOpacity >
                    <Ionicons name="paper-plane-outline" size={25} style={{ marginTop: 70, marginLeft: 100 }} />
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => handleNavigation(item.id)}>
                    <Ionicons name="paper-plane-outline" size={25} style={{ marginTop: 70, marginLeft: 100 }} />
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
                        <Text style={styles.titleText(COLORS.primary, SIZES.xSmall - 5)}>Roommates</Text>
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

export default Roommates;

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
        marginLeft: -37,
    }),
});
