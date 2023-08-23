import React from "react";
import { Text } from "react-native";

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
        <Text>{message}</Text>
    );
}