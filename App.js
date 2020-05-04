import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {fetchMovie} from './api'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


export default class App extends React.Component {

	state = {
		movies: null,
	}

	componentDidMount() {
		this.getMovies()
	}



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test!</Text>
      </View>
    )
  }
}

