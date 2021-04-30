import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from './styles';

import Home from './pages/Home';
import InvestimentoDetail from './pages/InvestimentoDetail';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: 'Resgate',
            headerTitleStyle: { alignSelf: 'center', color: colors.white },
            headerStyle: {
              backgroundColor: colors.gradiente,
            },
          }}
          component={Home}
        />
        <Stack.Screen
          name="Resgate"
          options={{
            title: 'Resgate',
            headerTitleStyle: { alignSelf: 'center', color: colors.white },
            headerStyle: {
              backgroundColor: colors.gradiente,
            },
          }}
          component={InvestimentoDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
