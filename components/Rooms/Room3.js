import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES } from '../../constants'
import { Entypo, FontAwesome, FontAwesome5, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import StarRating from 'react-native-star-rating';
import MapView, { Marker } from 'react-native-maps';


const Room1 = () => {
    const navigation = useNavigation()
    const [starCount, setStarCount] = useState(4);

    const onStarRatingPress = (rating) => {
        setStarCount(rating);
    };
    //map

    const [markerPosition, setMarkerPosition] = useState({ latitude: 12.9357, longitude: 77.548 });

    const onMarkerDragEnd = (e) => {
        setMarkerPosition(e.nativeEvent.coordinate);
    };
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.backIcon}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <ArrowLeftIcon color={COLORS.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleTextContainer}>
                        <Text style={styles.titleText(COLORS.primary, SIZES.xSmall - 5)}>Room</Text>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#B4B4B8', width: '100%' }} />
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.ngoImgContainer}>
                    <Image style={styles.ngoImg}
                        source={require('../../assets/images/room3.jpeg')}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <View>
                        <Text style={styles.chooseDonation}>
                            Sri Sai PG
                        </Text>
                    </View>
                    <View>
                        {/* <Text style={styles.chooseDonation}>
                            h
                        </Text> */}
                        <StarRating
                            // style={{}}
                            starStyle={{ marginTop: 25, marginHorizontal: 1, right: 10 }}
                            disabled={false}
                            starSize={22}
                            fullStarColor='gold'
                            maxStars={5}
                            rating={starCount}
                            selectedStar={(rating) => onStarRatingPress(rating)}
                        />
                    </View>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                        marginHorizontal: 20,
                        marginTop: 10
                    }}>₹ 10,000</Text>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '500',
                        marginHorizontal: -14,
                        marginTop: 15,
                        color: COLORS.gray
                    }}>onwards</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <View style={{ marginTop: 10 }}>
                        <Ionicons name="location" size={20} color="black" />
                    </View>
                    <View>
                        <Text style={{ color: COLORS.primary, marginTop: 10, fontSize: 16 }}> near Pes University, BSK 3rd stage</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>

                </View>

                <View style={{
                    height: 145,
                    width: '90%',
                    marginTop: 15,
                    marginHorizontal: 20,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: COLORS.gray2
                }}>
                    <View style={{ flexDirection: 'row' }} >
                        <View style={{
                            flexDirection: 'row',
                            height: 30,
                            width: '23%',
                            marginTop: 15,
                            marginHorizontal: 20,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: COLORS.gray2
                        }}>
                            <View style={{ marginTop: 3 }}>
                                <Foundation name="male-female" size={24} color="black" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Unisex
                                </Text>

                            </View>


                        </View>

                        <View style={{
                            flexDirection: 'row',
                            height: 30,
                            width: '20%',
                            marginTop: 15,
                            marginHorizontal: -10,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: COLORS.gray2
                        }}>
                            <View style={{ marginTop: 3, marginHorizontal: 3 }}>
                                <FontAwesome name="wifi" size={20} color="black" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Wifi
                                </Text>

                            </View>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            height: 30,
                            width: '38%',
                            marginTop: 15,
                            marginHorizontal: 19,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: COLORS.gray2
                        }}>
                            <View style={{ marginTop: 3 }}>
                                <MaterialIcons name="electrical-services" size={24} color="black" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Power Supply
                                </Text>

                            </View>
                        </View>
                    </View>


                    {/* //line 2 */}

                    <View style={{ flexDirection: 'row', marginTop: -4 }} >
                        <View style={{
                            flexDirection: 'row',
                            height: 30,
                            width: '23%',
                            marginTop: 15,
                            marginHorizontal: 20,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: COLORS.gray2
                        }}>
                            <View style={{ marginTop: 3 }}>
                                <FontAwesome5 name="parking" size={20} color="black" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Parking
                                </Text>

                            </View>


                        </View>

                        <View style={{
                            flexDirection: 'row',
                            height: 30,
                            width: '21%',
                            marginTop: 15,
                            marginHorizontal: -10,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: COLORS.gray2
                        }}>
                            <View style={{ marginTop: 3, marginHorizontal: 8 }}>
                                <FontAwesome name="tv" size={20} color="black" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 1, marginTop: 2 }}>
                                    TV
                                </Text>

                            </View>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            height: 30,
                            width: '30%',
                            marginTop: 15,
                            marginHorizontal: 19,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: COLORS.gray2
                        }}>
                            <View style={{ marginTop: 3 }}>
                                <MaterialIcons name="local-laundry-service" size={24} color="black" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Laundry
                                </Text>

                            </View>
                        </View>
                    </View>

                    {/* //line 3 */}

                    <View style={{ flexDirection: 'row', marginTop: -4 }} >
                        <View style={{
                            flexDirection: 'row',
                            height: 30,
                            width: '22%',
                            marginTop: 15,
                            marginHorizontal: 20,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: COLORS.gray2
                        }}>
                            <View style={{ marginTop: 3 }}>
                                <MaterialCommunityIcons name="fridge" size={24} color="black" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Fridge
                                </Text>

                            </View>


                        </View>

                        <View style={{
                            flexDirection: 'row',
                            height: 30,
                            width: '32%',
                            marginTop: 15,
                            marginHorizontal: -10,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: COLORS.gray2
                        }}>
                            <View style={{ marginTop: 3 }}>
                                <MaterialIcons name="microwave" size={24} color="black" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Microwave
                                </Text>

                            </View>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            height: 30,
                            width: '23%',
                            marginTop: 15,
                            marginHorizontal: 19,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: COLORS.gray2
                        }}>
                            <View style={{ marginTop: 3 }}>
                                <MaterialIcons name="cleaning-services" size={20} color="black" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Daily
                                </Text>

                            </View>
                        </View>
                    </View>

                </View>
                <View style={{
                    height: 145,
                    width: '90%',
                    marginTop: 15,
                    marginHorizontal: 20,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: COLORS.gray2
                }}>
                    <MapView
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: 12.9357,
                            longitude: 77.548,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <Marker
                            coordinate={markerPosition}
                            title="Sri Sai PG"
                            description="Drag me!"
                            draggable
                            onDragEnd={onMarkerDragEnd}
                        />
                    </MapView>
                </View>

                <View style={{
                    height: 70,
                    width: '90%',
                    marginTop: 15,
                    marginHorizontal: 20,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: COLORS.gray2
                }}>
                    <View>
                        <Text style={{ fontSize: 18, marginHorizontal: 10 }}>Contact Details:</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='mail' color={COLORS.primary} size={22} style={{
                            marginTop: 7,
                            marginHorizontal: 10,
                        }} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            marginTop: 11,
                            marginHorizontal: 0,
                            textAlign: 'justify',
                        }}>srisaipgbsk@gmail.com</Text>
                    </View>

                </View>
                <TouchableOpacity onPress={() => Alert.alert('Success')}
                    style={{
                        // flexDirection: 'row',
                        height: 40,
                        width: '33%',
                        marginTop: 35,
                        marginHorizontal: 130,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: COLORS.gray2,
                        backgroundColor: COLORS.primary
                    }}>
                    <Text style={{
                        fontSize: 22,
                        color: 'white',
                        textAlign: 'center',
                        marginTop: 5
                    }}> Connect</Text>

                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Room1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        height: 45,
    },
    backIcon: {
        marginLeft: 10
    },
    titleTextContainer: {
        marginHorizontal: 140
    },
    titleText: (color, top) => ({
        fontWeight: "500",
        fontSize: SIZES.xLarge,
        marginTop: top,
        color: color,
        marginLeft: -10,
    }),

    chooseDonation: {
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'normal',
        margin: 0,
        marginHorizontal: 20,
        marginTop: 24

    },
    ngoImg: {
        height: 180,
        width: "60%",
        resizeMode: 'cover',
        borderRadius: 20,
        // aspectRatio: 1
    },
    ngoImgContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginHorizontal: 22,
        height: 160,
        width: "89%",
        borderRadius: 20,
        // borderWidth: 1
    },


})
