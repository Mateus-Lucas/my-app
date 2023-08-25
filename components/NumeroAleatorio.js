import { Text } from "react-native";

export default function NumeroALeatorio(props) {
    
    // definindo propriedades max e min
    const { min, max} = props; 

    // transformando variavel em inteira e maior que 1
    let num_aleatorio;
    num_aleatorio = Math.floor(Math.random()*100);

    let message;

    // conficional para verificar se a propriedade está de acordo
    if (num_aleatorio > min && num_aleatorio < max) {
        message = `O número aleatório é = ${num_aleatorio}`;
    } else {
        message = "Numero invalido";
    }

    return (
        <Text>{message}</Text>
    )
}