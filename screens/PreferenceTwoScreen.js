import React , {useState} from "react";
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

const PreferenceTwoScreen = () => {
  const navigation = useNavigation();

  const [martialPreference, setMartialPreference] = useState(null);
  const [petPreference, setPetPreference] = useState(null);

  const handleMartialPreferenceSelect = (preference) => {
    setMartialPreference(preference);
  };

  
  const handlePetPreferenceSelect = (preference) => {
    setPetPreference(preference);
  };


  const handleContinuePress = () => {
    if (martialPreference && petPreference) {
      navigation.navigate("PreferenceThree");
    } else {
      Alert.alert("Please select both Martial and Pet preferences.");
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
      
      <View style={{marginTop: 40}}>
        <Text style={{fontSize: 26, fontWeight: 'bold', padding: 10, color: '#AA336A'}}> Share your personal details to find roommate</Text>
      </View>


    {/* Divorce Preference */}

      <View style={{marginTop: 40}}>
        <Text style={{fontSize: 18, fontWeight:'bold', padding: 20}}>Martial status preferences</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            label="Married"
            selected={martialPreference === "married"}
            onSelect={() => handleMartialPreferenceSelect("married")}
          />
          <RadioButton
            label="Unmarried"
            selected={martialPreference === "unmarried"}
            onSelect={() => handleMartialPreferenceSelect("unmarried")}
          />
          <RadioButton
            label="Divorce"
            selected={martialPreference === "divorce"}
            onSelect={() => handleMartialPreferenceSelect("divorce")}
          />
          
        </View>
      </View>

    {/* pet Preference */}

      <View style={{marginTop: 40}}>
        <Text style={{fontSize: 18, fontWeight:'bold', padding: 20}}>Pet preferences</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            label="Yes"
            selected={petPreference === "yes"}
            onSelect={() => handlePetPreferenceSelect("yes")}
          />
          <RadioButton
            label="No"
            selected={petPreference === "No"}
            onSelect={() => handlePetPreferenceSelect("No")}
          />
          
        </View>
      </View>


      <View
          className="form space-y-2 mx-16 my-8"
          style={{marginTop: 130,  marginLeft: 60}}
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

export default PreferenceTwoScreen;

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
    marginLeft: 30
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
