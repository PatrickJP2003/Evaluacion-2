import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Screen5: undefined;
};

interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
}

export const Screen3: React.FC<Props> = ({ navigation }) => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

   const  handleGreaterThanOrEqual = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 >= num2 ? 'El primer número es mayor o igual al segundo' : 'El primer número es menor que el segundo');
    } else {
      setResult('Por favor ingrese números válidos en ambos campos');
    }
  };

  const handleNavigateToScreen5 = () => {
    navigation.navigate('Screen5');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario:</Text>
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={number1}
        onChangeText={text => setNumber1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={number2}
        onChangeText={text => setNumber2(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleGreaterThanOrEqual}>
        <Text style={styles.buttonText}> = </Text>
      </TouchableOpacity>
      <Text style={styles.result}>{result}</Text>
      <TouchableOpacity style={styles.navigateButton} onPress={handleNavigateToScreen5}>
        <Text style={styles.buttonText}> Ir a Screen 5 </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#2D4356',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  result: {
    fontSize: 18,
    marginTop: 10,
  },
  navigateButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
});



