import PropTypes from "prop-types";

const SearchBox = ({ value, onChange }) => {
	// console.log(props);

	return (
		<section className="w-full flex items-center justify-center">
			<form className="w-2/3 md:w-3/5 lg:w-1/2 bg-inputBG shadow-lg rounded-full md:py-1 px-5 flex gap-2 items-center">
				<input
					type="search"
					name="search"
					id="search"
					value={value}
					onChange={onChange}
					placeholder="Search for any movie..."
					className="w-full bg-transparent placeholder:text-textColor py-2 outline-none"
				/>
				🔍
			</form>
		</section>
	);
};

SearchBox.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
};
export default SearchBox;
