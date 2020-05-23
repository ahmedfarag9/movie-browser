import React from 'react'
import {Button, View, StyleSheet, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

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

