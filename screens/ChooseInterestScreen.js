import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardCars from '../components/CardCars'

const ChooseInterestScreen = () => {
  return (
    <View style={styles.container}>
      <CardCars/>
    </View>
  )
}

export default ChooseInterestScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})