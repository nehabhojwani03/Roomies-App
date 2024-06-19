import {View, Text, StyleSheet} from 'react-native';

const ChatScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Chat Screen</Text>
        </View>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})