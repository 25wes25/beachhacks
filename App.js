/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import {HomeScreen} from './src/HomeScreen'
import {LoginScreen} from './src/LoginScreen'
import {CalendarScreen} from './src/CalendarScreen'
import {MapScreen} from "./src/MapScreen";
import {ProfileScreen} from "./src/ProfileScreen";

export default class MyApp extends React.Component {
    render() {
        return (<App/>);
    }
}

console.ignoredYellowBox = ['Warning: componentWillReceiveProps'];

const AppTabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Calendar: CalendarScreen,
    Map: MapScreen,
    Profile: ProfileScreen

}, {

    navigationOptions: ({navigation}) => ({
        //define the icon for each tab here...
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;

            let icon;
            switch (routeName) {
                case 'Home':
                    //add icons here
                    break;
                case 'Camera':
                    break;
            }

            return <Ionicons
                name={icon}
                size={25}
                color={tintColor}/>;
        },
    }),
    tabBarOptions: {
        initialRouteName: 'Home',
        activeTintColor: '#fff',
        inactiveTintColor: '#ddd',
        style: {
            backgroundColor: '#4d535e',
        }
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const App = createAppContainer(AppTabNavigator);
