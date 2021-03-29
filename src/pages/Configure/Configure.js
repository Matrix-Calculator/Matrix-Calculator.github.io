import MatrixConfigure from "./components/MatrixConfigure";
import { useState, useEffect } from "react";
import "./Configure.css";
import Holder from "../../Holder";

const Configure = ({ rowCount, columnCount, onSubmit, reset }) => {
	let failures = [];
	const submitConfiguration = () => {
		let data = [];
		let failedPosition = [];
		for (let row = 0; row < rowCount; row++) {
			let currentRow = [];
			for (let column = 0; column < columnCount; column++) {
				let holder = new Holder(values[row][column]);
				console.log(holder);
				if (holder.isFailure) {
					failedPosition.push([row, column, values[row][column]]);
				}
				currentRow.push(holder);
			}
			data.push(currentRow);
		}
		console.log(failedPosition);
		if (failedPosition.length > 0) {
			failures = failedPosition;
			alert(
				"Unable to processes at position: value\n" +
					failedPosition
						.map(
							(pos) =>
								`    [${pos[0] + 1}, ${pos[1] + 1}]: "${
									pos[2]
								}"`
						)
						.join("\n")
			);
			return;
		} else {
			onSubmit(data);
		}
	};

	const [values, setValues] = useState([]);

	const updateSquare = (id, event) => {
		const chosenRow = Math.floor(id / columnCount);
		const chosenColumn = id % columnCount;
		const newValue = event.target.value;

		if (newValue.match("[^0-9-/.]")) return;

		setValues((prev) =>
			prev.map((row, rowIndex) =>
				row.map((currentValue, columnIndex) => {
					return rowIndex === chosenRow &&
						columnIndex === chosenColumn
						? newValue
						: currentValue;
				})
			)
		);
	};

	useEffect(() => {
		let startingValues = [];
		for (let row = 0; row < rowCount; row++) {
			let currentValues = [];
			for (let column = 0; column < columnCount; column++) {
				currentValues.push("");
			}
			startingValues.push(currentValues);
		}
		setValues(startingValues);
	}, []);

	return (
		<div className="vcenter hcenter full">
			<div className="floating front">
				<div className="inner-text instructions">
					<div style={{ textAlign: "center" }}>
						Please enter the elements of your matrix. Fields left
						empty will be interpreted as 0.
					</div>
					<br />
					<div style={{ textAlign: "center" }}>
						You may use any mix of fractions and decimals. When you
						are done please click the "Submit" button.
					</div>
				</div>
				<br />
				<MatrixConfigure
					values={values}
					failures={failures}
					onUpdate={updateSquare}
				/>
				<br /> <br />
				<button
					className="specialbutton reset"
					tabIndex="-1"
					onClick={reset}
				>
					Reset
				</button>
				<button
					className="specialbutton submit"
					onClick={submitConfiguration}
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Configure;
