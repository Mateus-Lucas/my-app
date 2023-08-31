import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Familia(props) {
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Familia {props.nomeFamilia}</Text>
            <View>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})