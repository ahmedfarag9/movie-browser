import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import SearchFormScreen from './screens/SearchFormScreen'
import SettingsScreen from './screens/SettingsScreen'
import MovieDetailsScreen from './screens/MovieDetailsScreen'
import { Settings } from 'react-native'
import { func } from 'prop-types';



const MainStack = createStackNavigator();

function MyStack() {
  return (
	<MainStack.Navigator initialRouteName="SearchPage" screenOptions={{ headerTintColor: '#a41034', headerStyle: { backgroundColor: '#fff'}, }}>
      <MainStack.Screen name="SearchPage" component={SearchFormScreen} options={{title: 'Search For a Movie',}}/>
      <MainStack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{title: 'MovieDetails',}}/>

    </MainStack.Navigator>
  );
}
const MainTabs = createBottomTabNavigator();

function MyTabs() {
	return (
		<MainTabs.Navigator initialRouteName="MyStack" tabBarOptions={{ activeTintColor:'#a41034', }}>

			<MainTabs.Screen name="MyStack" component={MyStack} options={{ tabBarLabel: 'Search', tabBarIcon: ({ tintColor,focused }) => (
				<MaterialCommunityIcons name="shield-search" color={tintColor} size={25} />
			), }}
			/>

			<MainTabs.Screen name="SettingsScreen" component={SettingsScreen} options={{ tabBarLabel: 'Settings', tabBarIcon: ({ tintColor,focused }) => (
				<MaterialCommunityIcons name="settings-helper" color={tintColor} size={25} />
			), }}
			/>

		</MainTabs.Navigator>
	)
}



export default class App extends React.Component {

	state = {
		movies: null,
		movieName: " ",
	}

	/*componentDidMount() {
		this.getMovies()
	}

	getMovies = async () => {
		const results = await fetchMovie()
		this.setState({movies: results})
	}*/


  render() {
    return (
			
			<NavigationContainer>
				<MyTabs/>
			</NavigationContainer>
    )
  }
}
