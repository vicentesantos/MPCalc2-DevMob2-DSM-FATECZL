import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import estilo from '..estilo'

export default Aritmetica => {
    const buttons = ['DEC', 'OCT', 'HEX', 'BIN'];
    return(
    <View style={estilo.textButton}>
          {buttons.map((button) =>
            (
              // Mapeamento dos outros botões
              <TouchableOpacity
                onPress={() => Comp.action(button)}
                key={button}
                style={estilo.textButton}>
                <Text
                  style={[
                    estilo.textButton,
                    { color: typeof button === 'number' ? 'white' : 'green' },
                  ]}>
                  {button}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>
    )
}