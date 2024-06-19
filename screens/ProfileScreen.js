import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import ImagePicker from "react-native-image-picker";
import axios from "axios";
import constant from "../constant";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [loading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  const getToken = () => {
    setIsLoading(true);
    AsyncStorage.getItem("userdata")
      .then((token) => {
        if (token != null) {
          // setIsLoading(false)
          console.log("Something" + token);
          setToken(token);
          getData(token);
        }
      })
      .catch((err) => {
        console.log("Profle" + err);
        setIsLoading(false);
      });
  };

  const getData = (token) => {
    setIsLoading(true);
    axios({
      method: "get",
      url: constant.BASE_URL + "/auth/me",
      headers: { Authorization: token },
    })
      .then((apiResponse) => {
        const { name } = apiResponse.data.data;
        setName(name);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Profile" + err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  const logout = (id) => {
    console.log(id);
    if (id == 6) {
      console.log("Logout");
      AsyncStorage.removeItem("userdata")
        .then(() => {
          console.log("Token Removed");
          navigation.navigate("Login");
        })
        .catch((error) => console.log("Profile: " + error));
    }
  };
  const data = [
    { id: "1", title: "Profile", icon: "person-circle-outline" },
    { id: "2", title: "Privacy & Settings", icon: "lock-closed-outline" },
    { id: "3", title: "Preferences", icon: "heart" },
    { id: "4", title: "Listings", icon: "layers-outline" },
    // { id: "5", title: "Co-living Management Tools", icon: "flash-outline" },
    { id: "6", title: "Logout", icon: "log-out" },
  ];

  const ListItem = ({ id, title, icon, fullWidth }) => {
    return (
      <TouchableOpacity onPress={() => handleItemClick(id, title)}>
        <View
          style={[styles.itemCard, fullWidth ? styles.fullWidthCard : null]}
        >
          <Ionicons name={icon} size={30} color="black" />
          <Text style={styles.itemTitle}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleItemClick = (id,title) => {
    if (title === "Profile") {
      navigation.navigate("EditProfile", { headerColor: "#AA336A" });
    }
    if (title === "Privacy & Settings") {
      navigation.navigate("Privacy");
    }
    if (title === "Preferences") {
      navigation.navigate("Preference");
    }
    if (title === "Listings") {
      navigation.navigate("PropertyListing");
    }
    if (title === "Co-living Management Tools") {
      navigation.navigate("Tools");
    }
    if (title === "Logout") {
      Alert.alert(
        "Logout",
        "Are you sure you want to logout",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              logout(id)
            },
          },
        ],
        { cancelable: true }
      );
    }
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
      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      <View style={styles.container}>
        <LinearGradient colors={["#F7DBA7", "#F0AB86"]} style={styles.card}>
          <View>
            <Image
              source={require("../assets/images/user.png")}
              style={styles.userImg}
            />
          </View>

          <TouchableOpacity onPress={handleEditPress}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.usernameText}>{name}</Text>
          </View>
        </LinearGradient>
      </View>

      <FlatList
        style={{ padding: 10 }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            id={item.id}
            title={item.title}
            icon={item.icon}
            fullWidth={item.fullWidth}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 270,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#f5f5dc",
    padding: 16,
    width: 380,
    height: 210,
    alignItems: "center",
    borderRadius: 50,
    marginTop: -280,
    position: "fixed",
  },
  userImg: {
    width: 100,
    height: 100,
  },
  usernameText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 15,
  },
  editText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#AA336A",
    marginLeft: 5,
    marginTop: 10,
  },
  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fullWidthCard: {
    width: "100%",
  },
  itemTitle: {
    marginLeft: 15,
    fontSize: 18,
  },
  cardText: {
    fontSize: 16,
    textAlign: "center",
  },
  icon: {
    width: 50, // adjust width as needed
    height: 50, // adjust height as needed
    marginBottom: 10,
    alignSelf: "center",
  },
});
