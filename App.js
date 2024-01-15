import { StyleSheet,View} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View
     style={styles.rootScreen}>
    <View>
      <StartGameScreen />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
rootScreen:{
  flex:1,
  backgroundColor:'#ddb52f'

},

});
