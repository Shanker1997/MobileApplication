import React from "react";
import { StyleSheet, Text, View } from "react-native";
const HeaderComponent = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={[{ fontSize: 30, backgroundColor: "rgba(51,2555,255,0.5)" }, HeaderStyles.Header]}> Header Section 1</Text>
        </View>
    )
}
export default HeaderComponent
const HeaderStyles = StyleSheet.create({
    Header: {
        padding: 10,
        margin: 30
    },

})