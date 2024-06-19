import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native';


const ToolsScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>

      {/* Box-1 */}
      <Pressable onPress={() => navigation.navigate('ManageChores')}>
        <View style={{
          // flexDirection: 'row',
          backgroundColor: '#2A4D50',
          height: 120,
          width: '90%',
          alignSelf: "center",
          borderRadius: 24,
          marginTop: 58,
          borderColor: "#ffffff",
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.7,
          elevation: 10
        }}>
          <View>
            <Text style={{
              fontSize: 22,
              fontWeight: '600',
              color: 'white',
              marginHorizontal: 14,
              marginTop: 16
            }}>Manage Chores
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: 'white',
                marginHorizontal: 20,
                marginTop: 13
              }} >Efficient chore management  </Text>
              <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: 'white',
                marginHorizontal: 20,
                marginTop: 2
              }}>involves organizing tasks</Text>
              <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: 'white',
                marginHorizontal: 20,
                marginTop: 2
              }}  >tracking progress effectively. </Text>
            </View>
            <View style={{
              height: 75,
              width: 140,
              // borderWidth: 1,
              marginHorizontal: -15,
              marginTop: 6
            }}>
              <Image
                style={{
                  aspectRatio: 2,
                  height: 73,
                  width: 130,
                }}
                source={require('../assets/images/manage-chores.png')} />
            </View>
          </View>

        </View>
      </Pressable>

      {/* Box-2 */}
      <Pressable onPress={() => navigation.navigate('ManageTasks')}>
        <View style={{
          // flexDirection: 'row',
          backgroundColor: '#AA336A',
          height: 120,
          width: '90%',
          alignSelf: "center",
          borderRadius: 24,
          marginTop: 48,
          borderColor: "#ffffff",
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.7,
          elevation: 10
        }}>
          <View>
            <Text style={{
              fontSize: 23,
              fontWeight: '600',
              color: 'white',
              // marginHorizontal: 4,
              left: 120,
              marginTop: 16
            }}>Manage Tasks
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{
              height: 75,
              width: 140,
              // borderWidth: 1,
              marginHorizontal: -36,
              marginTop: 8
            }}>
              <Image
                style={{
                  aspectRatio: 2,
                  height: 73,
                  width: 130,
                }}
                source={require('../assets/images/manage-task.png')} />
            </View>
            <View>
              <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: 'white',
                marginHorizontal: 23,
                marginTop: 13
              }} >Efficient task management involves </Text>
              <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: 'white',
                marginHorizontal: 30,
                marginTop: 2
              }}  > prioritizing, scheduling and  </Text>
              <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: 'white',
                marginHorizontal: 30,
                marginTop: 2
              }}  > tracking progress effectively. </Text>
            </View>

          </View>
        </View>
      </Pressable>

      {/* Box-3 */}
      <Pressable onPress={() => navigation.navigate('ManageGroceries')}>
        <View style={{
          // flexDirection: 'row',
          backgroundColor: '#2A4D50',
          height: 120,
          width: '90%',
          alignSelf: "center",
          borderRadius: 24,
          marginTop: 48,
          borderColor: "#ffffff",
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.7,
          elevation: 10
        }}>
          <View>
            <Text style={{
              fontSize: 22,
              fontWeight: '600',
              color: 'white',
              marginHorizontal: 14,
              marginTop: 16
            }}>Manage Expense
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: 'white',
                marginHorizontal: 20,
                marginTop: 13
              }} >Manage expense efficiently </Text>
              <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: 'white',
                marginHorizontal: 20,
                marginTop: 2
              }}  >categorize, set budgets, track  </Text>
            </View>
            <View style={{
              height: 75,
              width: 140,
              // borderWidth: 1,
              marginHorizontal: -25,
              marginTop: 6
            }}>
              <Image
                style={{
                  aspectRatio: 2,
                  height: 79,
                  width: 140,
                }}
                source={require('../assets/images/manage-grocery.png')} />
            </View>
          </View>

        </View>
      </Pressable>

    </View>
  );
};

export default ToolsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center',
    // justifyContent : 'center'
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold'

  }
});
