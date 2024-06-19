// import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { COLORS, SIZES } from '../../constants'
// import { ArrowLeftIcon } from 'react-native-heroicons/solid'
// import { useNavigation } from '@react-navigation/native'
// import { Ionicons } from '@expo/vector-icons'


// const ManageGroceries = () => {
//     const navigation = useNavigation()
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
//                         <Text style={styles.titleText(COLORS.white, SIZES.small + 47)}> Manage Expenses </Text>
//                     </View>
//                 </View>
//             </View>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
//                 <View>
//                     <Text style={styles.subTitle}>Upcoming Expenses :</Text>
//                 </View>
//                 <View style={styles.addButtonContainer}>
//                     <Ionicons
//                         name="add-circle"
//                         size={43}
//                         color="black"
//                     // onPress={() => setModalVisible(true)}
//                     />
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }

// export default ManageGroceries

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     topContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//         width: '100%',
//         height: 105,
//         // borderWidth: 1,
//         marginTop: -69,
//         backgroundColor: COLORS.primary
//     },
//     backIcon: {
//         marginLeft: 10,
//         marginTop: 60
//     },
//     titleTextContainer: {
//         marginHorizontal: 140,
//         width: 200
//     },
//     titleText: (color, top) => ({
//         fontWeight: "400",
//         fontSize: SIZES.xLarge - 1,
//         marginTop: top,
//         color: color,
//         marginLeft: -72,
//     }),
//     subTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginLeft: 20,
//         marginTop: 20,
//     },
//     addButtonContainer: {
//         marginRight: 20,
//         marginTop: 10
//     },
// })

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal, TextInput, Button, FlatList } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ManageGroceries = () => {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [expenseName, setExpenseName] = useState('');
    const [amount, setAmount] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [note, setNote] = useState('');
    const [upcomingExpenses, setUpcomingExpenses] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null); // State to keep track of the expense being edited

    useEffect(() => {
        AsyncStorage.getItem('upcomingExpenses')
            .then((data) => {
                if (data) {
                    setUpcomingExpenses(JSON.parse(data));
                }
            })
            .catch((error) => console.error('Failed to load expenses:', error));
    }, []);

    const handleDone = async () => {
        if (expenseName === '' || amount === '' || dueDate === '') {
            alert('Please fill out all fields');
            return;
        }

        const newExpense = { expenseName, amount, dueDate, note };
        let updatedExpenses;

        if (editingIndex !== null) {
            updatedExpenses = [...upcomingExpenses];
            updatedExpenses[editingIndex] = newExpense;
            setEditingIndex(null);
        } else {
            updatedExpenses = [...upcomingExpenses, newExpense];
        }

        try {
            await AsyncStorage.setItem('upcomingExpenses', JSON.stringify(updatedExpenses));
            setUpcomingExpenses(updatedExpenses);
            console.log('Expense added or updated:', newExpense);
        } catch (error) {
            console.error('Failed to add or update expense:', error);
        }

        setExpenseName('');
        setAmount('');
        setDueDate('');
        setNote('');
        setModalVisible(false);
    };

    const handleDeleteExpense = async (index) => {
        const updatedExpenses = upcomingExpenses.filter((_, i) => i !== index);
        try {
            await AsyncStorage.setItem('upcomingExpenses', JSON.stringify(updatedExpenses));
            setUpcomingExpenses(updatedExpenses);
        } catch (error) {
            console.error('Failed to delete expense:', error);
        }
    };

    const handleEditExpense = (index) => {
        const expenseToEdit = upcomingExpenses[index];
        setExpenseName(expenseToEdit.expenseName);
        setAmount(expenseToEdit.amount);
        setDueDate(expenseToEdit.dueDate);
        setNote(expenseToEdit.note);
        setEditingIndex(index);
        setModalVisible(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.backIcon}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeftIcon color={'white'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText(COLORS.white, SIZES.small + 47)}> Manage Expenses </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View>
                    <Text style={styles.subTitle}>Upcoming Expenses:</Text>
                    {upcomingExpenses.length > 0 ? (
                        <FlatList
                            data={upcomingExpenses}
                            renderItem={({ item, index }) => (

                                <View style={{

                                    width: 250,
                                    backgroundColor: '#2A4D50',
                                    height: 83,
                                    marginTop: 20,
                                    margin: 4,
                                    borderRadius: 10,
                                    marginHorizontal: 22
                                    // justifyContent: 'center'
                                    // alignItems: 'center'
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 17,
                                        fontWeight: 'bold',
                                        margin: 10,
                                        marginLeft: 20,
                                        textAlign: 'center'

                                    }}>{item.expenseName}:  ₹{item.amount}/- </Text>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        // margin: 10,
                                        marginTop: 2 - 10,
                                        textAlign: 'center'
                                    }}
                                    >Due by:- {item.dueDate} </Text>

                                    <View style={{ flexDirection: 'row', marginHorizontal: 90, marginTop: 10 }}>
                                        <TouchableOpacity onPress={() => handleEditExpense(index)}>
                                            <Text style={{ color: COLORS.primary, marginRight: 10, fontSize: 17 }}>Edit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleDeleteExpense(index)}>
                                            <Ionicons name="trash-outline" size={24} color={COLORS.primary} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    ) : (
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: '400',
                            marginTop: 10,
                            marginHorizontal: 30
                        }}>No upcoming expenses.</Text>
                    )}
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

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setEditingIndex(null);
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Expense Name"
                            value={expenseName}
                            onChangeText={setExpenseName}
                        // placeholderTextColor='white'

                        />
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Amount"
                            value={amount}
                            onChangeText={setAmount}
                            keyboardType="numeric"
                        // placeholderTextColor='white'
                        />
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Due Date"
                            value={dueDate}
                            onChangeText={setDueDate}
                        // placeholderTextColor='white'
                        />
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Note"
                            value={note}
                            onChangeText={setNote}
                        // placeholderTextColor='white'
                        />

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setEditingIndex(null);
                                    setModalVisible(false);
                                }}
                                style={{
                                    borderWidth: 1,
                                    backgroundColor: COLORS.primary,
                                    width: 80,
                                    borderRadius: 5,
                                    height: 30,
                                    marginHorizontal: 10

                                }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: 'white',
                                    fontWeight: '500',
                                    textAlign: 'center'
                                }}> Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handleDone}
                                style={{
                                    borderWidth: 1,
                                    backgroundColor: COLORS.primary,
                                    width: 80,
                                    borderRadius: 5,
                                    height: 30,
                                    marginHorizontal: 10

                                }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: 'white',
                                    fontWeight: '500',
                                    textAlign: 'center'
                                }}> Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

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
        backgroundColor: COLORS.primary
    },
    backIcon: {
        marginLeft: 10,
        marginTop: 60
    },
    titleTextContainer: {
        marginHorizontal: 140,
        width: 200
    },
    titleText: (color, top) => ({
        fontWeight: "400",
        fontSize: SIZES.xLarge - 1,
        marginTop: top,
        color: color,
        marginLeft: -72,
    }),
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
    },
    addButtonContainer: {
        marginRight: 20,
        marginTop: 10
    },
    // modalContainer: {
    //     // flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //     backgroundColor: 'white',
    //     height: 300,
    //     marginTop: 300,
    //     borderRadius: 20

    // },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalInput: {
        height: 40,
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
        width: 200,
        // color: 'white'
    },
});

export default ManageGroceries;
