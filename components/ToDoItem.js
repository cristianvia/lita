import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Checkbox from "./Checkbox";
import Colors from "../constants/Colors";

export default ({ text, isChecked, onChecked }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <Checkbox isChecked={isChecked} onChecked={onChecked}/>
                <TouchableOpacity onPress={() => {}}>
                    <Text>{text}</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    icon: {
        padding: 5,
        fontSize: 16,
    },
    input: {
        color: Colors.black,
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 0.5,
        marginHorizontal: 5,
        padding: 3,
        height: 25,
        fontSize: 16,
    },
    text: {
        padding: 3,
        fontSize: 16,
    },
});