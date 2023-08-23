import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MinMax from './components/MinMax';

export default function App() {
  return (
    // Fragmento para estilizar (precisa de importações)
    // <React.Fragment></React.Fragment>

    // Componente - View: para abrir a caixa de conteúdo
    <View style={styles.container}>
      {/*<MyComponent/>*/}
      <MinMax min={10} max={20}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
