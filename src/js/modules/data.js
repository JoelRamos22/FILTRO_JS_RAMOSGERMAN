//obtener toda la data 
export const getAllData = async() => {
    const response = await fetch('https://search.imdbot.workers.dev/?q=')
    const data = await response.json()
    console.log(data)
    return data
}

//obtener peliculas por mas antiguas

export const oldestMovies = async() => {
    const data = await getAllData()
    const sortedoldesMovies = data.description
    sortedoldesMovies.sort((a, b) => a['#YEAR'] - b['#YEAR'])
    return sortedoldesMovies
}

//obtener peliculas mas nuevas 

export const newMovies = async() => { 
    const data = await getAllData()
        const sortedMovies = data.description
        sortedMovies.sort((a, b) => b['#YEAR'] - a['#YEAR'])
        console.log(sortedMovies)
        return sortedMovies
}


//obtener pelicualas por rango de IMDB 

export const imdbRange = async() => {
    const data = await getAllData()
        const sortedMovies = data.description
        sortedMovies.sort((a, b) => b['IMDB'] - a['IMDB'])
        console.log(sortedMovies)
        return sortedMovies
}

console.log(getAllData())