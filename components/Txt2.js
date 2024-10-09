import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Txt2 = ({children}) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default Txt2

const styles = StyleSheet.create({
  text:{
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold'
  }
})