import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Cronometro() {
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [milissegundos, setMilissegundos] = useState("00"); 
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let customInterval;

    if (isRunning) {
      customInterval = setInterval(() => {
        if (milissegundos === "99") {
          if (segundos === 59) {
            setMinutos((prevMinutos) => prevMinutos + 1);
            setSegundos(0);
          } else {
            setSegundos((prevSegundos) => prevSegundos + 1);
          }
          setMilissegundos("00"); 
        } else {
          let newMilissegundos = (parseInt(milissegundos, 10) + 1).toString().padStart(2, '0'); 
          setMilissegundos(newMilissegundos);
        }
      }, 10); 
    } else {
      clearInterval(customInterval);
    }

    return () => clearInterval(customInterval);
  }, [isRunning, milissegundos, segundos]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const clearTimer = () => {
    setIsRunning(false);
    setMinutos(0);
    setSegundos(0);
    setMilissegundos("00"); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textCustom}>
        {minutos < 10 ? '0' + minutos : minutos}:
        {segundos < 10 ? '0' + segundos : segundos}:
        {milissegundos}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={startTimer} disabled={isRunning}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={stopTimer}>
          <Text style={styles.buttonText}>Parar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'black' }]} onPress={clearTimer}>
          <Text style={styles.buttonText}>Zerar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '50%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center'
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginRight: 25
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  textCustom: {
    fontSize: 150,
  },
});
