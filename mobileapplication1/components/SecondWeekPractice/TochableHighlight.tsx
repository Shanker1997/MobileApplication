import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
const ResponsiveDiv = () => {
    return (
        <>
            <View style={Styleresp.MainContainer}>
                <TouchableHighlight style={Styleresp.Teat}>
                    <Text > Tochabel Screen</Text>
                </TouchableHighlight>

            </View>
        </>
    )
}
export default ResponsiveDiv
const Styleresp = StyleSheet.create({
    MainContainer: {
        flex: 1,

    },
    Teat: {
        backgroundColor: "red",
        width: "50%",
        borderRadius: 20,
        marginLeft: 100
    }
})