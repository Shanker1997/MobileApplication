import React, { useState } from 'react'
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native'
const FlatLislReander = () => {
    const Data: any = [{
        id: 1,
        name: "shanker",
        contactno: 9177196626
    },
    {
        id: 2,
        name: "shiva",
        contactno: 9705064212

    }
    ]

    const resetView = () => {
        (viewList) ? setViewList(false) : setViewList(true)
    }
    const [viewList, setViewList] = useState(false)
    return (
        <View style={{ flex: 1 }}>
            {
                (viewList) ?

                    <FlatList
                        data={Data}
                        renderItem={({ item }: any) => <View><Text>{item.name}</Text></View>}
                    />

                    : ""
            }

            <Button title='View List' onPress={() => resetView()}></Button>


        </View>

    )
}
const TextStyle = StyleSheet.create({
    textTag: {
        textAlign: "center",
        fontWeight: "bold"
    }
})
export default FlatLislReander