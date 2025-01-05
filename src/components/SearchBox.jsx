import { IconSearch } from "@tabler/icons-react";
import PropTypes from "prop-types";

const SearchBox = ({ value, onChange }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section className="w-full flex items-center justify-center">
			<form
				role="search"
				onSubmit={handleSubmit}
				className="w-2/3 md:w-3/5 lg:w-1/2 bg-inputBG shadow-lg rounded-full md:py-1 px-3 flex gap-2 items-center"
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
					className="w-full bg-transparent md:text-lg placeholder:text-textColor p-2 outline-none"
				/>
				<button
					type="submit"
					aria-label="Search"
					className="hover:bg-cardBG p-2 rounded-full"
				>
					<IconSearch className=" w-4 md:w-5 h-4 md:h-5" />
				</button>
			</form>
		</section>
	);
};

SearchBox.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
};
export default SearchBox;
