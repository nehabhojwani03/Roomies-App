import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES } from '../../constants'
import { Entypo, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const Roommate3 = () => {
    const navigation = useNavigation()
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
                        <Text style={styles.titleText(COLORS.primary, SIZES.xSmall - 5)}>Roommate</Text>
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
                        source={require('../../assets/images/Profile3.jpg')}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <View>
                        <Text style={styles.chooseDonation}>
                            Timothy
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.chooseDonation}>
                            20 Years
                        </Text>
                    </View>

                </View>

                <View style={{
                    height: 170,
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
                            width: '20%',
                            marginTop: 15,
                            marginHorizontal: 20,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: COLORS.gray2
                        }}>
                            <View style={{ marginTop: 3 }}>
                                <FontAwesome name="male" size={20} color="black" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Male
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
                            {/* <View style={{ marginTop: 3 }}>
                                <FontAwesome name="female" size={20} color="black" />
                            </View> */}
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Student
                                </Text>

                            </View>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            height: 30,
                            width: '27%',
                            marginTop: 15,
                            marginHorizontal: 19,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: COLORS.gray2
                        }}>
                            {/* <View style={{ marginTop: 3 }}>
                                <FontAwesome name="female" size={20} color="black" />
                            </View> */}
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Unmarried
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
                                <FontAwesome5 name="dog" size={18} color="black" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Dogs
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
                            {/* <View style={{ marginTop: 3 }}>
                                <FontAwesome name="female" size={20} color="black" />
                            </View> */}
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Non-veg
                                </Text>

                            </View>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            height: 30,
                            width: '34%',
                            marginTop: 15,
                            marginHorizontal: 19,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: COLORS.gray2
                        }}>
                            <View style={{ marginTop: 3 }}>
                                <Entypo name="drink" size={20} color="black" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Occationally
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
                                <MaterialIcons name="smoke-free" size={24} color="black" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Sober
                                </Text>

                            </View>


                        </View>

                        <View style={{
                            flexDirection: 'row',
                            height: 30,
                            width: '28%',
                            marginTop: 15,
                            marginHorizontal: -10,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: COLORS.gray2
                        }}>
                            <View style={{ marginTop: 3 }}>
                                <MaterialCommunityIcons name="human-female-dance" size={24} color="black" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, marginHorizontal: 5, marginTop: 2 }}>
                                    Dancing
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
                        }}>timothy@gmail.com</Text>
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

export default Roommate3

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
        marginLeft: -41,
    }),

    chooseDonation: {
        fontSize: 24,
        fontWeight: '600',
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
