import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import Hourly from "../screens/Hourly";
import Daily from "../screens/Daily";
import Settings from "../screens/SettingsScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false
};

const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Hourly" component={Hourly}/>
          <Stack.Screen name="Daily" component={Daily}/>
          <Stack.Screen name="Settings" component={Settings}/>
          <Stack.Screen name="Search" component={SearchScreen}/>
      </Stack.Navigator>
    );
}

const HourlyStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Hourly" component={Hourly} />
        </Stack.Navigator>
    );
}

const DailyStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Daily" component={Daily} />
        </Stack.Navigator>
    );
}

const SettingsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
}

const SearchStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, DailyStackNavigator, HourlyStackNavigator, SettingsStackNavigator, SearchStackNavigator};