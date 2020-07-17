import React from 'react'
import { StyleSheet, Text } from 'react-native'

//вывод актуального значения на экран
export default function Head(props) {
    const { open, nextEntry, currentEntry } = props;

    return (
        <Text style={styles.value}>
            {open ? nextEntry || currentEntry : ''}
        </Text>
    )
}

const styles = StyleSheet.create({
    value: {
        color: "#fff",
        fontSize: 40, 
        textAlign: "right",
        marginRight: 20,
        marginBottom: 10
    }
});