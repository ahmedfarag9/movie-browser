const processMovie = movie => ({
    name: movie.name,
    year: movie.year,
    picture: movie.picture
})


export const fetchMovie = async () => {
    const response = await fetch('URL')
    const {results} = await response.json()
    return results.map(processMovie)
}
