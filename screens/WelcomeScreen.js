import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();
    return (
        <View className="flex-1" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 flex justify-around my-4">
                <Text
                    className="font-bold text-3xl text-center" style={{ color: '#AA336A', marginTop: 50 }}>
                    Welcome to Roomies!
                </Text>
                <Text
                    className="text-l text-center" style={{ color: '#111', marginTop: -100 }}>
                    Signup & find your perfect room partner
                </Text>

                <View className="flex-row justify-center">
                    <Image source={require("../assets/images/doodle1.jpg")}
                        style={{ width: 320, height: 300 }} />
                </View>
                <View className="space-y-10">
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        className="py-3 bg-400 mx-7 rounded-xl" style={{ backgroundColor: '#AA336A' }}>
                        <Text
                            className="text-xl font-bold text-center text-700" style={{ color: '#FAF9F6' }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <View className="flex-row justify-center">
                        <Text className="text-400 font-semibold" style={{ color: '#111', marginTop: -20 }}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="font-semibold text-400" style={{ color: '#AA336A', marginTop: -20 }}> Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}