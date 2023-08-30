import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

export default function NumeroALeatorio(props) {

    // definindo propriedades max e min
    const { min, max } = props;

    // transformando variavel em inteira e maior que 1
    let num_aleatorio;
    num_aleatorio = Math.floor(Math.random() * 100);

    let message;

    // conficional para verificar se a propriedade está de acordo
    if (num_aleatorio > min && num_aleatorio < max) {
        message = `O número aleatório é = ${num_aleatorio}`;
    } else {
        message = "Numero invalido";
        console.warn(`O número ${num_aleatorio} é inválido`)
    }

    return (
        <View style={styles.card}>
            <Text style={styles.text}>{message}</Text>
        </View>
    )
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