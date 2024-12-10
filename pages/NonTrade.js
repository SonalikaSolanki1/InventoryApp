import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";


const NonTrade = ({ navigation }) => {
    return (
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
        </View>
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
});

export default NonTrade;
