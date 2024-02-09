import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigaitor/Navigator';
import { ButonComponent } from '../Components/ButonComponent';

interface Props extends StackScreenProps<RootStackParamList, 'Screen1'> {}

export const Screen1 = ({ navigation }: Props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.Bienvenido}>Bienvenido</Text>
      <ButonComponent
        Title="Imagen 1"
        onPress={() => navigation.navigate('ScreenImag1')}
      />
      <ButonComponent
        Title="Imagen 2"
        onPress={() => navigation.navigate('ScreenImag2')}
      />
      <ButonComponent Title=">=" onPress={() => navigation.navigate('Screen3')} />
      <ButonComponent Title="<=" onPress={() => navigation.navigate('Screen4')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Bienvenido: {
    fontSize: 29,
    color: '#2D4356',
    marginBottom: 200,
  },
  button1: {
    backgroundColor: '#2D4356',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  button2: {
    backgroundColor: '#2D4356',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  button3: {
    backgroundColor: '#2D4356',
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginBottom: 10,
  },
  button4: {
    backgroundColor: '#2D4356',
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginBottom: 10,
  },
});