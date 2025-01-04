import PropTypes from "prop-types";

const MovieCard = (props) => {
	return (
		<section>
			<h2>MovieCard</h2>
			<div>
				{props.movies.map((movie, index) => (
					<div>
						<img src={movie.Poster} alt={movie.title} />
					</div>
				))}
			</div>
		</section>
	);
};

MovieCard.propTypes = {
	Poster: PropTypes.node,
	index: PropTypes.number,
	title: PropTypes.string,
};
export default MovieCard;
