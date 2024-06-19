import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { Button } from "react-native-elements";
import axios from "axios";
import AppLoading from "expo-app-loading";
import constant from "../constant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePicker from "react-native-image-picker";

const EditProfileScreen = () => {
    
  const navigation = useNavigation();

  const [loading, setIsLoading] = useState(true);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhone] = useState();
  const [token, setToken] = useState("");

  const getToken = () => {
    setIsLoading(true);
    AsyncStorage.getItem("userdata")
      .then((token) => {
        if (token != null) {
          console.log("Something" + token);
          setToken(token);
          getData(token);
          // setIsLoading(false);
        }
      })
      .catch((err) => console.log("Profle" + err));
  };

  const getData = (token) => {
    setIsLoading(true);
    axios({
      method: "get",
      url: constant.BASE_URL + "/auth/me",
      headers: { Authorization: token },
    })
      .then((apiResponse) => {
        setIsLoading(false);
        const { username, name, email, phoneno } = apiResponse.data.data;

        console.log(username);
        setName(name);
        setUsername(username);
        setEmail(email);
        setPhone(phoneno);
      })
      .catch((err) => {
        console.log("Profile" + err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener("focus", () => {
      // Code to run when the screen comes into focus (when returning from the next screen)
      console.log("Returned to MyScreen from the next screen");
      getToken();
    });

    // Optional: You can also handle data passed back from the next screen
    const unsubscribeBlur = navigation.addListener("blur", () => {
      console.log("Screen is blurred (navigating away)");
      getToken();
    });

    // Cleanup function (optional)
    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation]);

  const updateHandler = () => {
    setIsLoading(true);
    axios({
      method: "put",
      url: constant.BASE_URL + "/auth/updatedetails",
      headers: {
        "Content-Type": "application/json",
        charset: "utf-8",
        Authorization: token,
      },
      data: {
        name: name,
        email: email,
        phoneno: phoneno,
      },
    })
      .then((apiResponse) => {
        console.log(apiResponse.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Update" + err);
        setIsLoading(false);
      });
  };

  const [profileImage, setProfileImage] = useState(
    require("../assets/images/user.png")
  );

  const showImagePickerOptions = (launchFunction) => {
    const options = {
      mediaType: "photo",
      quality: 0.7,
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    launchFunction(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        setProfileImage(source);
      }
    });
  };

  const handleEditPress = () => {
    Alert.alert("Edit Profile Picture", "Choose an option", [
      {
        text: "Take Photo",
        onPress: () => showImagePickerOptions(ImagePicker.launchCamera),
      },
      {
        text: "Choose from Gallery",
        onPress: () => showImagePickerOptions(ImagePicker.launchImageLibrary),
      },
      {
        text: "Delete",
        onPress: () => setProfileImage(require("../assets/images/user.png")),
        style: "destructive",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  return (
    
    <SafeAreaView>
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-400 p-2 w-10 rounded-tr-2xl rounded-bl-2xl ml-4"
            style={{ backgroundColor: "#AA336A", marginTop: 15 }}
          >
            <ArrowLeftIcon size="20" color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ padding: 20, alignItems: "center" }}>
            <Image
              style={styles.profileImg}
              source={require("../assets/images/user.png")}
            />
            <TouchableOpacity onPress={handleEditPress}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: "white",
                  marginTop: -30,
                  marginLeft: 75,
                  borderRadius: 20,
                }}
              >
                <Ionicons
                  name="create-outline"
                  size={25}
                  marginTop={1}
                  marginLeft={4}
                  style={styles.icons}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-7 font-bold ">Username</Text>
          <TextInput
            value={username}
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-4, mx-4"
            style={{ padding: 30 }}
            // placeholder='Enter Name'
          />
          <Text className="text-gray-700 ml-7 font-bold ">Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-4, mx-4"
            style={{ padding: 30 }}
          />

          <Text className="text-gray-700 ml-7 font-bold ">Bio</Text>
          <TextInput
            value={bio}
            onChangeText={setName}
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-4, mx-4"
            style={{ padding: 30 }}
          />

          <Text className="text-gray-700 ml-7 font-bold ">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-4, mx-4"
            style={{ padding: 30 }}
          />

          <View>
            <Text className="text-gray-700 ml-7 font-bold ">Phone Number</Text>
            <TextInput
              value={phoneno}
              onChangeText={setPhone}
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-4, mx-4"
              style={{ padding: 30 }}
            />
          </View>
        </View>
        <View
          className="form space-y-2 mx-16 my-8"
          style={{ borderRadius: 20 }}
        >
          <Button
            title="Update"
            onPress={updateHandler}
            buttonStyle={styles.buttonStyling}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default EditProfileScreen;

const styles = StyleSheet.create({
  icons: {
    padding: 5,
  },
  profileImg: {
    height: 130,
    width: 130,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderColor: "#877dfa",
    marginTop: 20,
  },
  buttonStyling: {
    backgroundColor: "#AA336A",
    borderRadius: 30,
    height: 50,
  },
});
