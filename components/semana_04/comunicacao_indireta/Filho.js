import { Button, StyleSheet, View } from 'react-native'
import React from 'react'

// Definição do componente Filho, que recebe as props min, max e funcao
export default function Filho(props) {

    // Função para gerar um número aleatório dentro do intervalo [min, max]
    function gerarNumeroAleatorio(min, max) {
        const delta = max - min
        const numeroAleatorio = Math.floor(Math.random() * delta) + min
        props.funcao(numeroAleatorio); // Chama a função passada através das props para atualizar o número no componente Pai
    }

    return (
        <View>
            <Button
                title='Gerar um número aleatório'
                onPress={() => {
                    const numeroAleatorio = gerarNumeroAleatorio(props.min, props.max) // Chama a função para gerar o número aleatório
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
