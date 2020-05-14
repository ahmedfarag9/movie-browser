const processMovies = movie => ({
	name: movie.Title,
	year: movie.Year,
	picture: movie.Poster,
	imdbID: movie.imdbID,
	type: movie.Type,
})


export const fetchMovies = async (movieName) => {

    const movieNameTmp = "'" + movieName + "'"


export const fetchMovie = async () => {
    const response = await fetch('URL')
    const {results} = await response.json()
    return results.map(processMovie)
}
