import { StyleSheet, Text, View, ImageBackground, useWindowDimensions } from 'react-native'
import React from 'react'
import Txt2 from './Txt2';
import Description from './Description';
import Button2 from './Button2';

const OnboardingItem = ({item}) => {

  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <ImageBackground source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}>
        <View>
          <Txt2 style={styles.text}>{item.name}</Txt2>
          <Description style={styles.description}>{item.description}</Description>
          <Button2 style={styles.button}>Next</Button2>
        </View>
      </ImageBackground>
    </View>
  )
}

export default OnboardingItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    justifyContent: 'flex-start'
  },
  text: {
    paddingTop: 100,
    paddingHorizontal: 15,
    color: '#fff'
  },
  description: {
    paddingHorizontal: 15,
    paddingTop: 15,
    color: '#d3d3d3',
  },
  button: {
    marginLeft: 15
  }
})