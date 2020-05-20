import React from 'react'
import {FlatList} from 'react-native'
import propTypes from 'prop-types'

import Row from './Row'

const FlatListMovies = props => {

  const tmpProp = props.onSelectMovie
  //console.log(tmpProp)
  const tmpMovies = props.movies


  return (
    <FlatList renderItem={({item}) => <Row {...item} onSelectMovie={tmpProp} />} data={tmpMovies}  keyExtractor={item => item.imdbID}/>
  )
}
