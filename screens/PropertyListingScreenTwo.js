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

const Checkbox = ({ label, selected, onSelect }) => (
  <TouchableOpacity style={styles.checkbox} onPress={onSelect}>
    <View style={[styles.checkboxSquare, selected && styles.checkboxSquareSelected]}>
      {selected && <Text style={styles.checkboxIcon}>✓</Text>}
    </View>
    <Text style={styles.checkboxLabel}>{label}</Text>
  </TouchableOpacity>
);

const PropertyScreenListingTwo = () => {
  const navigation = useNavigation();

  const [selectedProperties, setSelectedProperties] = useState([]);

  const handlePropertySelect = (property) => {
    const isSelected = selectedProperties.includes(property);
    let updatedProperties;
    if (isSelected) {
      updatedProperties = selectedProperties.filter(item => item !== property);
    } else {
      updatedProperties = [...selectedProperties, property];
    }
    setSelectedProperties(updatedProperties);
  };

  const handleContinuePress = () => {
    if (selectedProperties.length > 0) {
      navigation.navigate("PropertyListingThree");
    } else {
      Alert.alert("Please select at least one option");
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
          Please enter your property details
        </Text>
      </View>


      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", padding: 20 }}>
        Select amenties you have 
        </Text>
        <View style={styles.checkboxGroup}>
          <Checkbox
            label="Air Conditioner"
            selected={selectedProperties.includes("Air Conditioner")}
            onSelect={() => handlePropertySelect("Air Conditioner")}
          />
          <Checkbox
            label="Television"
            selected={selectedProperties.includes("Television")}
            onSelect={() => handlePropertySelect("Television")}
          />
           <Checkbox
            label="WiFi"
            selected={selectedProperties.includes("WiFi")}
            onSelect={() => handlePropertySelect("WiFi")}
          />
           <Checkbox
            label="Modular Kitchen"
            selected={selectedProperties.includes("Modular Kitchen")}
            onSelect={() => handlePropertySelect("Modular Kitchen")}
          />
          <Checkbox
            label="Geyser"
            selected={selectedProperties.includes("Geyser")}
            onSelect={() => handlePropertySelect("Geyser")}
          />
           <Checkbox
            label="Parking"
            selected={selectedProperties.includes("Parking")}
            onSelect={() => handlePropertySelect("Parking")}
          />
          <Checkbox
            label="Security"
            selected={selectedProperties.includes("Security")}
            onSelect={() => handlePropertySelect("Security")}
          />
            <Checkbox
            label="Elevator"
            selected={selectedProperties.includes("Elevator")}
            onSelect={() => handlePropertySelect("Elevator")}
          />
          
        </View>
      </View>


      <View
        className="form space-y-2 mx-16 my-8"
        style={{ marginTop: 130, marginLeft: 60 }}
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

export default PropertyScreenListingTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 30,
  },
  checkboxSquare: {
    height: 20,
    width: 20,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxSquareSelected: {
    backgroundColor: "#AA336A",
  },
  checkboxIcon: {
    color: "white",
    fontSize: 16,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  checkboxGroup: {
    marginTop: 10,
  },
  buttonStyling: {
    backgroundColor: "#AA336A",
    borderRadius: 30,
    height: 50,
  },
});
