/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";
import {HomeScreen} from './src/HomeScreen';
import {CalendarScreen} from './src/CalendarScreen';
import {MapScreen} from "./src/MapScreen";
import {ProfileScreen} from "./src/ProfileScreen";
import {LandingScreen} from "./src/LandingScreen";
import styles from './utils/styles';


const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        },

    {
        navigationOptions: {
            headerTintColor: '#00FF00',
            headerTitleStyle: styles.navBarTitle,
            headerStyle: styles.header,
        }
    });

const CalendarStack = createStackNavigator(
    {
        Calendar: CalendarScreen,
    },

    {
        navigationOptions: {
            headerTintColor: '#aaa333',
            headerTitleStyle: styles.navBarTitle,
            headerStyle: styles.header,
        }
    });

const MapStack = createStackNavigator(
    {
        Map: MapScreen,
    },

    {
        navigationOptions: {
            headerTintColor: '#543678',
            headerTitleStyle: styles.navBarTitle,
            headerStyle: styles.header,
        }
    });

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
    },

    {
        navigationOptions: {
            headerTintColor: '#654321',
            headerTitleStyle: styles.navBarTitle,
            headerStyle: styles.header,
        }
    });

const BottomTabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Calendar: CalendarStack,
    Map: MapStack,
    Profile: ProfileStack

}, {

    navigationOptions: ({navigation}) => ({
        //define the icon for each tab here...
        // tabBarIcon: ({focused, tintColor}) => {
        //     const {routeName} = navigation.state;
        //
        //     let icon;
        //     switch (routeName) {
        //         case 'Home':
        //             //add icons here
        //             break;
        //         case 'Camera':
        //             break;
        //     }
        //
        //     return <Ionicons
        //         name={icon}
        //         size={25}
        //         color={tintColor}/>;
        // },
        headerTintColor: '#123456',
        headerTitleStyle: styles.navBarTitle,
        headerStyle: styles.header
    }),
    tabBarOptions: {
        initialRouteName: 'Home',
        activeTintColor: '#5544ff',
        inactiveTintColor: '#111111',
        style: {
            backgroundColor: '#4d535e',
        }
    }
});

//Figure out if you still need this for login pages and shit

export const AppStack = createStackNavigator({
        LandingScreen: LandingScreen,
        MainScreen: BottomTabNavigator,
},
    {
        navigationOptions: ({navigation}) => {
            let headerOption = {};
            if (navigation.state.routeName === 'LandingScreen') {
                headerOption.header = null;
            }
            return {
                headerRight: <View/>,
                headerTintColor: '#00FF00',
                headerTitleStyle: styles.navBarTitle,
                headerStyle: styles.header,
                ...headerOption
            }
        }
    });

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: {
                name: 'LandingScreen',
                passProps:{
                    notification: props.notification
                }
            }
        };
    }

    // renderScene(route, navigator)
    // {
    //   let Component = ROUTES[route.name];
    //   return <Component route={route} navigator={navigator} {...route.passProps} />
    // }

    render() {
        return (
            <App/>
        );
    }
}

AppRegistry.registerComponent('beachhacks',() => Main);

// Required for React Native 3
const App = createAppContainer(AppStack);