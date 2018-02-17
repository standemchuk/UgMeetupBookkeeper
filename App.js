/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import HomeScreen from './src/screens/HomeScreen';
import AddExpenseScreen from './src/screens/AddExpenseScreen';
import ExpensesInfoScreen from './src/screens/ExpensesInfoScreen';

const Navigation = TabNavigator({
    Home: { screen: HomeScreen },
    AddExpense: { screen: AddExpenseScreen },
    ExpensesInfo: { screen: ExpensesInfoScreen }
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            marginTop: 40
        },
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;

            switch (routeName) {
                case 'Home':
                    iconName = `home`;
                    break;
                case 'AddExpense':
                    iconName = `dollar`;
                    break;
                case 'ExpensesInfo':
                    iconName = `calculator`;
                    break;
            }

            return (
                <Icon name={iconName} size={25} color={tintColor} />
            );
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
    },
    animationEnabled: false,
    swipeEnabled: false,
});

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight }}>
                    <StatusBar
                        translucent
                        backgroundColor={'transparent'}
                    />
                </View>
                <Navigation />
                <KeyboardSpacer />
            </View>
        )
    }
}