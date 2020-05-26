const processMovies = movie => ({
	name: movie.Title,
	year: movie.Year,
	picture: movie.Poster,
	imdbID: movie.imdbID,
	type: movie.Type,
})



export const fetchMovies = async (movieName) => {

    const movieNameTmp = "'" + movieName + "'"

	const MyApiKey = '000abc'      // insert your Api key in here

	const url = 'http://www.omdbapi.com/?apikey=' + MyApiKey + '&r=json&s=' + movieNameTmp


	const response = await fetch(url)
    const results = await response.json()    
	//console.log(results)

	return results.Search.map(processMovies)
	
}



export const fetchMovieDetails = async (movieImdbID) => {


	const MyApiKey = '000abc'      // insert your Api key in here



	const url = 'http://www.omdbapi.com/?apikey=' + MyApiKey + '&plot=full&r=json&i=' + movieImdbID

	const response = await fetch(url)
    const result = await response.json()

	//const response = await fetch('http://www.omdbapi.com/?apikey=4e59c02d&r=json&s=Avengers')
	//console.log(result)

	return result
	
}
