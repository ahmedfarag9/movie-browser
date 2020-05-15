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
})

export default class SearchForm extends React.Component{
	state = {
        movieName: null,
        isFormValid: false,
        movies: null,
        showMovies: false
    }
