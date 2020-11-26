import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import userLocation from "../components/location";
import TabNavigator from "./TabNavigator";
import {MaterialIcons} from "@expo/vector-icons";
import {SettingsStackNavigator} from "./StackNavigator";

const Drawer = createDrawerNavigator();
const screenOptionStyle = {
    headerShown: true,
    headerTitle: userLocation,

    //create search button that will open search page
    headerRight: () => (
        <MaterialIcons.Button
            name="search"
            backgroundColor="#9AC4F8"
            color="black"
            size={28}
        />
    ),


    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "black",
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={screenOptionStyle}>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Settings" component={SettingsStackNavigator} options={{
                headerTitle: 'Settings'
            }}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;