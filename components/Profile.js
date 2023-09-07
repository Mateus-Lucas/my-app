import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile({ genero, nome, telefone, email }) {

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://www.fakepersongenerator.com/Face/female/female20111023421985076.jpg' }}
                style={styles.img}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Genero: {genero}</Text>
                <Text style={styles.text}>Nome: {nome}</Text>
                <Text style={styles.text}>Numero: {telefone}</Text>
                <Text style={styles.text}>Email: {email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 170,
        height: 170,
        borderRadius: 80,
        borderWidth: 2,
        borderColor: 'red',
        marginBottom: 25
    },
    text: {
        fontSize: 25,
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'red',
        padding: 20,
        borderRadius: 5,
        width: '90%', 
        marginBottom: 10, 
    },
    textContainer: {
        flexDirection: 'column', 
        alignItems: 'center',
        width: '100%', 
        justifyContent: ''
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
