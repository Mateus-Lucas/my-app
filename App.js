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
import ParOuImpar from './components/semana_04/ParOuImpar';
import IntroducaoEstilos from './components/semana_04/IntroducaoEstilos';
import Profile from './components/Profile';


export default function App() {
  return (
      <Profile genero='Feminino' nome='Fernanda' telefone='682-245-854' email='fernloptes@gmai.com'/>
  );
}

const styles = StyleSheet.create({});
