import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ParOuImpar(props) {

  const numero = props.numero

  return (
    <View>
      <Text style={{fontSize: 30}}>O numero é :</Text>
      <Text style={{fontSize: 30}}>{numero % 2 == 0 ? 'Par' : 'Impar'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})