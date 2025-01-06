import PropTypes from "prop-types";

const SectionHeading = (props) => {
	return (
		<div className="w-full">
			<h2 className="text-2xl md:text-4xl lg:text-5xl font-bold fo">
				{props.heading}
			</h2>
		</div>
	);
};

export default SectionHeading;

SectionHeading.propTypes = {
	heading: PropTypes.string,
};
