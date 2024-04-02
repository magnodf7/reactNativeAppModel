import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Car from './components/Car';
import Person from './components/Person';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState(false)
  const [nameCar, setNameCar] = useState('')

  return (
    <View style={styles.container}>
      <TextInput placeholder='Insera o texto' onChangeText={setNameCar}></TextInput>
      <Text>
        < Car name={nameCar}/>
      </Text>
      <Button title={value ? 'Tanque cheio!' : 'Encher tanque'}
        onPress={() => {setValue(true)}}
        disabled={value}
      >
      </Button>
      <Button title='Esvaziar tanque'
        disabled={!value}
        onPress={() =>{setValue(false)}}
      >
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});