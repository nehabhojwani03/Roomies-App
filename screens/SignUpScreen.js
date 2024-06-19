import { View, Text, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import constant from '../constant';


export default function SignUpScreen({route}) {
    const navigation = useNavigation();
    const [getName, setName] = useState("")
    const [getUserName, setUserName] = useState("")
    const [getPhone, setPhone] = useState("")
    const [getEmail, setEmail] = useState("")
    const [getPassText, setPassText] = useState("")
    //const { type } = route.params

    const signUp = () => {
        axios({
            method: 'post',
            url: constant.BASE_URL + '/auth/register',
            headers: { 'Content-Type': 'application/json', 'charset': 'utf-8' },
            data: {
                name: getName,
                username: getUserName,
                phoneno: getPhone,
                email: getEmail,
                password: getPassText
            },
        }).then((apiResponse) => {
            navigation.navigate('Find')
            console.log(apiResponse.data);
        }).catch((err) => {
            console.log();
            console.log(err);
        });
    }



  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="p-2 rounded-tr-3xl rounded-bl-2xl ml-5" style={{backgroundColor: '#AA336A'}}
            >
                <ArrowLeftIcon size="20" color="white" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/doodle2.jpg')} 
                style={{width: 190, height: 120}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 px-8 pt-8"
        style={{borderTopLeftRadius: 70, borderTopRightRadius: 70, backgroundColor: '#ffffff'}}
      >
        <ScrollView
            automaticallyAdjustKeyboardInsets={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flex: 1
            }}
            className="form space-y-1"
            >
        
            
            <Text className="text-gray-700 ml-4">UserName</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                value={getUserName}
                onChangeText={setUserName}
                placeholder='Enter Username'
             
            />
            <Text className="text-gray-700 ml-4">Full Name</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                value={getName}
                onChangeText={setName}
                placeholder='Enter Name'
             
            />
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                value={getEmail}
                onChangeText={setEmail}
                placeholder='Enter Email'
            
            />
            <Text className="text-gray-700 ml-4">Phoneno</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                value={getPhone}
                onChangeText={setPhone}
                placeholder='Enter Name'
             
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-4"
                secureTextEntry
                value={getPassText}
                onChangeText={setPassText}
                placeholder='Enter Password'

            />
            <TouchableOpacity
            onPress={signUp}
                className="py-3 bg-400 rounded-xl" style={{backgroundColor: '#AA336A'}}
            >
                <Text className="font-xl font-bold text-center text-700" style={{color: '#FAF9F6'}}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-500" style={{color: '#AA336A'}}> Login </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>

      
      </View>
    </View>
  )
}