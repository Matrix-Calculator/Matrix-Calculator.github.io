import { memo } from "react";

// Simple helper component just used for displaying an uneditable matrix quickly
const MatrixDisplay = ({ id, matrix, onClick, ignoreTransformations }) => {
	return (
		<div className="matrix wrapper" onClick={() => onClick && onClick(id)}>
			{/* Flatten the array and make spans out of each value (grid fixes it) and bold anything in "affected row" based on math */}
			{matrix &&
				matrix.data.flat().map((item, index) => {
					return (
						<span
							key={index}
							style={{
								fontWeight:
									matrix.impactedRows.indexOf(
										Math.floor(index / matrix.columnCount)
									) !== -1 && !ignoreTransformations
										? "bold"
										: "normal",
							}}
						>
							{item.display}
						</span>
					);
				})}
		</div>
	);
};

// Only update if just changed
const areEqual = (oldProps, newProps) => newProps.activeId !== newProps.id;

export default memo(MatrixDisplay, areEqual);
