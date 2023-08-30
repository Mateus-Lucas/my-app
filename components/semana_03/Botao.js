import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Botao() {
    
    // Função para botão
    function executarBotao2() {
        alert('Botão 2')
    }

    return (
        <View style={styles.card}>
            <Text style={styles.text}>Botões</Text>

            {/* Passando botão por aerofunction */}
            <Button  
                title='Botão 1'
                onPress={() => alert('Botão 1')}
            />
        
            {/* Função externa do return*/}
            <Button
                title='Botão 2'
                onPress={executarBotao2}
            />
            
            {/* Função sendo feita dentro do onPress */}
            <Button
                title='Botão 3'
                onPress={
                    function executarBotao3() {
                        alert('Botão 3')
                    }
                }
            />
            
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