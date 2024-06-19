import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const PropertyScreenListingFour = () => {
    const navigation = useNavigation();
    const [flatNo, setFlatNo] = useState("");
    const [street, setStreet] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    
    const handleContinuePress = () => {
        if (flatNo && street && state && country) {
            // Display alert
            Alert.alert(
                "Success",
                "Property published successfully!",
                [
                    {
                        text: "OK",
                        onPress: () => {
                            // Navigate to home screen
                            navigation.navigate("Home");
                        }
                    }
                ],
                { cancelable: false }
            );
        } else {
            Alert.alert("Please fill in all the fields");
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="bg-400 p-2 w-10 rounded-tr-2xl rounded-bl-2xl ml-4"
                    style={{ backgroundColor: "#AA336A", marginTop: 15 }}
                >
                    <ArrowLeftIcon size="20" color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 40 }}>
                <Text
                    style={{
                        fontSize: 26,
                        fontWeight: "bold",
                        padding: 10,
                        color: "#AA336A",
                    }}
                >
                    Please enter your property details
                </Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", padding: 20 }}>
                    Where is your property located
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Flat/House Number"
                    value={flatNo}
                    onChangeText={setFlatNo}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Street"
                    value={street}
                    onChangeText={setStreet}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="State"
                    value={state}
                    onChangeText={setState}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Country"
                    value={country}
                    onChangeText={setCountry}
                />
            </View>

            <View
                className="form space-y-2 mx-16 my-8"
                style={{ marginTop: 100, marginLeft: 60 }}
            >
                <Button
                    title="Publish"
                    onPress={handleContinuePress}
                    buttonStyle={styles.buttonStyling}
                />
            </View>
        </SafeAreaView>
    );
};

export default PropertyScreenListingFour;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    inputContainer: {
        marginLeft: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        width: 350
    },
    input: {
        height: 60,
        fontSize: 16,
    },
    buttonStyling: {
        backgroundColor: "#AA336A",
        borderRadius: 30,
        height: 50,
    },
});
