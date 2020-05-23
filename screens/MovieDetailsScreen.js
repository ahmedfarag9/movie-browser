import React from 'react'
import {Button, View, StyleSheet, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


const renderItem = element =>

    <Text style={styles.text}>

        Title: {element.Title} {'\n'}
        {element.Ratings[0].Source} : {element.Ratings[0].Value} {'\n'}
        {element.Ratings[1].Source} : {element.Ratings[1].Value} {'\n'}
        {element.Ratings[2].Source} : {element.Ratings[2].Value} {'\n'}
        Actors: {element.Actors} {'\n'}
        BoxOffice: {element.BoxOffice} {'\n'}
        Awards: {element.Awards} {'\n'}
        Country: {element.Country} {'\n'}
        Director: {element.Director} {'\n'}
        Genre: {element.Genre} {'\n'}
        imdbID: {element.imdbID} {'\n'}
        imdbRating: {element.imdbRating} {'\n'}
        imdbVotes: {element.imdbVotes} {'\n'}
        Language: {element.Language} {'\n'}
        Metascore: {element.Metascore} {'\n'}
        Plot: {element.Plot} {'\n'}
        Production: {element.Production} {'\n'}
        Rated: {element.Rated} {'\n'}
        Released: {element.Released} {'\n'}
        Type: {element.Type} {'\n'}
        Website: {element.Website} {'\n'}
        Writer: {element.Writer} {'\n'}
        Year: {element.Year} {'\n'}

    </Text>


const styles = StyleSheet.create({
    container: {
      //justifyContent: 'center',
      flex: 1,
      //marginTop: 20,
      //marginHorizontal: 50,
      //paddingVertical: 5,
    },
    text: {
		paddingHorizontal: 20,
		fontSize: 21 
      //textAlign: 'center',
    },
    image: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		width: 500,
		height: 1000, 
		justifyContent: 'center',
		alignItems: 'center',
		//width: null,
		//height: null,
		//resizeMode: 'cover'
    },    
  })
  

export default class MovieDetailsScreen extends React.Component {

  state = {
    movie: null,
    showMovie: false,
  }

  componentDidMount() {
    const movie = this.props.route.params
    //console.log(movie)
    //const tmp = route.params?.data ?? 'defaultValue';
    this.setState({
		movie: movie,
		showMovie: true
    });
}


  render() {
    
    return (
      <ScrollView style={styles.container}>

        {this.state.showMovie && (
          <Image
            source={{
              uri: this.state.movie.Poster,
            }}
            style={styles.image}>
          </Image>
        )}
        
        <Text>{this.state.showMovie && renderItem(this.state.movie)}</Text>
         
      </ScrollView>
    )
  }
}