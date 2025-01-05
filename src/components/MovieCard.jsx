import PropTypes from "prop-types";

const MovieCard = ({ imdbID, Poster, Title, Type, Year, CTAbuttons }) => {
	return (
		<section className="group">
			<div className="flex flex-col text-center p-2 bg-cardBG rounded-xl shadow-md h-full justify-start items-center relative  max-w-md">
				<p>{imdbID}</p>
				<img src={Poster} alt={Title} className="rounded-lg h-[250px]" />
				<p className="text-lg font-semibold ">{Title}</p>
				<p>{Year}</p>
				<p>{Type}</p>
				<CTAbuttons />
			</div>
		</section>
	);
};

MovieCard.propTypes = {
	Poster: PropTypes.node,
	imdbID: PropTypes.string,
	Title: PropTypes.string,
	Type: PropTypes.string,
	Year: PropTypes.string,
	CTAbuttons: PropTypes.func,
};
export default MovieCard;
