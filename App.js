import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import estilo from './src/estilo'

export default App => {
  const buttons = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '3', '2', '1', '+', '0', '.', '+/-', '=']

  const [currentNumber, setCurrentNumber] = useState('')
  const [lastNumber, setLastNumber] = useState('')

  function Calculator() {
    const splitNumbers = currentNumber.split(' ')
    const fistNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    switch(operator){
      case '+':
        setCurrentNumber((fistNumber + lastNumber).toString())
        return
      case '-': 
        setCurrentNumber((fistNumber - lastNumber).toString())
        return
      case '*':
        setCurrentNumber((fistNumber * lastNumber).toString())
        return
      case '/': 
        setCurrentNumber((fistNumber / lastNumber).toString())
        return
    }
  }

  function handleInput(buttonPressed) {
    if (buttonPressed === "*" | buttonPressed === "/" | buttonPressed === "+" | buttonPressed === "-") {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    if (buttonPressed === "DEL") {
      console.log(currentNumber)
      setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
      return
    }
    if (buttonPressed === ".") {
      setCurrentNumber(currentNumber + buttonPressed)
      return
    }
    if (buttonPressed === "AC") {
      setLastNumber("")
      setCurrentNumber("")
      return
    }
    if (buttonPressed === "=") {
      setLastNumber(currentNumber + " = ")
      Calculator()
      return
    }
    setCurrentNumber(currentNumber + buttonPressed)
  }

  return (
    <SafeAreaView style={estilo.container}>
      <View style={estilo.result}>
        <Text style={estilo.historyText}> {lastNumber} </Text>
        <Text style={estilo.resultText}> {currentNumber} </Text>
      </View>
      <View style={estilo.button}>
        {buttons.map((button) =>
          button === '=' ?
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[estilo.buttons, { backgroundColor: 'orange' }]}>
              <Text style={[estilo.textButton, { color: "white" }]}>{button}</Text>
            </TouchableOpacity>
            :
            button === 'AC' |
              button === 'DEL' |
              button === '+/-' |
              button === '%' |
              button === '*' |
              button === '/' |
              button === '+' |
              button === '-' ?
              <TouchableOpacity onPress={() => handleInput(button)} key={button} style={estilo.button}>
                <Text style={[estilo.textButton, { color: "orange" }]}>{button}</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => handleInput(button)} key={button} style={estilo.button}>
                <Text style={estilo.textButton}>{button}</Text>
              </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
