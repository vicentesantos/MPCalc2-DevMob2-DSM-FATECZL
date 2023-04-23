import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flexGrow: 1,
        paddingTop: StatusBar.currentHeight,
        marginTop: StatusBar.currentHeight,
      },
      result: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
        height: 300,
        backgroundColor: '#171010',
      },
      historyText: {
        color: '#fff',
        fontSize: 22,
        marginBottom: 0,
        marginRight: 10,        
        alignSelf: 'flex-end',
      },
      resultText: {
        fontSize: 80,
        margin: 10,
        color: 'white',
        fontWeight: '100',
        alignSelf: 'flex-end',
      },
      button: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        minHeight: 80,
        minWidth: 80,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      textButton: {
        color: '#FFF',
        fontSize: 25,
        padding: 10,
      },
})