import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, fetchOrderTypes, submitOrder } from "../redux/slices/orderSlice";

const OrdersComponent = () => {
    const dispatch = useDispatch();
    const { orders, loading } = useSelector((state) => state.orders);

    console.log(orders);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const renderOrderItem = ({ item }) => (
        <View style={styles.orderItem}>
            <Text style={styles.orderText}>{item.clientName} - {item.orderType}</Text>
        </View>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007BFF" />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Orders</Text>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={renderOrderItem}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No orders found.</Text>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f3f4f6",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    orderItem: {
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    orderText: {
        fontSize: 16,
        color: "#555",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: "#555",
    },
    emptyText: {
        fontSize: 16,
        color: "#888",
        textAlign: "center",
        marginTop: 20,
    },
});

export default OrdersComponent;
