const processMovies = movie => ({
	name: movie.Title,
	year: movie.Year,
	picture: movie.Poster,
	imdbID: movie.imdbID,
	type: movie.Type,
})
    name: movie.name,
    year: movie.year,
    picture: movie.picture
})


export const fetchMovie = async () => {
    const response = await fetch('URL')
    const {results} = await response.json()
    return results.map(processMovie)
}
