/* eslint-disable indent */
import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default class Game extends Component {

    randomNumbers = Array.from({length: this.props.randomNumberCount})
                         .map(() => 1 + Math.floor(10 * Math.random()));               
    target = this.randomNumbers.slice(0, this.props.randomNumberCount - 2)
                                .reduce((acc, curr) => acc+curr, 0);

    // TODO: Shuffle the randomNumbers array
  render() {
    return (
        <View style={styles.container}> 
            <Text style={styles.target}> {this.target} </Text>
            <View style={styles.randomContainer}>
                { this.randomNumbers.map((randomNumber, index) => 
                <Text style={styles.random} key={index}>{randomNumber}</Text>
                )}
            </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1,
        paddingTop: 30
    },

    target: {
        fontSize: 50,
        backgroundColor: '#bbb',
        marginHorizontal: 50,
        textAlign: 'center',
        fontWeight: 'bold'
    }, 

    randomContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },

    random: {
        width: '30%',
        textAlign: 'center',
        padding: 25,
        margin: 20,
        backgroundColor: '#aaa',
        fontSize: 22
    }
});