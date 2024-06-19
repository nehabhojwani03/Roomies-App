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

const PreferenceFiveScreen = () => {
  const navigation = useNavigation();

  const [roomPreference, setroomPreference] = useState(null);
  const [guestPreference, setguestPreference] = useState(null);

  const handlesroomPreferenceSelect = (preference) => {
    setroomPreference(preference);
  };

  
  const handleguestPreferenceSelect = (preference) => {
      setguestPreference(preference);
  };


  const handleContinuePress = () => {
    if (roomPreference && guestPreference) {
      navigation.navigate("PreferenceSix");
    } else {
      Alert.alert("Please select both Room cleaning and Guest preferences.");
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
        <Text style={{fontSize: 18, fontWeight:'bold', padding: 20}}>Cleaning room preferences</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            label="Daily"
            selected={roomPreference === "Daily"}
            onSelect={() => handlesroomPreferenceSelect("Daily")}
          />
          <RadioButton
            label="Alternate Days"
            selected={roomPreference === "Alternate Days"}
            onSelect={() => handlesroomPreferenceSelect("Alternate Days")}
          />
          <RadioButton
            label="Twice a week"
            selected={roomPreference === "Twice a week"}
            onSelect={() => handlesroomPreferenceSelect("Twice a week")}
          />
          <RadioButton
            label="Once a week"
            selected={roomPreference === "Once a week"}
            onSelect={() => handlesroomPreferenceSelect("Once a week")}
          />
          
        </View>
      </View>

    {/* pet Preference */}

      <View style={{marginTop: 40}}>
        <Text style={{fontSize: 18, fontWeight:'bold', padding: 20}}>How Often Can guest come</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            label="Daily"
            selected={guestPreference === "Daily"}
            onSelect={() => handleguestPreferenceSelect("Daily")}
          />
         <RadioButton
            label="Twice a week"
            selected={guestPreference === "Twice a week"}
            onSelect={() => handleguestPreferenceSelect("Twice a week")}
          />
          <RadioButton
            label="Once a week"
            selected={guestPreference === "Once a week"}
            onSelect={() => handleguestPreferenceSelect("Once a week")}
          />
          <RadioButton
            label="Once a month"
            selected={guestPreference === "Once a month"}
            onSelect={() => handleguestPreferenceSelect("Once a month")}
          />
        </View>
      </View>


      <View
          className="form space-y-2 mx-16 my-8"
          style={{marginTop: 50,  marginLeft: 60}}
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

export default PreferenceFiveScreen;

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
