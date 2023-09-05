import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import NumeroALeatorio from './components/Semana_02/NumeroAleatorio';
import MinMax from './components/Semana_01/MinMax';
import MyComponent from './components/Semana_02/MyComponent';
import MyComponent2 from './components/Semana_02/MyComponent2';
import MyComponent3 from './components/Semana_02/MyComponent3';
import NumAleatorio2 from './components/semana_03/NumAleatorio2';
import Botao from './components/semana_03/Botao';
import Contador from './components/semana_03/Contador';
import DigiteSeuNome from './components/semana_03/DigiteSeuNome';
// import Pai from './components/semana_04/comunicacao_direta/Pai';
import Pai from './components/semana_04/comunicacao_indireta/Pai';
import ComponenteControlado from './components/semana_04/ComponenteControlado';
import Familia from './components/semana_04/children/Familia';
import Filho from './components/semana_04/children/Filho';
import BiscoitoSorte from './components/BiscoitoSorte';


export default function App() {
  return (
    // Fragmento para estilizar (precisa de importações)
    // <React.Fragment></React.Fragment>

    // Componente - View: para abrir a caixa de conteúdo
    <View style={styles.container}>
      {/* <MyComponent/> */}
      {/* <MinMax min={10} max={20}/> */}
      {/* <MyComponent/> */}
      {/* <MyComponent2/> */}
      {/* <MyComponent3/> */}
      {/* <NumeroALeatorio min={1} max={100}/>  */}
      {/* <NumAleatorio2 min={1} max={100}/> */}
      {/* <Botao/> */}
      {/* <Contador/> */}
      {/* <DigiteSeuNome/> */}
      {/* <Pai/> */}
      {/* <ComponenteControlado/> */}
      {/* <Familia nomeFamilia="Silva">
        <Filho nome="Pedro" sobreNome="Silva"></Filho>
        <Filho nome="João" sobreNome="Silva"></Filho>
        <Filho nome="Davi" sobreNome="Silva"></Filho>
        <Filho nome="Maria" sobreNome="Silva"></Filho>
        <Filho nome="Carla" sobreNome="Silva"></Filho>
      </Familia> */}
      <BiscoitoSorte/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
