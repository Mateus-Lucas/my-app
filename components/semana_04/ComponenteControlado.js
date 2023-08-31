import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function ComponenteControlado() {

    const [nome, setNome] = useState('')

    return (
        <View>
            <Text style={styles.text}>Componente Controlado</Text>
            <Text style={styles.text}>{nome}</Text>

            <TextInput
                style={styles.input}
                placeholder='Digite seu nome'
                // keyboardType='numeric'
                value={nome}
                onChangeText={valorDigitado => setNome(valorDigitado)}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 30,
        color: 'red',
        borderWidth: 2,
        margin: 10
    },
    text: {
        fontSize: 30
    }
})