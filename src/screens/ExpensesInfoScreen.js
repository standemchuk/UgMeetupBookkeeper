import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class ExpensesInfoScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Expenses information'
    });
    render() {
        return (
            <View style={styles.container}>
                <Text>Expenses Info Screen</Text>
            </View>
        );
    }
}

export default ExpensesInfoScreen;
