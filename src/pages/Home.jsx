import { Home01Icon } from "hugeicons-react";
import logo from "../../public/images/movieverseBlack.png";
import { useEffect, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import SearchBox from "../components/SearchBox";

const API_URL = "http://www.omdbapi.com?apikey=65b57874";

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [searchWord, setSearchWord] = useState("");

	const fetchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const results = await response.json();
		console.log("Movies Data = ", results.Search);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<section>
			<img src={logo} alt="logo" />
			<SectionHeading heading="Latest Updates" />
			<SearchBox />
		</section>
	);
};

export default HomePage;
