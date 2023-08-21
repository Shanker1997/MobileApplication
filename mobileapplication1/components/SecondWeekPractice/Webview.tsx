import React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
const CourseReference = (props: any) => {
    const { url } = props.route.params
    return (
        <WebView source={{ uri: url }} />


    )
}
export default CourseReference