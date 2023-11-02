import { View, Text, StyleSheet, Pressable } from "react-native"

import Colors from "../../constants/Colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={style.outer}>
        <Pressable android_ripple={{color: Colors.primary600}} style={({pressed}) => pressed ? [style.buttonContainer, style.pressed] : style.container } onPress={onPress}>
                <Text style={style.buttonText}>{children}</Text>
        </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    outer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    pressed: {
        opacity: 0.75,
        paddingVertical: 8,
    }
});

export default PrimaryButton