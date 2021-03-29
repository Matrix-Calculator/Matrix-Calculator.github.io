import { memo } from "react";

// Will only be used once we can input values into our matrix
const MatrixSquare = ({ display, onClick }) => {
	console.log("Reloading a square");
	return (
		<input
			tabIndex="-1"
			value={display}
			readOnly
			onClick={onClick}
			className="matrixSquare"
		/>
	);
};

const areEqual = (oldProps, newProps) => {
	return oldProps.data.display === newProps.data.display;
};

export default memo(MatrixSquare, areEqual);
