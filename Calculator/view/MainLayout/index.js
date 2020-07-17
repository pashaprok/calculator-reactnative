import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { keyTypes } from "../../logic/constants";
import keys from "./keys";
import layout from "./layout";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default class KeyLayout extends Component {
    //pендеринг кнопок
    renderKey = (key, cellIndex, buttonStyles, textStyles) => {
        if (key.label === "") {
            return null;
        } else if (key.label === "0") {
            buttonStyles.push(styles.buttonDouble);

            return (
                <TouchableOpacity 
                    onPress={() => key.onChange(key)} 
                    style={buttonStyles} 
                    key={cellIndex}
                >
                    <Text style={textStyles}>
                        {key.label}
                    </Text>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity 
                    onPress={() => key.onChange(key)} 
                    style={buttonStyles} 
                    key={cellIndex}
                >
                    <Text style={textStyles}>
                        {key.label}
                    </Text>
                </TouchableOpacity>
            );
        }
        
    }

    //pендеринг сетки кнопок
    renderCell = (cell, cellIndex) => {
        let key = {
            extraClass: {
                size: "",
                theme: ""
            },
            onChange: this.props.onChange,
        };

        const buttonStyles = [styles.button];
        const textStyles = [styles.text];

        if (typeof cell === "number" || cell === "") {
            key.type = keyTypes.NUMBER;
            key.label = cell.toString();
            key.value = cell.toString();
        } else {
            const [type, value] = cell.split(".");
            const foundKey = keys.find(
                key => key.type === type && key.value === value
            );
            key.type = type;
            key.value = foundKey.value;
            key.label = foundKey.label;
            if (foundKey.extraClass) {
                key.extraClass = foundKey.extraClass;

                if (key.extraClass.theme === "secondary") {
                    buttonStyles.push(styles.buttonSecondary);
                    textStyles.push(styles.textSecondary);
                } else if (key.extraClass.theme === "accent") {
                    buttonStyles.push(styles.buttonAccent);
                }
            };
        }
    
        return this.renderKey(key, cellIndex, buttonStyles, textStyles);
    };
    
    render() {
        return (
            <View>
                {layout.map((row, rowIndex) => (
                    <View style={styles.keyRow} key={rowIndex}>
                        {row.map((cell, cellIndex) => this.renderCell(cell, cellIndex))}
                    </View>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    keyRow: {
        flexDirection: "row"
    },
    text: {
        color: "#fff",
        fontSize: 32
    },
    textSecondary: {
        color: "#fff"
    },
    button: {
        backgroundColor: "#333333",
        flex: 1,
        height: Math.floor(buttonWidth - 10),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Math.floor(buttonWidth),
        margin: 5
    },
    buttonDouble: {
        width: screen.width / 2 - 10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40
    },
    buttonSecondary: {
        backgroundColor: "#a6a6a6"
    },
    buttonAccent: {
        backgroundColor: "#f09a36"
    }
});