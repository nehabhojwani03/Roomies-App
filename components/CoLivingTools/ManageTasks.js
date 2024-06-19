// import React, { useState, useEffect } from 'react';
// import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Modal, FlatList, Alert } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { COLORS, SIZES } from '../../constants';
// import { ArrowLeftIcon } from 'react-native-heroicons/solid';
// import { useNavigation } from '@react-navigation/native';
// import { Calendar } from 'react-native-calendars';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { FontAwesome } from '@expo/vector-icons';

// const ManageTasks = () => {
//     const navigation = useNavigation();
//     const [selected, setSelected] = useState('');
//     const [isModalVisible, setModalVisible] = useState(false);
//     const [taskTitle, setTaskTitle] = useState('');
//     const [taskDate, setTaskDate] = useState('');
//     const [taskTime, setTaskTime] = useState('');
//     const [taskDescription, setTaskDescription] = useState('');
//     const [taskTags, setTaskTags] = useState('');
//     const [tasks, setTasks] = useState([]);


//     useEffect(() => {
//         const loadTasks = async () => {
//             try {
//                 const savedTasks = await AsyncStorage.getItem('tasks');
//                 if (savedTasks) {
//                     setTasks(JSON.parse(savedTasks));
//                 }
//             } catch (error) {
//                 console.error('Failed to load tasks:', error);
//             }
//         };

//         loadTasks();
//     }, []);

//     useEffect(() => {
//         const saveTasks = async () => {
//             try {
//                 await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
//             } catch (error) {
//                 console.error('Failed to save tasks:', error);
//             }
//         };

//         saveTasks();
//     }, [tasks]);


//     const handleAddTask = () => {
//         const newTask = {
//             id: Math.random().toString(),
//             title: taskTitle,
//             date: taskDate,
//             time: taskTime,
//             description: taskDescription,
//             tags: taskTags.split(','),
//             completed: false,
//         };
//         setTasks([...tasks, newTask]);
//         setModalVisible(false);
//         setTaskTitle('');
//         setTaskDate('');
//         setTaskTime('');
//         setTaskDescription('');
//         setTaskTags('');
//     };

//     const handleCompleteTask = (taskId) => {
//         setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
//     };

//     const handleDeleteTask = (taskId) => {
//         Alert.alert(
//             "Delete Task",
//             "Are you sure you want to delete this task?",
//             [
//                 { text: "Cancel", style: "cancel" },
//                 { text: "OK", onPress: () => setTasks(tasks.filter(task => task.id !== taskId)) }
//             ]
//         );
//     };
//     const handleDoneTask = (taskId) => {
//         Alert.alert(
//             "Completed Task",
//             "Are you sure task is completed?",
//             [
//                 { text: "Cancel", style: "cancel" },
//                 { text: "OK", onPress: () => setTasks(tasks.filter(task => task.id !== taskId)) }
//             ]
//         );
//     };

//     const renderItem = ({ item }) => (

//         <View style={{
//             height: 140,
//             width: '80%',
//             borderRadius: 15,
//             backgroundColor: '#2A4D50',
//             justifyContent: 'center',
//             marginHorizontal: 35,
//             margin: 10
//         }}>
//             <TouchableOpacity style={{
//                 marginTop: 30
//             }}
//                 onPress={() => handleCompleteTask(item.id)}>
//                 <Text style={[styles.taskTitle, item.completed && styles.taskCompleted]}>{item.title}</Text>
//             </TouchableOpacity>
//             <View style={{ flexDirection: 'row', marginHorizontal: 13, borderRadius: 15 }}>
//                 <View style={{ backgroundColor: 'white', borderRadius: 5 }}>
//                     <Text style={styles.taskDetails}>Date: {item.date}</Text>
//                 </View>
//                 <View style={{ backgroundColor: 'white', marginHorizontal: 10, borderRadius: 5 }}>
//                     <Text style={styles.taskDetails}>Time: {item.time}</Text>
//                 </View>
//             </View>
//             <View style={{ marginTop: 10 }}>
//                 <Text style={{
//                     fontSize: 15,
//                     color: 'white',
//                     textAlign: 'center',
//                     fontWeight: '500'
//                 }}>Description: {item.description}</Text>
//             </View>
//             <View>
//                 <Text style={{
//                     color: 'red',
//                     textAlign: 'center',
//                     marginTop: 5
//                 }}>Tags: {item.tags.join(', ')}</Text>
//             </View>
//             <View style={{ justifyContent: 'space-between' }} >
//                 <View style={{ marginHorizontal: 80 }} >
//                     <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
//                         <Ionicons name="trash-bin" size={24} color="red" />
//                     </TouchableOpacity>
//                 </View>

//                 <View style={{ marginTop: -25, marginHorizontal: 176, width: 100 }}>
//                     <TouchableOpacity onPress={() => handleDoneTask(item.id)}>
//                         <FontAwesome name="check-square" size={24} color="Green" />
//                     </TouchableOpacity>
//                 </View>
//             </View>

//         </View>
//     );

