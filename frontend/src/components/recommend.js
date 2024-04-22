export const recommendMovie = (song) => {
    const today = new Date();
    const currentYear = today.getFullYear();

    const genrePreferences = {
        Comedy: song.danceability > 0.7 && song.valence > 0.5,
        Drama: song.acousticness > 0.3 && song.energy < 0.4,
        Action: song.energy > 0.7 && song.tempo > 120,
        Romance: song.valence > 0.5 && song.acousticness > 0.5,
        Horror: song.energy > 0.6 && song.speechiness > 0.06,
        SciFi: song.instrumentalness > 0.1,
    };

    const genreToId = {
        Comedy: [35],
        Drama: [18],
        Action: [28],
        Romance: [10749],
        Horror: [27],
        SciFi: [878],
    };
    const movies = [
        {
            "adult": false,
            "backdrop_path": "/4Ep2KivIBUZbkS7kHjW7Qywnhhj.jpg",
            "genre_ids": [
                28
            ],
            "id": 1049948,
            "original_language": "en",
            "original_title": "Vikings: Battle of Heirs",
            "overview": "A young Viking must come to terms with the realization that he may be the King's son, who was switched at birth, but not before others try to take his rightful place.",
            "popularity": 1024.67,
            "poster_path": "/87goLbbqrJqAxqDS5cBsik1zKT.jpg",
            "release_date": "2023-04-28",
            "title": "Vikings: Battle of Heirs",
            "video": false,
            "vote_average": 7.0,
            "vote_count": 3
        },
    ];

    const targetGenreIds = Object.entries(genrePreferences)
        .filter(([_, isPreferred]) => isPreferred)
        .flatMap(([genre]) => genreToId[genre]);

    const filteredMovies = movies.filter(movie => 
        movie.genre_ids.some(genreId => targetGenreIds.includes(genreId)) && 
        (currentYear - parseInt(movie.release_date.substring(0, 4)) <= 2) && 
        movie.vote_average > 6 
    );

    if (filteredMovies.length > 0) {
        filteredMovies.sort((a, b) => b.popularity - a.popularity || b.vote_average - a.vote_average);
        const recommendedMovie = filteredMovies[0];
        return {
            title: recommendedMovie.title,
            overview: recommendedMovie.overview,
            releaseDate: recommendedMovie.release_date,
            genres: recommendedMovie.genre_ids.map(id => genreToId[id]),
            popularity: recommendedMovie.popularity,
        };
    } else {
        return null; 
    }
};
