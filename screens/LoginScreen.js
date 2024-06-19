import { View, Text, TouchableOpacity, Image, TextInput, KeyboardAvoidingViewey, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import constant from '../constant'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function LoginScreen() {
  const navigation = useNavigation();
  const [getText, setText] = useState("")
  const [getPassText, setPassText] = useState("")

  const login = () => {
    axios({
      method: 'post',
      url: constant.BASE_URL + '/auth/login',
      headers: { 'Content-Type': 'application/json', 'charset': 'utf-8' },
      data: {
        email: getText,
        password: getPassText

      },
    }).then((apiResponse) => {
      //  navigation.navigate('LookingFor')
      console.log(apiResponse.data.token);
      // this.storeData(apiResponse.data)
      handleAsyncStorage(apiResponse.data.token)
    }).catch((err) => {
      console.log();
      console.log(err);
      // setIsLoading(true);
    });
  }

  const handleAsyncStorage = (token) => {
    AsyncStorage.setItem('userdata', `Bearer ${token}`).then(() => {
      console.log("Token Saved")
      navigation.navigate('Home')

    }).catch(error => console.log("Login: " + error))
  }



  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={() => navigation.goBack()}
            className="bg-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4" style={{ backgroundColor: '#AA336A' }}>
            <ArrowLeftIcon size="20" color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image source={require('../assets/images/doodle4.jpg')}
            style={{ width: 220, height: 150 }} />
        </View>


      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 70, borderTopRightRadius: 70 }}
        className="flex-1 bg-white px-8 pt-8">
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="email"
            value={getText}
            onChangeText={setText}
            autoCapitalize={'none'}
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            secureTextEntry
            placeholder="password"
            value={getPassText}
            onChangeText={setPassText}
          />
          <TouchableOpacity className="flex items-end">
            <Text className="text-gray-700 mb-5">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={login}
            className="py-3 bg-yellow-400 rounded-xl" style={{ backgroundColor: '#AA336A' }}>
            <Text
              className="text-xl font-bold text-center text-gray-700"
              style={{ color: '#FAF9F6' }}
            >
              Login
            </Text>
          </TouchableOpacity>

        </View>

        <View className="flex-row justify-center mt-7">
          <Text className="font-semibold" style={{ color: '#111' }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text className="font-semibold" style={{ color: '#AA336A' }}> Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>

  )
}