import React, { Component } from 'react';
import {
    View,
    Text,
    Alert,
    StyleSheet,
    FlatList
} from 'react-native';
import realm from '../../realm';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8
    }
});

class ExpensesInfoScreen extends Component {
    state = {
        expensesList: []
    };

    static navigationOptions = ({navigation}) => ({
        title: 'Expenses information'
    });

    componentDidMount() {
        try {
            this.setState(() => ({expensesList: realm.objects('Expense').sorted('date', true)}));

            realm.addListener('change', () => {
                this.setState(() => ({expensesList: realm.objects('Expense').sorted('date', true)}));
            })
        } catch (e) {
            Alert.alert('Error', 'Something went wrong, we\'re working on it');
        }
    }

    renderItem = ({ item }) => {
        return (
            <View key={item.id} style={{ marginBottom: 10 }}>
                <Text>Amount: {item.amount}</Text>
                <Text>Date: {item.date.toString()}</Text>
                <Text>Category: {item.expenseCategory}</Text>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.expensesList}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

export default ExpensesInfoScreen;
