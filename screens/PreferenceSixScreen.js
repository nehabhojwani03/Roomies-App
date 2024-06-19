import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { CheckBox } from "react-native-elements";

const PreferenceSixScreen = () => {
  const navigation = useNavigation();
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const handleCheckboxToggle = (hobby) => {
    const updatedHobbies = selectedHobbies.includes(hobby)
      ? selectedHobbies.filter((selectedHobby) => selectedHobby !== hobby)
      : [...selectedHobbies, hobby];

    setSelectedHobbies(updatedHobbies);
  };

  const handleDonePress = () => {
    if (selectedHobbies.length >= 3) {
      Alert.alert(
        "Success!!",
        "Your Preferences are edited successfully",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("Profile");
            },
          },
        ],
      );
    } else {
      Alert.alert(
        "Error",
        "Please select at least 3 hobbies",
        [
          {
            text: "OK",
            onPress: () => {},
          },
        ],
      );
    }
  }

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

      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            padding: 10,
            color: "#AA336A",
          }}
        >
          {" "}
          Please let us Know your hobbies
        </Text>
      </View>

      <CheckBox
        title="Reading"
        checked={selectedHobbies.includes("Reading")}
        onPress={() => handleCheckboxToggle("Reading")}
      />

      <CheckBox
        title="Music"
        checked={selectedHobbies.includes("Music")}
        onPress={() => handleCheckboxToggle("Music")}
      />

      <CheckBox
        title="Driving"
        checked={selectedHobbies.includes("Driving")}
        onPress={() => handleCheckboxToggle("Driving")}
      />

      <CheckBox
        title="Travelling"
        checked={selectedHobbies.includes("Travelling")}
        onPress={() => handleCheckboxToggle("Travelling")}
      />

      <CheckBox
        title="Dancing"
        checked={selectedHobbies.includes("Dancing")}
        onPress={() => handleCheckboxToggle("Dancing")}
      />

      <CheckBox
        title="Watching Movies"
        checked={selectedHobbies.includes("Watching Movies")}
        onPress={() => handleCheckboxToggle("Watching Movies")}
      />

      <CheckBox
        title="Hiking"
        checked={selectedHobbies.includes("Hiking")}
        onPress={() => handleCheckboxToggle("Hiking")}
      />

      <CheckBox
        title="Singing"
        checked={selectedHobbies.includes("Singing")}
        onPress={() => handleCheckboxToggle("Singing")}
      />

      <CheckBox
        title="Painting"
        checked={selectedHobbies.includes("Painting")}
        onPress={() => handleCheckboxToggle("Painting")}
      />

      <CheckBox
        title="Cooking"
        checked={selectedHobbies.includes("Cooking")}
        onPress={() => handleCheckboxToggle("Cooking")}
      />

      <View
        className="form space-y-2 mx-16 my-8"
        style={{ marginTop: 20, marginLeft: 60 }}
      >
        <Button
         title="Done"
         onPress={handleDonePress}
          buttonStyle={styles.buttonStyling} />
      </View>
    </SafeAreaView>
  );
};

export default PreferenceSixScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
  },
  buttonStyling: {
    backgroundColor: "#AA336A",
    borderRadius: 30,
    height: 50,
  },
});
