import PropTypes from "prop-types";

const SectionHeading = (props) => {
	return (
		<div className="text-nowrap w-fit ">
			<h2 className="text-2xl md:text-4xl font-bold">{props.heading}</h2>
		</div>
	);
};

export default SectionHeading;

SectionHeading.propTypes = {
	heading: PropTypes.string,
};
