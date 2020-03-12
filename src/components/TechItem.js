import React from "react";
import propTypes from "prop-types";

function TechItem({ tech, onDelete }) {
	return (
		<li>
			{tech}
			<button type="button" onClick={onDelete}>
				remover
			</button>
		</li>
	);
}

TechItem.defaultProps = {
	tech: "Default"
};

TechItem.propTypes = {
	tech: propTypes.string,
	onDelete: propTypes.func.isRequired
};

export default TechItem;
