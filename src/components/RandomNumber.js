/* eslint-disable indent */
import React, { Component } from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';


export default class RandomNumber extends Component {
    handlePress = () => {
        if(this.props.enableStyle) {return; }
        this.props.onPress(this.props.id);
    }

    render() {
        return (
            <TouchableOpacity  onPress={this.handlePress}>
                <Text style={[styles.random, this.props.enableStyle && styles.selectedStyle]} >{this.props.number}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    random: {
        textAlign: 'center',
        margin: 30,
        backgroundColor: '#aaa',
        fontSize: 28,
        width: 100,
        paddingVertical: 10,
    },
    selectedStyle: {
        opacity: 0.3
    }
});