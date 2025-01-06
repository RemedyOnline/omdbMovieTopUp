import logoB from "/images/movieverseBlack.png";
import logoW from "/images/movieverseWhite.png";
import { useEffect, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import SearchBox from "../components/SearchBox";
import MovieCard from "../components/MovieCard";
import MovieCTAbuttons from "../components/MovieCTAbuttons";

const API_URL = "https://www.omdbapi.com?apikey=65b57874";

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [searchWord, setSearchWord] = useState("");
	const [favoriteMovies, setFavoriteMovies] = useState(() => {
		const savedMovie = localStorage.getItem("myFavoriteMovies");
		return savedMovie ? JSON.parse(savedMovie) : [];
	});

	const fetchMovies = async (searchWord) => {
		const request = await fetch(`${API_URL}&s=${searchWord}`);
		const response = await request.json();

		console.log("Movies Data = ", response.Search);
		if (response.Search) {
			setMovies(response.Search);
		}
	};

	const handleFavorite = (movieID) => {
		const movie = movies.find((m) => m.imdbID === movieID);

		setFavoriteMovies((prev) => {
			const isMovieInFavorite = prev.some((m) => m.imdbID === movieID);

			if (isMovieInFavorite) {
				return prev.filter((m) => m.imdbID !== movieID);
			} else {
				return [...prev, movie];
			}
		});
	};

	useEffect(() => {
		fetchMovies(searchWord);
	}, [searchWord]);

	// saving movie to local storage...
	useEffect(() => {
		localStorage.setItem("myFavoriteMovies", JSON.stringify(favoriteMovies));
	}, [favoriteMovies]);

	const renderCTAButtons = (movieID) => {
		return () => (
			<MovieCTAbuttons
				isFavorite={favoriteMovies.some((m) => m.imdbID === movieID)}
				onFavoriteClick={() => handleFavorite(movieID)}
			/>
		);
	};

	return (
		<section className="min-h-screen w-full text-textColor">
			{/* Hero Section */}
			<section className="w-full h-screen bg-heroImage2 bg-cover bg-no-repeat bg-center">
				<div className="bg-gradient-to-t from-bgColor to-transparent via-bgColor/80 w-full h-full flex flex-col items-center justify-center space-y-10">
					<div className="flex gap-2">
						{/* <div className="flex flex-col items-center justify-center">
                     <img src={logoB} alt="logo" className="" />
                     <p className="text-sm md:text-xl my-2 italic text-center font-bold">
                        A whole universe of movies at your fingertips
                     </p>
                  </div> */}
						<div className="flex  flex-col items-center justify-center">
							<img src={logoW} alt="logo" className="w-2/3 md:w-full" />
							<p className="text-sm md:text-xl my-2 italic text-center font-bold">
								A whole universe of movies at your fingertips
							</p>
						</div>
					</div>
					<SearchBox
						value={searchWord}
						onChange={(event) => setSearchWord(event.target.value)}
					/>
				</div>
			</section>

			{/* Content Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
				{/* Latest Updates */}
				<div className="space-y-5">
					<SectionHeading heading="Latest Updates" />
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 ">
						{movies?.length > 0 ? (
							movies.map((movie) => (
								<MovieCard
									key={movie.imdbID}
									imdbID={movie.imdbID}
									Poster={movie.Poster}
									Type={movie.Type}
									Year={movie.Year}
									Title={movie.Title}
									CTAbuttons={renderCTAButtons(movie.imdbID)}
								/>
							))
						) : (
							<div className="col-span-full text-center py-5 animate-pulse text-base md:text-lg font-semibold">
								<p>
									No movies to display! Start by searching for your favorite
									movies above.
								</p>
							</div>
						)}
					</div>
				</div>
				<div className="space-y-2 md:space-y-4 w-full">
					<SectionHeading heading="My Favorite" />
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 ">
						{favoriteMovies?.length > 0 ? (
							favoriteMovies.map((movie) => (
								<MovieCard
									key={movie.imdbID}
									imdbID={movie.imdbID}
									Poster={movie.Poster}
									Type={movie.Type}
									Year={movie.Year}
									Title={movie.Title}
									CTAbuttons={renderCTAButtons(movie.imdbID)}
								/>
							))
						) : (
							<div className="col-span-full text-center py-10 animate-bounce">
								<p className="text-base md:text-lg font-semibold">
									Your favorites list is feeling a little lonely...
								</p>
								<p className="text-sm md:text-base mt-2">
									Why not add some blockbuster hits or hidden gems to keep it
									company?
								</p>
							</div>
						)}
					</div>
				</div>
			</section>
		</section>
	);
};

export default HomePage;
