import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardCars from '../components/CardCars'
import PrimaryButton from '../components/PrimaryButton'
import Txt2 from '../components/Txt2'
import Description from '../components/Description'
import Button3 from '../components/Button3'
import { SafeAreaView } from 'react-native-safe-area-context'

const ChooseInterestScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Button3>Skip</Button3>
        <Txt2>Which brand of car you prefer?</Txt2>
        <Description>Login to your account using email or social networks</Description>
        <View style={styles.container2}>
          <CardCars/>
        </View>
        <PrimaryButton>Finish</PrimaryButton>
      </View>
    </SafeAreaView>
    
  )
}

export default ChooseInterestScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 50
  },
  container2:{
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10
  }
})