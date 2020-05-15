import React from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, View, Text, ImageBackground} from 'react-native'
import {fetchMovies} from './api'
//import {search} from './mockData'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
        //paddingHorizontal: 10,
        //paddingVertical: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginTop: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
    image: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		//width: 400,
		//height: 300, 
		justifyContent: 'center',
		//alignItems: 'center',
		width: null,
        height: null,
        resizeMode: 'cover'
	  },    	  
})

export default class SearchForm extends React.Component{
	state = {
        movieName: null,
        isFormValid: false,
        movies: null,
        showMovies: false
    }

    render () {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>


                <TextInput 
                    style={styles.input}
                    value={this.state.movieName}
                    onChangeText={this.getHandler('movieName')}
                    placeholder="Movie Name"
                />
                <Button title="Search" onPress={this.getMovies} disabled={!this.state.isFormValid} />

            </KeyboardAvoidingView>
        )
    }
}