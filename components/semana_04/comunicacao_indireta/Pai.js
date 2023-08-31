import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Filho from './Filho'

export default function Pai() {

  // Definição do estado "numero" e da função "setNumero" para atualizá-lo
  const [numero, setNumero] = useState(0)

  // Função para atualizar o estado "numero" quando chamada pelo componente Filho
  function alterarNumero(valor) {
    setNumero(valor)
  }

  return (
    <View>
      <Text style={styles.text}>O número aleatório é?</Text>

      {/* Exibição do valor do estado "numero" */}
      <Text style={styles.text}>{numero}</Text>

      {/* Renderização do componente Filho, passando props min, max e funcao */}
      <Filho min={0} max={100} funcao={alterarNumero} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})
