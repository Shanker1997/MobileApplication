import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App';
import NavigationScreen2 from './scrren2';
const Stack = createNativeStackNavigator()
const MyStack = () => {
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="screen1"
                component={App}
            />
            <Stack.Screen
                name="screen2"
                component={NavigationScreen2} />
        </Stack.Navigator>
    </NavigationContainer>
}
export default MyStack