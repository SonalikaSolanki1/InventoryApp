import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InStock = () => (
    <View style={styles.container}>
        <Text>In Stock Page</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default InStock;
