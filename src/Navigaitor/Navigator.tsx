import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenImag1 from '../Screeens/ScreeenImag1';
import ScreenImag2 from '../Screeens/ScreenImag2';
import { Screen1 } from '../Screeens/Screen1';
import { Screen3 } from '../Screeens/Screen3';
import { Screen4 } from '../Screeens/Screen4';

export type RootStackParamList = {
  Screen1: undefined;
  ScreenImag1: undefined;
  ScreenImag2: undefined;
  Screen3: undefined;
  Screen4: undefined;
}

const Stack = createStackNavigator <RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="ScreenImag1" component={ScreenImag1} />
      <Stack.Screen name="ScreenImag2" component={ScreenImag2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="Screen4" component={Screen4} />
    </Stack.Navigator>
  );
}
