import React from 'react'
import {ScrollView} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const ScrollViewMovies = props => (
	<ScrollView key = {props.movies.imdbID} >{props.movies.map(movie => <Row {...movie} />)}</ScrollView>
)

ScrollViewMovies.PropTypes = {
	movies: PropTypes.array
}

export default ScrollViewMovies