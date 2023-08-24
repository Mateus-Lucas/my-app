


export default function NumeroALeatorio(props) {

    const { min, max} = props
    
    let num_aleatorio;
    num_aleatorio = Math.random()
    console.warn(num_aleatorio)
    let message;

    if (num_aleatorio > 1) and (num_aleatorio < 100) {
        message = `O número aleatório é = ${num_aleatorio}`;
    } else {
        message = "Numero invalido";
    }

    return (
        <Text>{message}</Text>
    )
}