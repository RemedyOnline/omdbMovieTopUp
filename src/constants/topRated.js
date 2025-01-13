const topRatedMovies = [
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI3NDkyNDk5Nl5BMl5BanBnXkFtZTgwNjk1Mzc4MzE@._V1_SX300.jpg",
    Title: "Kwaku Ananse",
    Year: "2013",
    imdbID: "tt2499072",
    Type: "movie",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjExODg3MDUzNl5BMl5BanBnXkFtZTgwNjExMjE3NzE@._V1_SX300.jpg",
    Title: "Gods of Egypt",
    Year: "2016",
    imdbID: "tt2404233",
    Type: "movie",
  },
  {
    Title: "Inside Out 2",
    Year: "2024",
    imdbID: "tt22022452",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "A Country Called Ghana",
    Year: "2024",
    imdbID: "tt32167216",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODhjNmI4YWItOGRiZC00YjYxLTkyN2YtNTQxZmMzZDVhMzVjXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Mortal Kombat",
    Year: "2021",
    imdbID: "tt0293429",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNmRmN2I5M2EtNDA1Ny00N2ZmLWE3YWYtMjQ1NTFjY2Q4NWM5XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Beauty and the Beast",
    Year: "2017",
    imdbID: "tt2771200",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_SX300.jpg",
  },
  {
    Title: "Rambo",
    Year: "2008",
    imdbID: "tt0462499",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg",
  },
  {
    Title: "The Flash",
    Year: "2023",
    imdbID: "tt0439572",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmE2NzBjNGUtNTJiMy00N2UxLWEyYzMtYzFjODFhMGZlOTgzXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "The Super Mario Bros. Movie",
    Year: "2023",
    imdbID: "tt6718170",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGZlN2EzOTYtMzUzOS00NTM3LTg0MTQtZDVjZGM4YmJlNWNhXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Tell Me Your Secrets",
    Year: "2021",
    imdbID: "tt7177890",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjQwODg2OTQtYjFmYi00OTdhLTgxMmEtYWI4NTVlNDE0NjczXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Kung Fu Panda 4",
    Year: "2024",
    imdbID: "tt21692408",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzJlNGYxYzQtOTg4MC00OTMyLTkwYzMtZDRlNTgwY2YwOWYxXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "2024 UEFA European Football Championship",
    Year: "2024",
    imdbID: "tt32551602",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTk0NDlhZmYtNmI1Ny00NWY5LWJmYzktY2E0YmYwYTY4ZmM3XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Kumkum Bhagya",
    Year: "2014–2024",
    imdbID: "tt3911870",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU2YjllNjAtOTZiYy00OTc0LTlkNWMtNjgwZGVlYzAwNTg2XkEyXkFqcGdeQXVyNzM4MjU3NzY@._V1_SX300.jpg",
  },
  {
    Title: "Puss in Boots: The Last Wish",
    Year: "2022",
    imdbID: "tt3915174",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzg0MWUzMjctYjVlOS00NzVjLWIwZDMtNzg1YzNkYzdjNTMwXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Coming to Africa: Welcome to Ghana",
    Year: "2023",
    imdbID: "tt28357778",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDgxMjU0ZWQtOTM4Yi00YmE2LTkyNzktMzNkNjIxNjI2YmJhXkEyXkFqcGdeQXVyMjE0MjA5Mjc@._V1_SX300.jpg",
  },
  {
    Title: "Spider-Man: Across the Spider-Verse",
    Year: "2023",
    imdbID: "tt9362722",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Titanic",
    Year: "1997",
    imdbID: "tt0120338",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Anaconda",
    Year: "1997",
    imdbID: "tt0118615",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmU2ZGYyZDAtZGM3My00NjQ4LTlmZmQtNzY4OGRlNDFjNTE4XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Hard Target",
    Year: "1993",
    imdbID: "tt0107076",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTBkNzJmZTMtMTNlMy00ZTA0LTg1YzMtZGUyNWUwNTIxZDY2XkEyXkFqcGc@._V1_SX300.jpg",
  },
];

export default topRatedMovies;
