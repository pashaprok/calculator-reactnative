import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import MainLayout from './view/MainLayout';
import Head from './view/Head';
import process from './logic/processKey';

//изначальное состояние при загрузке приложения
export const initialState = {
    open: true,
    currentEntry: 0,
    nextEntry: null,
    operation: null,
    float: false,
    memory: null,
    lastAction: null,
    lastCalculation: {},
};

//Основной компонент, обьявляется через PureComponent, потому что React.PureComponent реализует shouldComponentUpdate () с мелкой подпоркой и сравнением состояний.
export default class Calculator extends PureComponent {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    //обработчик всех нажатий приложения
    handleClick = (key) => {
        this.setState({
            lastAction: null,
            lastCalculation: {},
            ...process(this.state, key)//вызов функции, которая по мере необходимости будет возвращать новое состояние
        });
    }

    render() {
        const { open, nextEntry, currentEntry, memory } = this.state;
        return (
            <View style={styles.container}>
                <Head 
                    open={open}
                    memory={memory}
                    nextEntry={nextEntry}
                    currentEntry={currentEntry}
                />
                <MainLayout
                    onChange={this.handleClick}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#020202",
        justifyContent: "flex-end"
    }
});