import React from 'react'
import {Button, View, StyleSheet, Text, Image, ImageBackground} from 'react-native'
import SearchForm from '../SearchForm'
//import ScrollViewMovies from '../ScrollViewMovies'
//import {fetchMovie} from '../api'
import FlatListMovies from '../FlatListMovies'
import {fetchMovieDetails} from '../api'

//const renderItem = movie => <Text style={styles.text}>{movie.name} {movie.year}</Text>


const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	text: {
		justifyContent: 'center',
		//flex: 1,
		marginTop: 50,
		marginHorizontal: 50,
		paddingHorizontal: 50,
		//paddingVertical: 5,
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
  

export default class SearchFormScreen extends React.Component {
	/*static navigationOpions = {
		headerTitle: 'Search For a Movie',
	}*/

	state = {
		showMovies: false,
		movies: null,
		movieNameTest: "MovieTest"
	}

	toggleMovies = () => {
		//console.log(this.state.movies)		
		this.setState({showMovies: true})

	  }
	