//     return (
//         <SafeAreaView>
//             <View style={styles.container}>
//                 <View style={styles.topContainer}>
//                     <View style={styles.backIcon}>
//                         <TouchableOpacity onPress={() => { navigation.goBack() }}>
//                             <ArrowLeftIcon color={'white'} />
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.titleTextContainer}>
//                         <Text style={styles.titleText(COLORS.white, SIZES.small + 47)}>Manage Tasks</Text>
//                     </View>
//                 </View>
//             </View>
//             <View style={{ marginTop: 30 }}>
//                 <View style={{ marginTop: 40 }}>
//                     <Calendar
//                         style={{
//                             borderColor: 'white',
//                             width: '90%',
//                             marginHorizontal: 20,
//                         }}
//                         current={'2024-05-19'}
//                         onDayPress={day => {
//                             console.log('selected day', day);
//                             setSelected(day.dateString);
//                         }}
//                         markedDates={{
//                             [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
//                         }}
//                     />
//                 </View>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                     <View>
//                         <Text style={styles.subTitle}>Whats on Tomorrow:</Text>
//                     </View>
//                     <View style={styles.addButtonContainer}>
//                         <Ionicons
//                             name="add-circle"
//                             size={43}
//                             color="black"
//                             onPress={() => setModalVisible(true)}
//                         />
//                     </View>
//                 </View>
//                 <FlatList
//                     data={tasks}
//                     renderItem={renderItem}
//                     keyExtractor={item => item.id}
//                     style={{ marginHorizontal: 20, marginTop: 20 }}
//                 />

//             </View>

//             <Modal
//                 visible={isModalVisible}
//                 transparent={true}
//                 animationType="slide"
//                 onRequestClose={() => setModalVisible(false)}
//             >
//                 <View style={styles.modalContainer}>
//                     <View style={styles.modalContent}>
//                         <Text style={styles.modalTitle}>Add Task</Text>
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Title"
//                             value={taskTitle}
//                             onChangeText={setTaskTitle}
//                         />
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Date"
//                             value={taskDate}
//                             onChangeText={setTaskDate}
//                         />
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Time"
//                             value={taskTime}
//                             onChangeText={setTaskTime}
//                         />
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Description"
//                             value={taskDescription}
//                             onChangeText={setTaskDescription}
//                         />
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Tags (comma separated)"
//                             value={taskTags}
//                             onChangeText={setTaskTags}
//                         />
//                         <TouchableOpacity style={styles.button} onPress={handleAddTask}>
//                             <Text style={styles.buttonText}>Create Task</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>
//         </SafeAreaView>
//     );
// }

// export default ManageTasks;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     topContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//         width: '100%',
//         height: 105,
//         marginTop: -69,
//         backgroundColor: COLORS.primary,
//     },
//     backIcon: {
//         marginLeft: 10,
//         marginTop: 60,
//     },
//     titleTextContainer: {
//         marginHorizontal: 140,
//         width: 200,
//     },
//     titleText: (color, top) => ({
//         fontWeight: "400",
//         fontSize: SIZES.xLarge - 1,
//         marginTop: top,
//         color: color,
//         marginLeft: -47,
//     }),
//     subTitle: {
//         fontSize: 20,
//         fontWeight: '600',
//         marginTop: 10,
//         marginHorizontal: 20,
//     },
//     addButtonContainer: {
//         // position: 'absolute',
//         // bottom: 10,
//         right: 30,
//     },
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0,0,0,0.5)',
//     },
//     modalContent: {
//         width: '90%',
//         padding: 20,
//         backgroundColor: 'white',
//         borderRadius: 10,
//     },
//     modalTitle: {
//         fontSize: 20,
//         fontWeight: '600',
//         marginBottom: 20,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 10,
//         paddingHorizontal: 10,
//         borderRadius: 5,
//     },
//     button: {
//         backgroundColor: COLORS.primary,
//         paddingVertical: 10,
//         borderRadius: 5,
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: '600',
//     },
//     taskContainer: {
//         padding: 10,
//         borderRadius: 5,
//         backgroundColor: '#f0f0f0',
//         marginBottom: 10,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     taskTitle: {
//         fontSize: 18,
//         fontWeight: '600',
//         color: 'white',
//         marginTop: -35,
//         textAlign: 'center'
//     },
//     taskCompleted: {
//         textDecorationLine: 'line-through',
//         color: 'gray',
//     },
//     taskDetails: {
//         fontSize: 16,
//     },
// });





import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Modal, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, SIZES } from '../../constants';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';

