import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChooseInterestScreen from './screens/ChooseInterestScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ChooseInterestScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
