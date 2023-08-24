import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MinMax(props) {
    // Extrair as propriedades min e max do objeto props
    const { min, max } = props;

    // Verificar qual valor é maior e criar a mensagem
    let message;
    if (max > min) {
        message = `O maior valor é max = ${max}`;
    } else if (min > max) {
        message = `O maior valor é min = ${min}`;
    } else {
        message = "Os valores são iguais";
    }

    return (
        <View style={styles.card}>
            <Text style={styles.text}>{message}</Text>
        </View>
    );

}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
    card: {
        backgroundColor: 'blue',
        padding: 50,
        borderRadius: 10, 
        borderColor: 'gray',
        borderWidth: 10
    }
})