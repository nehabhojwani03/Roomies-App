import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { themeColors } from "../theme";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";


const LookingForScreen = () => {
  const navigation = useNavigation();

  const handleroommatePress = () => {
    navigation.navigate("Home");
  };

  const handlepropertyPress = () => {
    navigation.navigate("PropertyListing");
  };
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            style={{ backgroundColor: "#AA336A" }}
          >
            <ArrowLeftIcon size="20" color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/doodle5.jpg")}
            style={{ width: 300, height: 200 }}
          />
        </View>
      </SafeAreaView>

      <View style={{ marginTop: 70, marginLeft: 40 }}>
        <Text style={{ fontSize: 26, fontWeight: "bold", color: "#AA336A" }}>
          {" "}
          What are you looking for{" "}
        </Text>
      </View>

      <LinearGradient colors={["#F7DBA7", "#F0AB86"]} style={styles.card}>
        <TouchableOpacity onPress={handlepropertyPress}>
          <View>
            <Image
              source={require("../assets/images/house.png")}
              style={styles.Img}
            />
            <Text style={styles.Text}> Want to list your space</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient colors={["#F7DBA7", "#F0AB86"]} style={styles.card1}>
        <TouchableOpacity onPress={handleroommatePress}>
          <View>
            <Image
              source={require("../assets/images/roommate.png")}
              style={styles.Img}
            />
            <Text style={styles.Text}> Find a Roommate/Room</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default LookingForScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f5f5dc",
    padding: 16,
    width: 150,
    height: 250,
    alignItems: "center",
    marginLeft: 35,
    marginTop: 40,
    borderRadius: 50,
  },
  card1: {
    backgroundColor: "#f5f5dc",
    padding: 16,
    width: 150,
    height: 250,
    alignItems: "center",
    marginLeft: 230,
    marginTop: -250,
    borderRadius: 50,
  },

  Img: {
    width: 90,
    height: 90,
    marginLeft: 10,
    marginTop: 20,
  },
  Text: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    padding: 10,
  },
});
