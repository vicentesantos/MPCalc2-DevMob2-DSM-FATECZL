import React from 'react'
import { useState } from 'react'
import { Text, View } from 'react-native'
import estilo from './src/estilo'
import Basica from './src/Basica/Basica'
import Trigonometria from '.src/Trigonometria/Trigonometria'
import Aritmetica from '.src/Aritmetica/Aritmetica'
import  Calculadora  from './src/Calculadora'

export default App => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [trigonometria, setTrigonometria] = useState('');
  const [aritmetica, setAritmetica] = useState('DEC');

  function handleInputBasic(buttonPressed) {
    switch (buttonPressed) {
      case '+':
      case '-':
      case 'x':
      case '/':
        setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
        return;
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case 'LIMPAR': // Limpa todo o conteúdo
        setLastNumber('');
        setCurrentNumber('');
        setAritmetica('DEC');
        setTrigonometria('');
        return;
      case '=':
        setLastNumber(currentNumber + ' = ');
        setCurrentNumber(
          Calculadora(
            currentNumber,
            trigonometria,
            aritmetica
          )
        );
        return;
      case '+/-':
        setCurrentNumber((-1 * currentNumber).toString());
        return;
    }

    setCurrentNumber(currentNumber + buttonPressed);
  }

  function handleInputTrigonometria(buttonPressed) {
    if (buttonPressed != trigonometria)
      setTrigonometria(buttonPressed);
    else setTrigonometria('');
  }

  function handleInputArtimetica(buttonPressed) {
    setAritmetica(buttonPressed);
  }

  return (
    <>
      <View style={estilo.container}>
        <View style={estilo.result}>
          <Text style={estilo.historyText}>{lastNumber}</Text>
          <Text style={estilo.resultText}>{currentNumber}</Text>
          <Text style={estilo.historyText}>
            {trigonometria} {aritmetica}
          </Text>
        </View>
        <Aritmetica action={handleInputArtimetica} />
        <Trigonometria action={handleInputTrigonometria} />
        <Basica action={handleInputBasic} />
      </View>
    </>
  );
};

