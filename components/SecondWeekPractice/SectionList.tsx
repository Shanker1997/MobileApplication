import React, { useState } from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
const SectionList1 = () => {
    const Data = [
        {
            id: "1",
            name: "Hyderabad",
            data: ["python", "java", "c++", "Dotnet"]
        }, {
            id: "2",
            name: "Chennai",
            data: ["python FullStack", "java-Fullstack"]
        }, {
            id: "3",
            name: "Mumbai",
            data: ["python FullStack", "java-Fullstack"]
        }, {
            id: "4",
            name: "Bangolore",
            data: ["python FullStack", "java-Fullstack"]
        }
    ]
    const [showList, setShoWList] = useState(false)
    return (
        <>
            <View style={{ flex: 1 }}>
                <Button title='List OF Centers' onPress={() => { (showList) ? setShoWList(false) : setShoWList(true) }}></Button>
                {
                    (showList) ?
                        <View style={{ flex: 1 }}>
                            <SectionList
                                sections={Data}
                                renderItem={({ item }: any) => <Text style={SectionListStyle.ItemStyle}>{item}</Text>}
                                renderSectionHeader={({ section: { name } }: any) => <Text style={SectionListStyle.SectionHeading}>{name}</Text>}
                                style={{ backgroundColor: "grey" }}
                            />
                        </View> : ""
                }
            </View>
        </>
    )
}
const SectionListStyle = StyleSheet.create({

    SectionHeading: {
        color: "red",
        textAlign: "center",
        textDecorationLine: "underline",
        textDecorationColor: "grey",
        padding: 5
    },
    ItemStyle: {
        color: "yellow",
        textAlign: "center",
        padding: 5

    }
})
export default SectionList1