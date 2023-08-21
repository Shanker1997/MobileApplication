import React from 'react'
import { View, StyleSheet, ImageBackground, Text, ScrollView } from 'react-native'
const ImageContainer = () => {
    return (
        <View style={Styles.mainContainer}>
            <ScrollView>
                <View style={Styles.subContainer}>

                    <ImageBackground source={require("./assets/python.png")} style={Styles.image}>
                        <Text>Python</Text>
                    </ImageBackground>
                    <ImageBackground source={require("./assets/python.png")} style={Styles.image}>
                        <Text>Python</Text>
                    </ImageBackground>
                    <ImageBackground source={require("./assets/python.png")} style={Styles.image}>
                        <Text>Python</Text>
                    </ImageBackground>
                    <ImageBackground source={require("./assets/python.png")} style={Styles.image}>
                        <Text>Python</Text>
                    </ImageBackground>
                    <ImageBackground source={require("./assets/python.png")} style={Styles.image}>
                        <Text>Python</Text>
                    </ImageBackground>
                    <ImageBackground source={require("./assets/python.png")} style={Styles.image}>
                        <Text>Python</Text>
                    </ImageBackground>
                    <ImageBackground source={require("./assets/python.png")} style={Styles.image}>
                        <Text>Python</Text>
                    </ImageBackground>
                    <ImageBackground source={require("./assets/python.png")} style={Styles.image}>
                        <Text>Python</Text>
                    </ImageBackground>
                    <ImageBackground source={require("./assets/python.png")} style={Styles.image}>
                        <Text>Python</Text>
                    </ImageBackground>
                    <ImageBackground source={require("./assets/python.png")} style={Styles.image}>
                        <Text>Python</Text>
                    </ImageBackground>
                    <ImageBackground source={require("./assets/python.png")} style={Styles.image}>
                        <Text>Python</Text>
                    </ImageBackground>

                </View>
            </ScrollView>

        </View>
    )
}
const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        marginTop: 10,
        marginLeft: 20,
        flexDirection: "row",
        padding: 5
    },
    image: {
        width: 70,
        marginRight: 5,
        flex: 1,
        textAlign: "center",
        display: "flex",
        justifyContent: "center"
    }


})
export default ImageContainer