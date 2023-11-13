import { useState, useEffect } from "react";

import { View, StyleSheet, Alert } from "react-native";

import { Ionicons } from "@expo/vector-icons"

import Title from "../components/ui/Title";
import InstructionText from '../components/ui/InstructionText'
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {

    let initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction) { //lower, greater

        if ((direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)) {
                Alert.alert("Don't lie!", "You know this is wrong", [{text: "Sorry!", style: "destructive"}])
                return;
            }
        if(direction === 'lower') {
            maxBoundary = currentGuess;
        }
        else{
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        }
    
    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    return(
        <View style={styles.container}>
            <Title>Opponent's guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower</InstructionText>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name="md-remove" size={24} color="white"/></PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name="md-add" size={24} color="white"/></PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    buttons: {
        flexDirection: "row"
    },
    button: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12,
    }
})

export default GameScreen;