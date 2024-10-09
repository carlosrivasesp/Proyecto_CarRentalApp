import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Description = ({children}) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default Description

const styles = StyleSheet.create({
  text:{
    color: '#d3d3d3',
    fontSize: 18,
    fontWeight: 'thin'
  }
})