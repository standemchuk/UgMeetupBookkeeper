import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Platform,
    DatePickerIOS,
    DatePickerAndroid,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';
import realm from '../../realm';
import uuid from '../helpers/uuid';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8
    },
    expenseAmountInput: {
        borderColor: "#333333",
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 8,
        paddingLeft: 8
    }
});

class AddExpenseScreen extends Component {
    state = {
        chosenDate: new Date(),
        category: '',
        expenseAmount: ''
    };

    static navigationOptions = ({ navigation }) => ({
        title: 'Add an Expense'
    });

    onExpenseChange = text => {
        this.setState(() => ({ expenseAmount: text }));
    };

    onCategoryChange = text => {
        this.setState(() => ({ category: text }));
    };

    onDateChange = newDate => {
        this.setState(() => ({ chosenDate: newDate }));
    };

    openAndroidDatePicker = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                // Use `new Date()` for current date.
                // May 25 2020. Month 0 is January.
                date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                this.setState(() => ({ chosenDate: new Date(year, month, day) }));
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    };

    submitForm = () => {
        const { expenseAmount, category, chosenDate } = this.state;
        try {
            realm.write(() => {
                realm.create('Expense', {
                    id: uuid(),
                    amount: parseFloat(expenseAmount),
                    expenseCategory: category,
                    date: chosenDate
                });
            });
            Alert.alert('Submitted');
        } catch (e) {
            Alert.alert('Error', 'Something went wrong during saving, please try again later');
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ flex: 1 }}>
                    <Text>How much $ did you spend?</Text>
                    <TextInput
                        onChangeText={this.onExpenseChange}
                        placeholder={'Only numbers, no need to specify currency'}
                        style={styles.expenseAmountInput}
                        keyboardType="numeric"
                    />
                    <Text style={{ marginTop: 20 }}>What did you spend money for?</Text>
                    <TextInput
                        onChangeText={this.onCategoryChange}
                        placeholder={'Category'}
                        style={styles.expenseAmountInput}
                    />
                    <Text style={{ marginTop: 20 }}>When?</Text>
                    {Platform.OS === 'ios' ? (
                        <DatePickerIOS
                            date={this.state.chosenDate}
                            onDateChange={this.onDateChange}
                        />
                    ) : (
                        <TouchableOpacity
                            style={{ height: 40, borderColor: "#333333", backgroundColor: "#ff0000", borderRadius: 5 }}
                            onPress={this.openAndroidDatePicker}
                        >
                            <Text>Specify date</Text>
                        </TouchableOpacity>
                    )}
                </ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 50, backgroundColor: "#ff0000" }}>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            height: 50
                        }}
                        onPress={this.submitForm}
                    >
                        <Text style={{ fontSize: 24, color: '#fff'}}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default AddExpenseScreen;
