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


    componentDidUpdate(prevProps, prevState) {
        if (this.state.movieName) {
            if (this.state.movieName !== prevState.movieName ) {
            this.validateForm()
            }
        }
    }


	getMovies = async () => {
		const results2 = await fetchMovies(this.state.movieName)
		this.setState({movies: results2})
		this.setState({showMovies: true})
        this.handleSubmit()
	}
    

    getHandler = key => val => {
        this.setState({[key]: val})
    }


    validateForm = () => {
        //console.log(this.state)
        //const spacedmovieName = this.state.movieName.split(' ')
        /*if (
            spacedmovieName[0] &&
            spacedmovieName[1] &&
            
        //if (this.state.movieName !== " ") {
        this.setState({isFormValid: true})
            //this.getMovies()
 
        /*} else {
            this.setState({isFormValid: false})        
        }
        }*/
    }


    handleSubmit = () => {
        //this.getMovies()
        this.props.onSubmit(this.state.movies)    
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