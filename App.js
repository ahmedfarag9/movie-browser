import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
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