const ManageTasks = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskTime, setTaskTime] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskTags, setTaskTags] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const savedTasks = await AsyncStorage.getItem('tasks');
                if (savedTasks) {
                    setTasks(JSON.parse(savedTasks));
                }
            } catch (error) {
                console.error('Failed to load tasks:', error);
            }
        };

        loadTasks();
    }, []);

    useEffect(() => {
        const saveTasks = async () => {
            try {
                await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
            } catch (error) {
                console.error('Failed to save tasks:', error);
            }
        };

        saveTasks();
    }, [tasks]);

    const handleAddTask = () => {
        const newTask = {
            id: Math.random().toString(),
            title: taskTitle,
            date: taskDate,
            time: taskTime,
            description: taskDescription,
            tags: taskTags.split(','),
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setModalVisible(false);
        setTaskTitle('');
        setTaskDate('');
        setTaskTime('');
        setTaskDescription('');
        setTaskTags('');
    };

    const handleCompleteTask = (taskId) => {
        setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
    };

    const handleDeleteTask = (taskId) => {
        Alert.alert(
            "Delete Task",
            "Are you sure you want to delete this task?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "OK", onPress: () => setTasks(tasks.filter(task => task.id !== taskId)) }
            ]
        );
    };

    const handleDoneTask = (taskId) => {
        Alert.alert(
            "Completed Task",
            "Are you sure task is completed?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "OK", onPress: () => setTasks(tasks.filter(task => task.id !== taskId)) }
            ]
        );
    };

    const renderItem = ({ item }) => (

        <View style={{
            height: 140,
            width: '80%',
            borderRadius: 15,
            backgroundColor: '#2A4D50',
            justifyContent: 'center',
            marginHorizontal: 35,
            margin: 10
        }}>
            <TouchableOpacity style={{
                marginTop: 20
            }}
                onPress={() => handleCompleteTask(item.id)}>
                <Text style={[styles.taskTitle, item.completed && styles.taskCompleted]}>{item.title}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginHorizontal: 13, borderRadius: 15 }}>
                <View style={{ backgroundColor: 'white', borderRadius: 5 }}>
                    <Text style={styles.taskDetails}>Date: {item.date}</Text>
                </View>
                <View style={{ backgroundColor: 'white', marginHorizontal: 10, borderRadius: 5 }}>
                    <Text style={styles.taskDetails}>Time: {item.time}</Text>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{
                    fontSize: 15,
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: '500'
                }}>Description: {item.description}</Text>
            </View>
            <View>
                <Text style={{
                    color: 'red',
                    textAlign: 'center',
                    marginTop: 5
                }}>Tags: {item.tags.join(', ')}</Text>
            </View>
            <View style={{ justifyContent: 'space-between' }} >
                <View style={{ marginHorizontal: 80 }} >
                    <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
                        <Ionicons name="trash-bin" size={24} color="red" />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: -25, marginHorizontal: 176, width: 100 }}>
                    <TouchableOpacity onPress={() => handleDoneTask(item.id)}>
                        <FontAwesome name="check-square" size={24} color="Green" />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.backIcon}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <ArrowLeftIcon color={'white'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleTextContainer}>
                        <Text style={styles.titleText(COLORS.white, SIZES.small + 47)}>Manage Tasks</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 30 }}>
                <View style={{ marginTop: 40 }}>
                    <Calendar
                        style={{
                            borderColor: 'white',
                            width: '90%',
                            marginHorizontal: 20,
                        }}
                        current={'2024-05-19'}
                        onDayPress={day => {
                            console.log('selected day', day);
                            setSelected(day.dateString);
                            setTaskDate(day.dateString); // Update taskDate state
                        }}
                        markedDates={{
                            [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
                        }}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.subTitle}>Whats on Tomorrow:</Text>
                    </View>
                    <View style={styles.addButtonContainer}>
                        <Ionicons
                            name="add-circle"
                            size={43}
                            color="black"
                            onPress={() => setModalVisible(true)}
                        />
                    </View>
                </View>
                <FlatList
                    data={tasks}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={{ marginHorizontal: 20, marginTop: 20 }}
                />
            </View>

            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Add Task</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Title"
                            value={taskTitle}
                            onChangeText={setTaskTitle}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Date"
                            value={taskDate}
                            onChangeText={setTaskDate}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Time"
                            value={taskTime}
                            onChangeText={setTaskTime}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            value={taskDescription}
                            onChangeText={setTaskDescription}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Tags (comma separated)"
                            value={taskTags}
                            onChangeText={setTaskTags}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                            <Text style={styles.buttonText}>Create Task</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

export default ManageTasks;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        height: 105,
        marginTop: -69,
        backgroundColor: COLORS.primary,
    },
    backIcon: {
        marginLeft: 10,
        marginTop: 60,
    },
    titleTextContainer: {
        marginHorizontal: 140,
        width: 200,
    },
    titleText: (color, top) => ({
        fontWeight: "400",
        fontSize: SIZES.xLarge - 1,
        marginTop: top,
        color: color,
        marginLeft: -47,
    }),
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
    },
    addButtonContainer: {
        marginRight: 20,
    },
    // taskTitle: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     color: 'white',
    // },
    // taskCompleted: {
    //     textDecorationLine: 'line-through',
    //     color: 'gray',
    // },
    // taskDetails: {
    //     fontSize: 14,
    //     marginHorizontal: 10,
    //     color: 'black',
    // },
    taskTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        marginTop: -30,
        textAlign: 'center'
    },
    taskCompleted: {
        textDecorationLine: 'line-through',
        color: 'gray',
        // marginTop: 10
    },
    taskDetails: {
        fontSize: 16,
        marginTop: 2
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
