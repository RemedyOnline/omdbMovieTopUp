import { IconDots, IconHeartFilled, IconHeartPlus } from "@tabler/icons-react";
import { useState } from "react";

const MovieCTAbuttons = () => {
	const [favorite, setFavorite] = useState(false);

	const handleFavorite = () => {
		setFavorite(!favorite);
	};

	return (
		<div className="flex gap-2 absolute bottom-3 right-3 transition-all duration-1000 ease-in-out items-end justify-end">
			<div className="relative group/tooltip">
				<button
					className="hidden group-hover:block p-1 rounded-full bg-cyan-800 transition-all duration-500 ease-in-out w-fit h-fit"
					onClick={handleFavorite}
				>
					{favorite ? (
						<IconHeartFilled size={28} />
					) : (
						<IconHeartPlus size={28} />
					)}
				</button>
				<span className="hidden absolute group-hover/tooltip:block whitespace-nowrap -top-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-md bg-inputBG shadow-md">
					{favorite ? "Remove from Favorite" : "Add to favorite"}
				</span>
			</div>
			<button className="hidden group-hover:block p-1 rounded-full bg-cyan-800 transition-all duration-500 ease-in-out w-fit h-fit">
				<IconDots size={28} />
			</button>
		</div>
	);
};

export default MovieCTAbuttons;
