import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import {HeaderTitle} from "@react-navigation/stack";

export default function userLocation() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [long, setLong] = useState(null);
    const [lat, setLat] = useState(null);
    const [myCity, setMyCity] = useState(null);
    const [myState, setMyState] = useState(null);

    useEffect(() => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            setErrorMsg(
                'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
            );
        } else {
            (async () => {
                let { status } = await Location.requestPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                }

                let location = await Location.getCurrentPositionAsync({});
                let geocode = await Location.reverseGeocodeAsync(location.coords);
                setMyCity(geocode[0].city)
                setMyState(geocode[0].region)
                setLocation(location);
                setLat(location.coords.latitude)
                setLong(location.coords.longitude)
            })();
        }
    });

    let text = 'loading Location';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(myCity) + ', ' + JSON.stringify(myState);
        text = text.replace(/\"/g, "");
    }

    return (
                <HeaderTitle styles={styles.headerText}>{text}</HeaderTitle>

    );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 18,
        tintColor: 'white'
    },
});
