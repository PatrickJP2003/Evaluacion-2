
import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/Navigaitor/Navigator';

 const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App;


