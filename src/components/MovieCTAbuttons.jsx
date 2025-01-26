import PropTypes from "prop-types";

const MovieCTAbuttons = ({ isFavorite, onFavoriteClick }) => {
  return (
    <div className="absolute bottom-3 right-3 flex items-end justify-end gap-2 transition-all duration-1000 ease-in-out">
      <div className="group/tooltip relative">
        <button
          className="h-fit w-fit rounded-full bg-inputBG p-1 shadow-lg drop-shadow-lg transition-all duration-300 ease-in-out hover:bg-cardBG group-hover:block"
          onClick={onFavoriteClick}
        >
          {isFavorite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-heart"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-heart-plus"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.96 6.053" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
            </svg>
          )}
        </button>
        <span className="absolute -bottom-0 -right-1/3 hidden -translate-x-1/2 -translate-y-1/4 whitespace-nowrap rounded-md bg-inputBG px-2 py-1 text-xs shadow-md group-hover/tooltip:block">
          {isFavorite ? "Remove from Favorite" : "Add to favorite"}
        </span>
      </div>
      <div className="group/tooltip relative">
        <button className="h-fit w-fit rounded-full bg-inputBG p-1 shadow-lg drop-shadow-lg transition-all duration-300 ease-in-out hover:bg-cardBG group-hover:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-dots"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </button>
        <span className="absolute -left-1/2 -top-6 z-10 hidden -translate-x-1/2 -translate-y-1/4 whitespace-nowrap rounded-md bg-inputBG px-2 py-1 text-xs shadow-md group-hover/tooltip:block">
          <p>View Movie Details</p>
        </span>
      </div>
    </div>
  );
};

MovieCTAbuttons.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
};
export default MovieCTAbuttons;
