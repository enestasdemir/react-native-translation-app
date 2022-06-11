// React
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Translate from './src/screens/Translate';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Translate">
        <Stack.Screen name="Translate" component={Translate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
