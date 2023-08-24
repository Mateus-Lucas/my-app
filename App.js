import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import NumeroALeatorio from './components/NumeroAleatorio';
import MinMax from './components/Semana_01/MinMax';
import MyComponent from './components/Semana_02/MyComponent';
import MyComponent2 from './components/Semana_02/MyComponent2';
import MyComponent3 from './components/Semana_02/MyComponent3';

export default function App() {
  return (
    // Fragmento para estilizar (precisa de importações)
    // <React.Fragment></React.Fragment>

    // Componente - View: para abrir a caixa de conteúdo
    <View style={styles.container}>
      {/*<MyComponent/>*/}
      <MinMax min={10} max={20}/>
      <MyComponent/>
      <MyComponent2/>
      <MyComponent3/>
      <NumeroALeatorio min={1} max={100}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
