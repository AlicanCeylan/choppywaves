import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MainStackNavigator, DailyStackNavigator, HourlyStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                } if (route.name === '24-hour') {
                    iconName = focused ? 'clock' : 'clock-outline';
                } else if (route.name === 'Daily') {
                    iconName = focused ? 'calendar-range' : 'calendar-range-outline';
                }

                // You can return any component that you like here!
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
        })}
       tabBarOptions={{
           activeTintColor: 'black',
           inactiveTintColor: 'black',
           style: {
               backgroundColor: '#9AC4F8',
               border: false
           }
       }}
        >
            <Tab.Screen name="Home" component={MainStackNavigator}/>
            <Tab.Screen name="24-hour" component={HourlyStackNavigator}/>
            <Tab.Screen name="Daily" component={DailyStackNavigator}/>
        </Tab.Navigator>
    );
};

export default TabNavigator;