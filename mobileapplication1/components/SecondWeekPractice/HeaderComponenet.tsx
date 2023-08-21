import React from 'react'
import { Button, ImageBackground, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import ImageContainer from './ContainerWithImageBaground';
const Header = (props: any) => {
    return (
        <>
            {/* <ScrollView> */}

            <View style={{ flex: 1 }}>
                <ImageBackground source={require("./assets/componente2.jpg")} style={HeaderStyles.ImageBacgorund} >
                    <View style={HeaderStyles.MainContainer}>
                        <Text style={HeaderStyles.Heading} >Choose The Course</Text>
                        <Text style={HeaderStyles.item} onPress={() => { props.navigation.navigate("ReferenceScreen", { url: "https://www.python.org/" }) }}> Python </Text>
                        <Text style={HeaderStyles.item} onPress={() => { props.navigation.navigate("ReferenceScreen", { url: "https://www.javatpoint.com/java-tutorial" }) }}> Java </Text>
                        <Text style={HeaderStyles.item} onPress={() => { props.navigation.navigate("ReferenceScreen", { url: "https://www.ibm.com/topics/data-science" }) }}> Data Science </Text>
                        <Text style={HeaderStyles.item} onPress={() => { props.navigation.navigate("ReferenceScreen", { url: "https://react.dev/learn" }) }}> React Js </Text>
                        <Text style={HeaderStyles.item} onPress={() => { props.navigation.navigate("ReferenceScreen", { url: "https://www.javatpoint.com/microsoft-azure" }) }}> Azure Cloud</Text>
                        <Text style={HeaderStyles.item} onPress={() => { props.navigation.navigate("ReferenceScreen", { url: "https://dotnet.microsoft.com/en-us/learn" }) }}> DOT NET  </Text>
                        <StatusBar backgroundColor={"skyblue"} barStyle={"dark-content"} />
                    </View>
                    <Button title='Go To Screen2 ' onPress={() => { props.navigation.navigate("Screen2") }}></Button>
                </ImageBackground>
                {/* <ImageContainer /> */}

            </View>
            {/* </ScrollView> */}
        </>
    )

}
const HeaderStyles = StyleSheet.create({
    ImageBacgorund: {
        display: "flex",
        justifyContent: "center",
        flex: 1
    },
    MainContainer: {
        marginTop: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    item: {
        width: 110,
        backgroundColor: "green",
        marginLeft: 10,
        marginTop: 20,
        padding: 5,
        textAlign: "center",
        color: "#ffffff"
    },
    Heading: {
        width: "100%",
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
})
export default Header