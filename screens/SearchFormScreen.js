import React from 'react'
import {Button, View, StyleSheet, Text, Image, ImageBackground} from 'react-native'
import SearchForm from '../SearchForm'
import FlatListMovies from '../FlatListMovies'
import {fetchMovieDetails} from '../api'


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

	state = {
		showMovies: false,
		movies: null,
	}


	handleSelectMovie = async (movie) => {

		const results = await fetchMovieDetails(movie.imdbID)
		//console.log(results)
		this.props.navigation.push('MovieDetails', results)
	}

	
	toggleMovies = () => {
		this.setState({showMovies: true})
	  }
	
	  
	handleSubmit = (movies) => {
		//console.log(movies)
		this.setState({movies: movies})
		this.toggleMovies()
	}


	render() {
		return (
			
		<View style={styles.container}>

			<ImageBackground
				source={{
				uri: 'https://static.wixstatic.com/media/1d6090cc4bbf44628dfd82a1979770e8.jpg',
				}}
				style={styles.image}>
			</ImageBackground>

			<SearchForm onSubmit={this.handleSubmit}/>
				{this.state.showMovies && (
					<FlatListMovies
						style={styles.text}
						movies = {this.state.movies}
						onSelectMovie = {this.handleSelectMovie}
					/>
				)}
		</View>	
		)}	
}