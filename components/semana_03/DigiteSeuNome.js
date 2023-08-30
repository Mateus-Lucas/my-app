import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function DigiteSeuNome() {

    const [nome, setNome] = useState('')
    const [nomeDigitado, setNomeDigitado] = useState('')

 

    return (
        <View>
            <Text style={styles.text}>Digite Seu Nome</Text>
            <Text style={styles.text}>nome: {nome}</Text>

            <TextInput
                style={styles.input}
                onChangeText={e => setNomeDigitado(e)}
                placeholder='Digite seu nome'
            />

            <Button
                title='Enviar'
                onPress={() => setNome(nomeDigitado)}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fonWeight: 'bold' 
    },
    input: {
        fontSize: 30,
        color: 'red',
        borderWidth: 2,
        margin: 10
    }
})