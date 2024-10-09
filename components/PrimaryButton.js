import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const PrimaryButton = ({children}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  text:{
    color: '#000',
    fontSize: 16
  },
  button:{
    backgroundColor: '#9acd32',
    padding: 10,
    paddingVertical: 20,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center'
  }
})