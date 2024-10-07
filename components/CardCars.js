import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

const CardCars = () => {
  const [isPressed, setIsPressed] = useState(false);

  const ButtonHandler = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View>
      <TouchableOpacity style={[styles.button, isPressed && styles.buttonPressed]} onPress={ButtonHandler}>
        <Image 
          source={require('../assets/tesla.jpg')} // Reemplaza por la URL de tu imagen
          style={styles.image}/>
        <Text>Tesla</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CardCars

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center'
  },
  buttonPressed: {
    borderColor: 'green',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  }
})
