import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Filho from './Filho'

export default function Pai() {
  return (
    <View>
      <Filho nome="João" sobrenome="Silva"/>
    </View>
  )
}

const styles = StyleSheet.create({})