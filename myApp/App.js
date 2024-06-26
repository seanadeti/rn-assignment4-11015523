import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  StyleSheet } from 'react-native';
import Login from './components/login'
import Home from './components/homepage'

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer initialRouteName="Login">
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});