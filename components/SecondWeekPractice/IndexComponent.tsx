import React, { useState } from 'react'
import { StatusBar, View, Text, StyleSheet, ImageBackground, Button, SectionList } from 'react-native'
import Header from './HeaderComponenet'
import SectionList1 from './SectionList'
import ResponsiveDiv from './TochableHighlight'
import { WebView } from 'react-native-webview'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CourseReference from './Webview'
const Stack = createNativeStackNavigator()

const IndexOfWeek2 = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {
                        backgroundColor: "#edf0f2"
                    }
                }}>
                    <Stack.Screen name='Sceern1' component={Header}
                        options={{
                            headerTintColor: "orange",
                            headerTitle: () => <Button title='Safe-Logic '></Button>,
                            headerRight: () => <Text>Welcome To Team </Text>
                        }} />
                    <Stack.Screen name='Screen2' component={SectionList1} options={{
                        title: "We Are At"
                    }} />
                    <Stack.Screen name="ReferenceScreen" component={CourseReference}
                        options={{
                            headerTitle: () => <Button
                                title='Course Over View'></Button>
                        }} />
                </Stack.Navigator>
            </NavigationContainer>
            {/* <View style={{ flex: 1 }}> */}

            {/* <Text><WebView source={{ uri: "https://www.atatus.com/blog/best-react-native-component-libraries/" }} /> See</Text> */}
            {/* <SectionList1 /> */}
            {/* <ResponsiveDiv /> */}
            {/* </View> */}

        </>
    )
}
export default IndexOfWeek2



