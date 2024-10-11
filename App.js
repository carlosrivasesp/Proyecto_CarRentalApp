import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChooseInterestScreen from './screens/ChooseInterestScreen';
import Onboarding from './screens/Onboarding';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>H</Text>
    </View>
  );
}
//<Onboarding/>
//<ChooseInterestScreen/>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
