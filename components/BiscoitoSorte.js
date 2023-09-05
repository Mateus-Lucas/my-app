import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import frasesDoBiscoito from './FrasesBiscoito';
import imagemBiscoitoQuebrado from '../assets/biscoito_quebrado.png';
import imagemBiscoitoInteiro from '../assets/biscoito_inteiro.png';

export default function BiscoitoSorte() {
  const [frase, setFrase] = useState('');
  const [botaoBloqueado, setBotaoBloqueado] = useState(false);
  const [biscoitoQuebrado, setBiscoitoQuebrado] = useState(false);

  const exibirFraseAleatoria = () => {
    setBotaoBloqueado(true);
    setBiscoitoQuebrado(true);
    const indiceAleatorio = Math.floor(Math.random() * frasesDoBiscoito.length);
    const fraseAleatoria = frasesDoBiscoito[indiceAleatorio];
    setFrase(fraseAleatoria);
  };

  const reiniciarBiscoito = () => {
    setFrase('');
    setBotaoBloqueado(false);
    setBiscoitoQuebrado(false);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={biscoitoQuebrado ? imagemBiscoitoQuebrado : imagemBiscoitoInteiro}
        style={{ width: 150, height: 150 }}
      />
      <Text>{frase}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={exibirFraseAleatoria}
        disabled={botaoBloqueado}
      >
        <Text style={styles.buttonText}>Quebrar Biscoito</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={reiniciarBiscoito}
        disabled={!botaoBloqueado}
      >
        <Text style={styles.buttonText}>Reiniciar Biscoito</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 3,
    backgroundColor: '#ffffff',
    marginTop: 20,
    backgroundColor: 'red',
  },
  restartButton: {
    backgroundColor: 'transparent', // Botão de reinício tem fundo transparente
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
