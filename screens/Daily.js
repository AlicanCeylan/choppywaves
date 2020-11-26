import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Daily = () => {
    return (
        <View style={styles.center}>
            <Text>Daily weather</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: '#bcc3d0'
    },
});

export default Daily;