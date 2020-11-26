import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Settings = ({ navigation })=> {
    return (
        <View style={styles.center}>
            <Text>settings</Text>
            <Button
                title="Go back"
                onPress={() => this.props.navigation.goBack('Home')}
            />
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

export default Settings;