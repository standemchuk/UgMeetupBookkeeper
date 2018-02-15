/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen';
import AddExpenseScreen from './src/screens/AddExpenseScreen';
import ExpensesInfoScreen from './src/screens/ExpensesInfoScreen';

export default TabNavigator({
    Home: { screen: HomeScreen },
    AddExpense: { screen: AddExpenseScreen },
    ExpensesInfo: { screen: ExpensesInfoScreen }
}, {
    navigationOptions: ({ navigation }) => ({
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
        inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
})