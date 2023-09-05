import React, { useState } from 'react';
import { Text, View, Button, Image } from 'react-native'; // Certifique-se de importar o componente Image
import frasesDoBiscoito from './FrasesBiscoito'; // Importe o array de frases
import imagemBiscoitoQuebrado from './biscoito_quebrado.jpg'; // Atualize o caminho para suas imagens
import imagemBiscoitoInteiro from './biscoito_inteiro.png';

export default function BiscoitoSorte() {
  const [frase, setFrase] = useState('');
  const [botaoBloqueado, setBotaoBloqueado] = useState(false);
  const [biscoitoQuebrado, setBiscoitoQuebrado] = useState(false);

  const exibirFraseAleatoria = () => {
    setBotaoBloqueado(true);
    setBiscoitoQuebrado(true); // Define o biscoito como quebrado
    const indiceAleatorio = Math.floor(Math.random() * frasesDoBiscoito.length);
    const fraseAleatoria = frasesDoBiscoito[indiceAleatorio];
    setFrase(fraseAleatoria);
  };

  const reiniciarBiscoito = () => {
    setFrase('');
    setBotaoBloqueado(false);
    setBiscoitoQuebrado(false); // Define o biscoito como não quebrado
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={biscoitoQuebrado ? imagemBiscoitoQuebrado : imagemBiscoitoInteiro}
        style={{ width: 150, height: 150 }}
      />
      <Text>{frase}</Text>
      <Button
        title="Quebrar Biscoito"
        onPress={exibirFraseAleatoria}
        disabled={botaoBloqueado}
      />
      <Button
        title="Reiniciar Biscoito"
        onPress={reiniciarBiscoito}
        disabled={!botaoBloqueado}
      />
    </View>
  );
}
