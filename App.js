import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Settings } from 'react-native'
import { func } from 'prop-types';
    backgroundColor: '#fff',
const MainStack = createStackNavigator();

function MyStack() {
  return (
	<MainStack.Navigator initialRouteName="SearchPage" screenOptions={{ headerTintColor: '#a41034', headerStyle: { backgroundColor: '#fff'}, }}>
      <MainStack.Screen name="SearchPage" component={SearchFormScreen} options={{title: 'Search For a Movie',}}/>
      <MainStack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{title: 'Settings',}} />

    </MainStack.Navigator>
  );
}
  },
})


export default class App extends React.Component {

	state = {
		movies: " ",
		movieName: " ",
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

