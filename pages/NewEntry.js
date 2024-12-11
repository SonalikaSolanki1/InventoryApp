import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    Alert,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderTypes, submitOrder } from "../redux/slices/orderSlice";

export const NewEntryTrade = () => {
    const [clientName, setClientName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [quantity, setQuantity] = useState("");
    const [orderType, setOrderType] = useState(null);

    const dispatch = useDispatch();
    const { orderTypes, loading } = useSelector((state) => state.orders);

    useEffect(() => {
        dispatch(fetchOrderTypes());
    }, [dispatch]);

    const handleSubmit = () => {
        if (!clientName || !address || !phoneNumber || !quantity || !orderType) {
            Alert.alert("Error", "Please fill out all fields.");
            return;
        }

        const orderData = { clientName, address, phoneNumber, quantity, orderType };
        dispatch(submitOrder(orderData)).then(() => {
            Alert.alert("Success", `Order submitted:\nClient: ${clientName}\nOrder Type: ${orderType}`);
            setClientName("");
            setAddress("");
            setPhoneNumber("");
            setQuantity("");
            setOrderType(null);
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Create New Entry</Text>
            <TextInput
                style={styles.input}
                placeholder="Client Name"
                value={clientName}
                onChangeText={setClientName}
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
                multiline
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Quantity"
                value={quantity}
                onChangeText={setQuantity}
                keyboardType="numeric"
                placeholderTextColor="#888"
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
        </ScrollView>
    );
};


export const NewEntryNonTrade = () => {
    const [clientName, setClientName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [quantity, setQuantity] = useState("");
    const [orderType, setOrderType] = useState(null);

    const dispatch = useDispatch();
    const { orderTypes, loading } = useSelector((state) => state.orders);

    useEffect(() => {
        dispatch(fetchOrderTypes());
    }, [dispatch]);

    const handleSubmit = () => {
        if (!clientName || !address || !phoneNumber || !quantity || !orderType) {
            Alert.alert("Error", "Please fill out all fields.");
            return;
        }

        const orderData = { clientName, address, phoneNumber, quantity, orderType };
        dispatch(submitOrder(orderData)).then(() => {
            Alert.alert("Success", `Order submitted:\nClient: ${clientName}\nOrder Type: ${orderType}`);
            setClientName("");
            setAddress("");
            setPhoneNumber("");
            setQuantity("");
            setOrderType(null);
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Create New Entry</Text>
            <TextInput
                style={styles.input}
                placeholder="Client Name"
                value={clientName}
                onChangeText={setClientName}
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
                multiline
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Quantity"
                value={quantity}
                onChangeText={setQuantity}
                keyboardType="numeric"
                placeholderTextColor="#888"
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f3f4f6",
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    input: {
        width: "100%",
        padding: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
        fontSize: 16,
    },
    dropdown: {
        width: "100%",
        padding: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        backgroundColor: "#fff",
        marginBottom: 15,
    },
    dropdownText: {
        fontSize: 16,
        color: "#888",
    },
    dropdownContainer: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        backgroundColor: "#fff",
    },
    dropdownItemText: {
        fontSize: 16,
        color: "#555",
        padding: 10,
    },
    button: {
        width: "100%",
        paddingVertical: 15,
        backgroundColor: "#007BFF",
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});


