import { Search01Icon } from "hugeicons-react";

const SearchBox = (props) => {
	// console.log(props);

	return (
		<section>
			<div className="w-2/3 md:w-1/2 bg-cyan-600 shadow-lg rounded-full py-1 px-5 flex gap-2 text-cyan-950 items-center">
				<input
					type="search"
					name="search"
					id="search"
					placeholder="Search for any movie..."
					className="w-full bg-transparent placeholder:text-cyan-950 py-2 outline-none"
				/>
				<Search01Icon />
			</div>
		</section>
	);
};

export default SearchBox;
