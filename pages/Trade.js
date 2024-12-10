import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";



const Trade = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('InStock')}>
                    <Text style={styles.buttonText}>In Stock</Text>
                    <Text style={styles.buttonText}>0</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Dispatched')}>
                    <Text style={styles.buttonText}>Dispatched</Text>
                    <Text style={styles.buttonText}>0</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Receiving')}>
                    <Text style={styles.buttonText}>Receiving</Text>
                    <Text style={styles.buttonText}>0</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Sending')}>
                    <Text style={styles.buttonText}>Sending</Text>
                    <Text style={styles.buttonText}>0</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('PendingOrders')}>
                    <Text style={styles.buttonText}>Pending Orders</Text>
                    <Text style={styles.buttonText}>0</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('CompletedOrders')}>
                    <Text style={styles.buttonText}>Completed Orders</Text>
                    <Text style={styles.buttonText}>0</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Orders')}>
                    <Text style={styles.buttonText}>Orders</Text>
                    <Text style={styles.buttonText}>0</Text>
                </Pressable>
            </View>
            <View style={{alignItems: 'flex-end', marginRight: 25}}>
                <Pressable style={styles.buttonNewEntry} onPress={() => navigation.navigate('NewEntry')}>
                    <Text style={styles.buttonText2}>New Entry</Text>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#f5f5f5",
        padding: 20,
        width: '100%'
    },
    button: {
        width: "100%",
        paddingVertical: 15,
        marginVertical: 10,
        backgroundColor: "#6200ee",
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        paddingLeft: 25,
        paddingRight: 30,
        elevation: 3, // For Android shadow effect
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonNewEntry: {
        width: "40%",
        paddingVertical: 15,
        marginVertical: 10,
        backgroundColor: "#ccc",
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        paddingLeft: 25,
        paddingRight: 30,
        elevation: 3, // For Android shadow effect
    },
    buttonText2: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Trade;
