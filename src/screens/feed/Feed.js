import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

export default function Feed(props) {

    function irParaScreenProfile() {
        props.navigations.navigate('Profile')
    }

    return (
        < View >
            <Text style={{ fontSize: 30, color: 'black' }}>Página Feed</Text>
            <Button mode='outlined' onPress={irParaScreenProfile}>Ir para Profile</Button>
        </View >
    )
}

const styles = StyleSheet.create({})