/* eslint-disable indent */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import RandomNumber from './RandomNumber';

export default class Game extends Component {

    state = {
        selectedIDs: []
    };
    
    randomNumbers = Array.from({length: this.props.randomNumberCount})
                         .map(() => 1 + Math.floor(10 * Math.random()));               
    target = this.randomNumbers.slice(0, this.props.randomNumberCount - 2)
                                .reduce((acc, curr) => acc+curr, 0);

    // TODO: Shuffle the randomNumbers array

    isNumberSelected = (index) => {
        return this.state.selectedIDs.indexOf(index) >= 0;
    }

    selectNumber = (index) => {
        this.setState((prevState) => ({
            selectedIDs: [...prevState.selectedIDs, index]
        }));
    }

    // gameStatus: Playing, WON, LOST
    gameStatus = () => {
        const sumSelected = this.state.selectedIDs.reduce((acc, curr) => {
            return acc + this.randomNumbers[curr];
        }, 0);
        if(sumSelected < this.target) {
            return 'PLAYING';
        }
        if(sumSelected === this.target) {
            return 'WON';
        }
        if(sumSelected > this.target) {
            return 'LOST';
        }
    };

    render() {
        const gameStatus = this.gameStatus();
    return (
        <View style={styles.container}> 
            <Text style={[styles.target, styles[`${gameStatus}`]]}> {this.target} </Text>
            <View style={styles.randomContainer}>
                { this.randomNumbers.map((randomNumber, index) => 
                    <RandomNumber 
                    key={index} 
                    id={index}
                    enableStyle={this.isNumberSelected(index) || gameStatus !== 'PLAYING'} 
                    number={randomNumber} 
                    onPress={this.selectNumber}/>
                )}
            </View>
            <Button title="Try Again">Try Again</Button>
            <Text style={[styles.gameStatus, styles[`${gameStatus}`]]}>{gameStatus}</Text>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1,
        paddingTop: 50
    },

    target: {
        fontSize: 50,
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

    gameStatus: {
        marginBottom: 50,
        fontSize: 20,
        padding: 20,
        textAlign: 'center'
    },
    
    WON: {
        backgroundColor: 'green',
        color: 'white'
    },

    LOST: {
        backgroundColor: 'red',
        color: 'white'
    },

    PLAYING: {
        backgroundColor: '#bbb',
    },
});