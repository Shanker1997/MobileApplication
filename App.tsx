/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native'
import { ButtonStyle } from './style';
import HeaderComponent from './components/FiesrExtComponent';
import FlatLislReander from './Flatlist';
import { NavigationContainer } from '@react-navigation/native';
function App({ navigation }: any): JSX.Element {
  const view = "Head Details"
  const [state, setState] = useState("Shanker")
  return (
    <>
      <View style={{ backgroundColor: "#d5f0e8", flex: 1 }}>
        {/* <ScrollView style={{ marginBottom: 20 }}> */}
        {/* <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" }} style={{ height: "100%", flex: 0.5 }}> */}
        <HeaderComponent />
        {/* <View style={{ flex: 1.5 }}> */}
        {/* <Text style={{ fontWeight: "bold", color: "green", fontSize: 20 }}> Hellow React Native World </Text>
            <Button title={view} onPress={() => { setState("shiva Shanker") }}></Button>
            {/* <Text style={(state !== "shiva Shanker") ? { height: 50, fontWeight: "bold", padding: 10 } : { height: 20 }}>{(state == "shiva") ? `Hiii Good Moring MR. ${state}` : `Welcome To The Team  ${state} + "!!!!!!`} </Text> */}
        {/* <Text style={[ButtonStyle.heading, { margin: 50, justifyContent: "center" }]}>{state}</Text>
            <Button title="Team Members" onPress={() => { setState("Gouri") }}></Button> */}
        {/* </View> */}
        <ChildComponent />
        {/* </ScrollView> */}
        <FlatLislReander />
      </View>
      <Button title='Go To'></Button>
    </>
  );
}
const ChildComponent = () => {
  const [userName, setUserName] = useState("")
  const [PassWord, setPassWord] = useState("")
  return (
    <View style={{ backgroundColor: "#fff", flex: 1.5 }}>
      <Text >Enter Your Name:</Text>
      <TextInput
        placeholder='Enter Your Name'
        style={[ButtonStyle.TextInputStyle]}
        value={userName}
        onChangeText={(text) => { setUserName(text) }}
      />
      <Text >Enter Password:</Text>
      <TextInput
        placeholder='Enter Password'
        style={[ButtonStyle.TextInputStyle]}
        value={PassWord}
        secureTextEntry={true}
        onChangeText={(text) => { setPassWord(text) }}

      />
      <Button title='Clear Form ' onPress={() => {
        setPassWord(""), setUserName("")

      }}></Button>
    </View>

  )
}


export default App;
