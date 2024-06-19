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

const RadioButton = ({ label, selected, onSelect }) => (
  <TouchableOpacity style={styles.radioButton} onPress={onSelect}>
    <View style={styles.radioCircle}>
      {selected && <View style={styles.selectedRadioCircle} />}
    </View>
    <Text style={styles.radioLabel}>{label}</Text>
  </TouchableOpacity>
);

const PreferenceScreen = () => {
  const navigation = useNavigation();

  const [genderPreference, setGenderPreference] = useState(null);
  const [occupationPreference, setOccupationPreference] = useState(null);

  const handleGenderPreferenceSelect = (preference) => {
    setGenderPreference(preference);
  };

  const handleOccupationPreferenceSelect = (preference) => {
    setOccupationPreference(preference);
  };

  const handleContinuePress = () => {
    if (genderPreference && occupationPreference) {
      navigation.navigate("PreferenceTwo");
    } else {
      Alert.alert("Please select both gender and occupation preferences.");
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
          {" "}
          Help us find you the best roommate
        </Text>
      </View>

      {/* Gender Preference */}

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", padding: 20 }}>
          Tell us your gender preferences
        </Text>
        <View style={styles.radioGroup}>
          <RadioButton
            label="Male"
            selected={genderPreference === "male"}
            onSelect={() => handleGenderPreferenceSelect("male")}
          />
          <RadioButton
            label="Female"
            selected={genderPreference === "female"}
            onSelect={() => handleGenderPreferenceSelect("female")}
          />
          <RadioButton
            label="Other"
            selected={genderPreference === "Other"}
            onSelect={() => handleGenderPreferenceSelect("Other")}
          />
        </View>
      </View>

      {/* Occupation Preference */}

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", padding: 20 }}>
          Tell us your Occupation preferences
        </Text>
        <View style={styles.radioGroup}>
          <RadioButton
            label="Professional"
            selected={occupationPreference === "Professional"}
            onSelect={() => handleOccupationPreferenceSelect("Professional")}
          />
          <RadioButton
            label="Student"
            selected={occupationPreference === "Student"}
            onSelect={() => handleOccupationPreferenceSelect("Student")}
          />
          <RadioButton
            label="Other"
            selected={occupationPreference === "Other"}
            onSelect={() => handleOccupationPreferenceSelect("Other")}
          />
        </View>
      </View>

      <View
        className="form space-y-2 mx-16 my-8"
        style={{ marginTop: 100, marginLeft: 60 }}
      >
        <Button
          title="Continue"
          onPress={handleContinuePress}
          buttonStyle={styles.buttonStyling}
        />
      </View>
    </SafeAreaView>
  );
};

export default PreferenceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 30,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  selectedRadioCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#AA336A",
  },
  radioLabel: {
    fontSize: 16,
  },
  radioGroup: {
    marginTop: 10,
  },
  buttonStyling: {
    backgroundColor: "#AA336A",
    borderRadius: 30,
    height: 50,
  },
});
