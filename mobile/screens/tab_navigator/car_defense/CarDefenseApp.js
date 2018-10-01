import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";


import PublicNotifications from './screens/TabNavigator/PublicNotifications/PublicNotifications'
import PrivateNotifications from './screens/TabNavigator/PrivateNotifications/PrivateNotifications'
import Feed from './screens/Feed'
import PrivateFeed from './screens/TabNavigator/PrivateFeed/PrivateFeed'
import RegisterCar from './screens/TabNavigator/RegisterCar/RegisterCar'
import {StackNavigator} from 'react-navigation'
import CarDefenseTabHandler from './CarDefenseTabHandler'


export default class CarDefense extends Component {

    render() {
        return (
            <CarDefenseStackNavigator />
        );
    }
}

const CarDefenseStackNavigator = new StackNavigator({
    RolesTabHandler:{
        screen:CarDefenseTabHandler,
        navigationOptions: ({ navigation }) => ({
          header: null,
        }),
    },
    Feed:{
        screen:Feed,
        navigationOptions: {
            header: 'none'
        }
    },
    PrivateNotifications:{
        screen:PrivateNotifications,
        navigationOptions: {
            header: 'none'
        }
    },
    PublicNotifications:{
        screen:PublicNotifications,
        navigationOptions: {
            header: 'none'
        }
    },
    RegisterCar:{
        screen:RegisterCar,
        navigationOptions: {
            header: 'none'
        }
    },
    PrivateFeed:{
        screen:PrivateFeed,
        navigationOptions:{
            header: 'none'
        }
    },
    
});

//Primary color #5c68c3

