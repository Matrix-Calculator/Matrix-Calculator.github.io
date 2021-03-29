import MatrixDisplay from "./MatrixDisplay";
import Operations from "./Operations/Operations";
import { useEffect } from "react";

const MatrixPrimary = ({ matrix, add, multiply, swap, fakeUpdate }) => {
	useEffect(() => {
		if (!matrix) {
			fakeUpdate();
		}
	});
	return (
		<>
			<p
				className="inner-text instructions"
				style={{ textAlign: "center" }}
			>
				Please select one of the below operations to manipulate the
				primary matrix.
			</p>
			{/* Turn off ignore transforamtions if we want the primary matrix to bold rows */}
			<MatrixDisplay
				matrix={matrix}
				key={Math.random()}
				ignoreTransformations={true}
			/>
			<br />
			<Operations
				height={(matrix && matrix.rowCount) || 0}
				add={add}
				multiply={multiply}
				swap={swap}
			/>
		</>
	);
};

export default MatrixPrimary;
