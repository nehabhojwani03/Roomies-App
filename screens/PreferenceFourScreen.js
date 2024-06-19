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

const PreferenceFourScreen = () => {
  const navigation = useNavigation();

  const [smokingPreference, setsmokingPreference] = useState(null);
  const [partyPreference, setpartyPreference] = useState(null);

  const handlesmokingPreferenceSelect = (preference) => {
    setsmokingPreference(preference);
  };

  
  const handlepartyPreferenceSelect = (preference) => {
      setpartyPreference(preference);
  };


  const handleContinuePress = () => {
    if (smokingPreference && partyPreference) {
      navigation.navigate("PreferenceFive");
    } else {
      Alert.alert("Please select both Smoking and Party preferences.");
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
        <Text style={{fontSize: 18, fontWeight:'bold', padding: 20}}>Smoking preferences</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            label="Never"
            selected={smokingPreference === "Never"}
            onSelect={() => handlesmokingPreferenceSelect("Never")}
          />
          <RadioButton
            label="Occasionally"
            selected={smokingPreference === "Occasionally"}
            onSelect={() => handlesmokingPreferenceSelect("Occasionally")}
          />
          <RadioButton
            label="Regulary"
            selected={smokingPreference === "Regulary"}
            onSelect={() => handlesmokingPreferenceSelect("Regulary")}
          />
          
        </View>
      </View>

    {/* pet Preference */}

      <View style={{marginTop: 40}}>
        <Text style={{fontSize: 18, fontWeight:'bold', padding: 20}}>Party preferences</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            label="Weekends"
            selected={partyPreference === "Weekends"}
            onSelect={() => handlepartyPreferenceSelect("Weekends")}
          />
          <RadioButton
            label="Occasionally"
            selected={partyPreference === "Occasionally"}
            onSelect={() => handlepartyPreferenceSelect("Occasionally")}
          />
          <RadioButton
            label="Daily"
            selected={partyPreference === "Daily"}
            onSelect={() => handlepartyPreferenceSelect("Daily")}
          />
          <RadioButton
            label="Rarely"
            selected={partyPreference === "Rarely"}
            onSelect={() => handlepartyPreferenceSelect("Rarely")}
          />
        </View>
      </View>


      <View
          className="form space-y-2 mx-16 my-8"
          style={{marginTop: 100,  marginLeft: 60}}
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

export default PreferenceFourScreen;

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
