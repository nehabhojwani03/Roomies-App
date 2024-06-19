import {View, Text, StyleSheet} from 'react-native'
import React from 'react'


const PublishPropertyScreen = () =>{
    return(
        <View>
            <Text>publish Screen</Text>
        </View>
    );
}

export default PublishPropertyScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      width: "100%",
      backgroundColor: "#D3D3D3",
    },
    text: {
        padding: 10,
        fontSize: 16,
        fontWeight: "bold",
        marginTop: -44,
        marginLeft: 53,
      },
});