import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NumAleatorio2(props) {
  const { min, max } = props

  const delta = max - min
  const NumAleatorio2 = Math.floor(Math.random() * delta) + min
  return (
    <View style={styles.card}>
      <Text style={styles.text}>O número aleatório é {NumAleatorio2}</Text>
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