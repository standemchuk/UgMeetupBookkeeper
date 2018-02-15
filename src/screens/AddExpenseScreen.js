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

class AddExpenseScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Add Expense Screen</Text>
            </View>
        );
    }
}

export default AddExpenseScreen;
