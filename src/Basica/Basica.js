import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import estilo from '..estilo'

export default Basica => {
  const buttons = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '3', '2', '1', '+', '0', '.', '+/-', '=']
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