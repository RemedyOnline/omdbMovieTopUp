import PropTypes from "prop-types";

const SectionHeading = (props) => {
	return (
		<div>
			<h2>{props.heading}</h2>
		</div>
	);
};

export default SectionHeading;

SectionHeading.propTypes = {
	heading: PropTypes.string,
};
