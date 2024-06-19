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

const PropertyScreenListingThree = () => {
    const navigation = useNavigation();
    const [inputValue, setInputValue] = useState("");
    const handleContinuePress = () => {
        if (inputValue.length > 0) {
          navigation.navigate("PropertyListingFour");
        } else {
          Alert.alert("Please enter details");
        }
      };

    return(
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
            {" "}
            Please enter your property details
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter price of your property"
            value={inputValue}
            onChangeText={setInputValue}
          />
        </View>

       <View style={{marginTop: 60, marginLeft: 5}}>
        <Text style={{fontSize: 20,
              fontWeight: "bold",
              padding: 10,
              color: "#AA336A",}}>
            Upload Photos of your property
        </Text>
        <View style={{marginTop:-10}}>
        <Text style={{fontSize: 14,
              fontWeight: "bold",
              padding: 10,
              color: "#AA336A",}}>
            Max 10 photos
        </Text>
        </View>
       </View>

            <View>
                <Button
                    title="Upload Image"
                    buttonStyle={styles.uploadButton}
                />
            </View>
       <View
        className="form space-y-2 mx-16 my-8"
        style={{ marginTop: 180, marginLeft: 60 }}
      >
        <Button
          title="Continue"
          onPress={handleContinuePress}
          buttonStyle={styles.buttonStyling}
        />
      </View>
        </SafeAreaView>


    )
}

export default PropertyScreenListingThree;

const styles= StyleSheet.create({
    inputContainer: {
        marginTop: 50,
        marginLeft: 9,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 400
      },
      input: {
        height: 40,
        fontSize: 16,
      },
      buttonStyling: {
        backgroundColor: "#AA336A",
        borderRadius: 30,
        height: 50,
      },
      uploadButton:{
        backgroundColor: "#AA336A",
        borderRadius: 10,
        height: 50,
        width: 150,
        marginLeft: 200,
      }
});