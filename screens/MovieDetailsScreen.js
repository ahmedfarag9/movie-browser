import React from 'react'
import {Button, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
export default class MovieDetailsScreen extends React.Component {

  state = {
    movie: null,
    showMovie: false,
  }
