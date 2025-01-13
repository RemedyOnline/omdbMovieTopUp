import logoW from "/images/movieverseWhite.png";
import { useEffect, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import SearchBox from "../components/SearchBox";
import MovieCard from "../components/MovieCard";
import MovieCTAbuttons from "../components/MovieCTAbuttons";
import topRatedMovies from "../constants/topRated";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

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

  const bgImages = [
    "bg-heroImage",
    "bg-heroImage2",
    "bg-heroImage3",
    "bg-heroImage4",
    "bg-heroImage5",
    "bg-heroImage6",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroBG((prevBg) => {
        const nextBgIndex = (bgImages.indexOf(prevBg) + 1) % bgImages.length;
        return bgImages[nextBgIndex];
      });
    }, 3000);
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
        className={`h-screen w-full ${currentHeroBG} bg-cover bg-center bg-no-repeat transition-all duration-700`}
      >
        <div className="flex h-full w-full flex-col items-center justify-end bg-gradient-to-t from-bgColor via-bgColor/80 to-transparent">
          <div className="flex flex-col items-center justify-center">
            <img src={logoW} alt="logo" className="w-2/3 md:w-full" />
            <p className="my-2 text-center text-sm font-bold italic text-white md:text-xl">
              A whole universe of movies at your fingertips
            </p>
          </div>
          <div className="w-full space-y-0 px-4 py-5 sm:space-y-2 sm:px-6 md:space-y-4 lg:px-8">
            <SectionHeading heading="Top Rated" />
            <div className="relative w-full overflow-hidden">
              <div className="hover:pause-animation flex animate-marquee sm:space-x-2">
                {topRatedMovies?.length > 0 ? (
                  <>
                    {topRatedMovies.map((topRated) => (
                      <MovieCard
                        key={`first-${topRated.imdbID}`}
                        imdbID={topRated.imdbID}
                        Poster={topRated.Poster}
                        Type={topRated.Type}
                        Year={topRated.Year}
                        Title={topRated.Title}
                        // CTAbuttons={renderCTAButtons(topRated.imdbID)}
                      />
                    ))}
                    {topRatedMovies.map((topRated) => (
                      <MovieCard
                        key={`second-${topRated.imdbID}`}
                        imdbID={topRated.imdbID}
                        Poster={topRated.Poster}
                        Type={topRated.Type}
                        Year={topRated.Year}
                        Title={topRated.Title}
                        // CTAbuttons={renderCTAButtons(topRated.imdbID)}
                      />
                    ))}
                  </>
                ) : (
                  <div className="col-span-full animate-pulse py-5 text-center text-base font-semibold md:text-lg">
                    <p>
                      No movies to display! Start by searching for your favorite
                      movies above.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Content Section */}
      <section className="mx-auto max-w-9xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-5">
          <SearchBox
            value={searchWord}
            onChange={(event) => setSearchWord(event.target.value)}
          />
          {/* Latest Updates */}
          <div className="w-full space-y-0 sm:space-y-2 md:space-y-4">
            <SectionHeading heading="Latest Updates" />
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
                <div className="col-span-full animate-pulse py-5 text-center text-base font-semibold text-gray-400 md:text-lg">
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
        <div className="w-full space-y-0 sm:space-y-2 md:space-y-4">
          <div className="flex items-center justify-between">
            <SectionHeading heading="My Favorite" />
            <button
              onClick={toggleViewMode}
              className="focus:ring-bg-textColor flex h-fit flex-nowrap items-end text-nowrap rounded-md bg-inputBG px-2 py-1 font-semibold shadow-md transition-all duration-100 ease-in-out hover:cursor-pointer hover:bg-cardBG focus:ring md:py-2 md:text-lg"
            >
              {isGridView ? "Scroll Mode" : "Browse All"}
              <span className="transition-all duration-500 ease-in-out">
                {isGridView ? <IconChevronUp /> : <IconChevronDown />}
              </span>
            </button>
          </div>
          <div
            className={`${
              isGridView
                ? "mx-auto grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
                : "flex overflow-x-scroll text-center sm:space-x-2"
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
              <div className="col-span-full w-full animate-bounce py-10 text-center text-gray-400">
                <p className="text-base font-semibold md:text-lg">
                  Your favorites list is feeling a little lonely...
                </p>
                <p className="mt-2 text-sm md:text-base">
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
