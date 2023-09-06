import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function IntroducaoEstilos() {
  return (
    <View style={{ backgroundColor: 'gray'}}>
      <View style={{flex: 1, backgroundColor: 'red'}}><Text>texto</Text></View>
      <View style={{flex: 1, backgroundColor: 'blue'}}><Text>texto</Text></View>
      <View style={{flex: 1, backgroundColor: 'green'}}><Text>texto</Text></View>
      <View style={{flex: 1, backgroundColor: 'black'}}><Text>texto</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({})