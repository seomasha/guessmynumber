import { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Text } from "react-native";

import Colors from "../constants/Colors";

import Title from '../components/ui/Title';
import Card from "../components/ui/Card";
import InstructionText from '../components/ui/InstructionText'

import PrimaryButton from "../components/ui/PrimaryButton";

function StartGame({onPickNumber}) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid number", "Number has to be less than 99 or greater than 0.", [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]);
            return;
        }

        else{
            onPickNumber(chosenNumber);
        }
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess my number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput 
                style={styles.input} 
                maxLength={2} 
                keyboardType="number-pad" 
                autoCapitalize="none" 
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
                />
                <View style={styles.buttons}>
                    <View style={styles.button}>   
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
    },
    button: {
        flex: 1
    },

    input: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        width: 50,
        textAlign: "center",
    },

    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center"
    },
})

export default StartGame