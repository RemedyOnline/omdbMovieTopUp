import PropTypes from "prop-types";

const SearchBox = ({ value, onChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="sticky top-8 z-10 flex w-full items-center justify-center">
      <form
        role="search"
        onSubmit={handleSubmit}
        className="flex w-2/3 items-center gap-2 rounded-full bg-inputBG px-3 shadow-lg focus:ring focus:ring-red-600 md:w-3/5 md:py-1 lg:w-1/2"
      >
        <input
          type="search"
          name="search"
          id="movie-search"
          value={value}
          onChange={onChange}
          autoComplete="off"
          aria-label="Search for any movie..."
          placeholder="Search for any movie..."
          className="w-full bg-transparent p-2 outline-none placeholder:text-textColor2 md:text-lg"
        />
        <button
          type="submit"
          aria-label="Search"
          className="rounded-full p-2 hover:bg-cardBG"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </button>
      </form>
    </section>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SearchBox;
