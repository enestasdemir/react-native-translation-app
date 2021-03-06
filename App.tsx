// React
import React from 'react';
import { Image, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Utils
import { translate } from './src/common/i18n/i18n';

// Screens
import Translate from './src/screens/Translate';
import Favorites from './src/screens/Favorites';

const Stack = createNativeStackNavigator();

const StyledImage = styled(Image)`
  width: 24px;
  height: 24px;
`;

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Translate">
      <Stack.Screen
        name="Translate"
        component={Translate}
        options={({ navigation }) => ({
          title: translate('TRANSLATE'),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('Favorites')}>
              <StyledImage source={require('./src/assets/star.png')} />
            </Pressable>
          )
        })}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: translate('FAVORITES')
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
