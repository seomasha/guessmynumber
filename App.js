import { useState } from 'react';

import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import StartGame from './screens/StartGame';
import GameScreen from './screens/GameScreen';

import Colors from './constants/Colors';

export default function App() {

  const [number, setNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
      setNumber(pickedNumber);
  }

  let screen = <StartGame onPickNumber={pickedNumberHandler}/>;

  if(number) {
      screen = <GameScreen />
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.container}>
        <StatusBar style='light'/>
        <ImageBackground source={require("./assets/images/background.png")} resizeMode='cover' style={styles.container} imageStyle={styles.bgImage}>
          <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },

  bgImage: {
    opacity: 0.15,
  }
});
