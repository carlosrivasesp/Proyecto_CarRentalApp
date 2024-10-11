import { StyleSheet, Text, View, FlatList, Animated } from 'react-native'
import React, {useState, useRef} from 'react'
import OnboardingItem from '../components/OnboardingItem';

const Onboarding = () => {

  const slides = [
    { id: '1', name: 'Locate the Destination',
      description:'Your destination is at your fingertips. Open app & enter where you want to go.',
      image: require('../assets/imgBackground/1.jpg') },
    { id: '2', name: 'Select your root', 
      description:'Get quick access to frequent locations, and save them as a favourites.',
      image: require('../assets/imgBackground/2.jpg') },
    { id: '3', name: 'Locate the Destination', 
      description:'Your destination is at your fingertips. Open app & enter where you want to go.',
      image: require('../assets/imgBackground/3.jpg') }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null)

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index)
  }).current;

  //const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.container}>
      <FlatList 
        data={slides} 
        renderItem={({item}) => <OnboardingItem item={item}/>}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item)=> item.id}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x:scrollX}}}], {
          useNativeDriver: false
        })}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        //viewabilityConfig={viewConfig}
        ref={slidesRef}
        />
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})