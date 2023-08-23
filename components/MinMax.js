import { Text } from "react-native"

// passando função com parametros (props)
export default function MinMax(props) {


    // propriedades da função
    const {min, max} = props;

    // mostrando as propriedades na tela
    console.warn(props);

    return (
        <Text>{props.propriedades}</Text>
    )
}