


function movieTrailer (trailer){

return `
<div class="container1">
<div class="moviePoster">
${"<img src='" + trailer.poster + "' style='height:100%; width:100%' />"}
</div>
<div class="movieTrailers">
<div style="font-size:40px; font-color:black;">
${trailer.title}
</div>
<div style="font-size:15px; font-color:black">
${trailer.year}
</div>
<div style="font-size:15px; font-color:black">
IMDB: ${trailer.imdbRating}/10
</div>
<div style="font-size:15px; font-color:black">
Rotten Tomatoes:
${trailer.rottenTomatoesRating * 100 + "%"}
</div>
</div>
</div>

`
}





function renderMovies(movies) {
    
    var movieArray = movies.map(movieTrailer)
    
    return   '<div>' + movieArray.join('') + '</div>'
    
}



function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}