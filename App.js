import { useState } from 'react';
import { StyleSheet, Text, FlatList, View, Image, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { key: 1, name: 'Alice' },
    { key: 2, name: 'Bob' },
    { key: 3, name: 'Charlie' },
    { key: 4, name: 'Diana' },
    { key: 5, name: 'Ethan' },
    { key: 6, name: 'Fiona' },
    { key: 7, name: 'George' },
    { key: 8, name: 'Hannah' },
    { key: 9, name: 'Isaac' },
    { key: 10, name: 'Jasmine' },
    { key: 11, name: 'Kevin' },
    { key: 12, name: 'Luna' },
    { key: 13, name: 'Marcus' },
    { key: 14, name: 'Nina' },
    { key: 15, name: 'Oscar' }
  ]);

  const handlePress = (key) => {
    // Alert.alert('You tapped on', name);
    setPeople((prevPeople) =>{
      return prevPeople.filter(person => person.key !== key)
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>People</Text>

      <FlatList
      numColumns={3}
      keyExtractor={(item)=>item.key.toString()}
      data={people}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=> handlePress(item.key)}>
          <Text style={styles.item}>{item.name} </Text>
        </TouchableOpacity>
        
      )}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});