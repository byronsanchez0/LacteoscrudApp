import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './Views/List';
import Details from './Views/Details';
import Add from './Views/Add'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
     <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerStyle: {backgroundColor: '#FF8800'},
        headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} name='Productos' component={List} />
      <Stack.Screen options={{headerStyle: {backgroundColor: '#FF8800'},
        headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}  name='Detalles' component={Details}/>
       <Stack.Screen options={{headerStyle: {backgroundColor: '#FF8800'},
        headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}  name='Agregar' component={Add}/>
    </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
