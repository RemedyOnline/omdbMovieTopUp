import PropTypes from "prop-types";

const MovieCard = ({ imdbID, Poster, Title, Type, Year, CTAbuttons }) => {
  return (
    <section className="group flex-shrink-0 px-2 py-5">
      <div className="relative flex h-[190px] w-[120px] max-w-md flex-col items-center justify-start overflow-hidden rounded-lg bg-cardBG text-center shadow-lg shadow-textColor transition-all duration-500 ease-in-out group-hover:scale-105 sm:h-[250px] sm:w-[160px]">
        <img
          src={Poster}
          alt={Title}
          className="h-full rounded-lg object-cover"
        />
        <div className="absolute bottom-0 hidden h-20 w-full rounded-b-lg bg-gradient-to-t from-cardBG to-bgColor px-2 text-left group-hover:block">
          <p className="hidden">{imdbID}</p>
          <p className="overflow-hidden text-wrap font-semibold md:text-lg">
            {Title}
          </p>
          <p className="font-mono text-sm md:text-base">{Year}</p>
          <p className="hidden">{Type}</p>
        </div>
        {CTAbuttons && <CTAbuttons />}
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
