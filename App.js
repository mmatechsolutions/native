import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js Twice again!</Text>
      <StatusBar style="auto" />
      <View style = {styles.trial}>
        <Text>This A trial Text</Text>
      </View>
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
  trial:{
     fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    width:'100%',
    backgroundColor:'blue',
    height:'70',
  }
});
