import { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";

import Colors from "../constants/Colors";

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
        <View style={styles.inputContainer}>
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
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: Colors.primary800,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6, 
        shadowOpacity: 0.25,
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
    }
})

export default StartGame