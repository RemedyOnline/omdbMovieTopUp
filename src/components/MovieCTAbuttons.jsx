import { IconDots, IconHeartFilled, IconHeartPlus } from "@tabler/icons-react";
import PropTypes from "prop-types";

const MovieCTAbuttons = ({ isFavorite, onFavoriteClick }) => {
	return (
		<div className="flex gap-2 absolute bottom-3 right-3 transition-all duration-1000 ease-in-out items-end justify-end">
			<div className="relative group/tooltip">
				<button
					className="hidden group-hover:block p-1 rounded-full bg-cardBG hover:bg-inputBG transition-all duration-500 ease-in-out w-fit h-fit shadow-lg drop-shadow-lg"
					onClick={onFavoriteClick}
				>
					{isFavorite ? (
						<IconHeartFilled size={24} />
					) : (
						<IconHeartPlus size={24} />
					)}
				</button>
				<span className="hidden absolute group-hover/tooltip:block whitespace-nowrap -top-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-md bg-inputBG shadow-md">
					{isFavorite ? "Remove from Favorite" : "Add to favorite"}
				</span>
			</div>
			<button className="hidden group-hover:block p-1 rounded-full bg-cardBG hover:bg-inputBG transition-all duration-500 ease-in-out w-fit h-fit shadow-lg drop-shadow-lg">
				<IconDots size={24} />
			</button>
		</div>
	);
};

MovieCTAbuttons.propTypes = {
	isFavorite: PropTypes.bool.isRequired,
	onFavoriteClick: PropTypes.func.isRequired,
};
export default MovieCTAbuttons;
