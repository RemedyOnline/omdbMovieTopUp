import logoW from "/images/movieverseWhite.png";
import { useEffect, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import SearchBox from "../components/SearchBox";
import MovieCard from "../components/MovieCard";
import MovieCTAbuttons from "../components/MovieCTAbuttons";
import topRatedMovies from "../constants/topRated";

const API_URL = "https://www.omdbapi.com?apikey=65b57874";

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [searchWord, setSearchWord] = useState("");
	const [isGridView, setIsGridView] = useState(false);
	const [currentHeroBG, setCurrentHeroBG] = useState("bg-heroImage");
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

	const toggleViewMode = () => {
		setIsGridView((prev) => !prev);
		console.log(isGridView);
	};

	const bgImages = ["bg-heroImage", "bg-heroImage2", "bg-heroImage3"];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentHeroBG((prevBg) => {
				const nextBgIndex = (bgImages.indexOf(prevBg) + 1) % bgImages.length;
				return bgImages[nextBgIndex];
			});
		}, 5000);
		return () => clearInterval(interval);
	}, []);

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
		<section className="min-h-screen w-full text-textColor2">
			{/* Hero Section */}
			<section
				className={`w-full h-screen ${currentHeroBG} bg-cover bg-no-repeat bg-center transition-all duration-700`}
			>
				<div className="bg-gradient-to-t from-bgColor to-transparent via-bgColor/80 w-full h-full flex flex-col items-center justify-end ">
					<div className="flex flex-col items-center justify-center">
						<img src={logoW} alt="logo" className="w-2/3 md:w-full" />
						<p className="text-sm md:text-xl my-2 italic text-center font-bold text-white">
							A whole universe of movies at your fingertips
						</p>
					</div>
					<div className="space-y-0 sm:space-y-2 md:space-y-4 w-full px-4 sm:px-6 lg:px-8 py-5 ">
						<SectionHeading heading="Top Rated" />
						<div className="flex overflow-x-scroll space-x-2">
							{topRatedMovies?.length > 0 ? (
								topRatedMovies.map((topRated) => (
									<MovieCard
										key={topRated.imdbID}
										imdbID={topRated.imdbID}
										Poster={topRated.Poster}
										Type={topRated.Type}
										Year={topRated.Year}
										Title={topRated.Title}
										// CTAbuttons={renderCTAButtons(topRated.imdbID)}
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
				</div>
			</section>
			{/* Content Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
				<div className="space-y-5">
					<SearchBox
						value={searchWord}
						onChange={(event) => setSearchWord(event.target.value)}
					/>
					{/* Latest Updates */}
					<div className="space-y-0 sm:space-y-2 md:space-y-4 w-full">
						<SectionHeading heading="Latest Updates" />
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
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
								<div className="col-span-full text-center py-5 animate-pulse text-base md:text-lg font-semibold text-textColor">
									<p>
										No movies to display! Start by searching for your favorite
										movies above.
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
				{/* Favorite Section */}
				<div className="space-y-0 sm:space-y-2 md:space-y-4 w-full">
					<div className="flex items-center justify-between">
						<SectionHeading heading="My Favorite" />
						<button
							onClick={toggleViewMode}
							className="md:text-lg font-semibold text-nowrap flex-nowrap px-2 py-1 md:py-2 rounded-md bg-inputBG hover:bg-cardBG transition-all duration-100 ease-in-out w-fit h-fit shadow-md drop-shadow-md hover:cursor-pointer"
						>
							{isGridView ? "List View" : "View All"}
						</button>
					</div>
					<div
						className={`${
							isGridView
								? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
								: "flex overflow-x-scroll space-x-2 text-center"
						}`}
					>
						{favoriteMovies?.length > 0 ? (
							favoriteMovies.map((movie) => (
								<MovieCard
									key={movie.imdbID}
									imdbID={movie.imdbID}
									z
									Poster={movie.Poster}
									Type={movie.Type}
									Year={movie.Year}
									Title={movie.Title}
									CTAbuttons={renderCTAButtons(movie.imdbID)}
									className={movie.className}
								/>
							))
						) : (
							<div className="col-span-full text-center py-10 animate-bounce w-full text-textColor">
								<p className="text-base md:text-lg font-semibold">
									Your favorites list is feeling a little lonely...
								</p>
								<p className="text-sm md:text-base mt-2">
									Why not add some blockbuster hits or hidden gems to keep it
									company by favoriting some interesting movies you would like
									to watch in future.??
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
