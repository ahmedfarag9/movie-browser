const processMovie = movie => ({
	name: movie.Title,
	//year: movie.Year,
	picture: movie.picture
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
