import React from 'react'
import{TouchableOpacity, StyleSheet, Text, View} from 'react-native'
import propTypes from 'prop-types'

const styles = StyleSheet.create({
	row: {padding: 20},
	//borderWidth: 1,
	//borderColor: 'black',
	//width: 10,
	//hight: 10,
	//minHight: 100,
	//marginTop: 10,
	marginHorizontal: 50,
	paddingHorizontal: 50,
	//paddingVertical: 5,
	//borderRadius: 3,
})

const Row = props => (
	<TouchableOpacity style={styles.row} onPress={() => props.onSelectMovie(props)}>
		<Text key = {props.name}> {props.name} : {props.year}</Text>
	</TouchableOpacity>
)

