import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Contador() {
    
    // usando estado para exibir na tela 
    const [valor, setValor] = useState(0)

    // let valor = 0

    function incrementar() {
        setValor(valor + 1)
    }

    function decrementar() {
        setValor(valor - 1)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Volume</Text>
            <Text style={styles.text}>{valor}</Text>
            <View style={styles.botao}>
                <Button
                    title='+ Incrementar'
                    onPress={incrementar}
                />
                <Button
                    title='- Decrementar'
                    onPress={decrementar}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
    text: {
        fontSize: 30
    },
    botao: {
        flex: 1,
        fontSize: 30,
        width: 250,
        height: 50
    }
})