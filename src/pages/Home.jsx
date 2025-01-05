import logoB from "/images/movieverseBlack.png";
import logoW from "/images/movieverseWhite.png";
import { useEffect, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import SearchBox from "../components/SearchBox";
import MovieCard from "../components/MovieCard";
import MovieCTAbuttons from "../components/MovieCTAbuttons";

const API_URL = "http://www.omdbapi.com?apikey=65b57874";

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [searchWord, setSearchWord] = useState("2025");
	const [favorite, setFavorite] = useState([]);

	const fetchMovies = async (searchWord) => {
		const request = await fetch(`${API_URL}&s=${searchWord}`);
		const response = await request.json();

		console.log("Movies Data = ", response.Search);
		if (response.Search) {
			setMovies(response.Search);
		}
	};

	useEffect(() => {
		fetchMovies(searchWord);
	}, [searchWord]);

	const handleFavorite = (movieID) => {
		setFavorite((prev) => ({
			...prev,
			[movieID]: !prev[movieID],
		}));
	};

	const renderCTAButtons = (movieID) => {
		return () => (
			<MovieCTAbuttons
				isFavorite={favorite[movieID] || false}
				onFavoriteClick={() => handleFavorite(movieID)}
			/>
		);
	};

	return (
		<section className="h-full mx-auto my-auto items-center justify-start flex flex-col space-y-10 2xl:max-w-7xl text-textColor w-full p-5 ">
			<div className="flex gap-5">
				<div className="flex flex-col items-center justify-center">
					<img src={logoB} alt="logo" className="w-2/3 md:w-full" />
					<p className="text-sm md:text-xl my-2 italic text-center font-bold">
						A whole universe of movies at your fingertips
					</p>
				</div>
				{/* <div className="flex  flex-col items-center justify-center">
					<img src={logoW} alt="logo" className="w-2/3 md:w-full" />
					<p className="text-sm md:text-xl my-2 italic text-center font-bold">
						A whole universe of movies at your fingertips
					</p>
				</div> */}
			</div>
			<SearchBox
				value={searchWord}
				onChange={(event) => setSearchWord(event.target.value)}
			/>
			<div className="space-y-2 md:space-y-4 w-full">
				<SectionHeading heading="Latest Updates" />
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 ">
					{movies?.length > 0 ? (
						movies.map((movie) => (
							<MovieCard
								key={movie.imdbID}
								// imdbID={movie.imdbID}
								Poster={movie.Poster}
								Type={movie.Type}
								Year={movie.Year}
								Title={movie.Title}
								CTAbuttons={renderCTAButtons(movie.imdbID)}
							/>
						))
					) : (
						<div className="col-span-full text-center py-5 animate-pulse text-red-800 font-medium">
							<p>
								No movies to display! Start by searching for your favorite
								movies above.
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default HomePage;
