import React from 'react'
import {Button, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
const styles = StyleSheet.create({
    container: {
      //justifyContent: 'center',
      flex: 1,
      //marginTop: 20,
      //marginHorizontal: 50,
      paddingHorizontal: 10,
      //paddingVertical: 5,
    },
    text: {
      //textAlign: 'center',
    },
    image: {
      
    },    
  })
  

export default class MovieDetailsScreen extends React.Component {

  state = {
    movie: null,
    showMovie: false,
  }