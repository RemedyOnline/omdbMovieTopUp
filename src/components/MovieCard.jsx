import PropTypes from "prop-types";

const MovieCard = ({ imdbID, Poster, Title, Type, Year, CTAbuttons }) => {
	return (
		<section className="group">
			<div className="flex flex-col text-center bg-cardBG rounded-lg shadow-lg shadow-textColor  h-full justify-start items-center relative max-w-md group-hover:scale-105 transition-all duration-500 ease-in-out overflow-hidden">
				<img src={Poster} alt={Title} className="rounded-lg w-full h-full" />
				<div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-cardBG rounded-b-lg to-bgColor text-left px-2 hidden group-hover:block">
					<p className="hidden">{imdbID}</p>
					<p className="md:text-lg font-semibold text-wrap overflow-hidden">
						{Title}
					</p>
					<p className="text-sm md:text-base font-mono ">{Year}</p>
					<p className="hidden">{Type}</p>
				</div>
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
