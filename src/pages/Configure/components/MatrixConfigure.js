import MatrixConfigureSquare from "./MatrixConfigureSquare";

const MatrixConfigure = ({ values, onUpdate }) => {
	return (
		<div className="matrix wrapper">
			{values.map((row, rowIndex) =>
				row.map((value, columnIndex) => (
					<MatrixConfigureSquare
						key={rowIndex * row.length + columnIndex}
						id={rowIndex * row.length + columnIndex}
						value={value}
						onUpdate={onUpdate}
					/>
				))
			)}
		</div>
	);
};

export default MatrixConfigure;
