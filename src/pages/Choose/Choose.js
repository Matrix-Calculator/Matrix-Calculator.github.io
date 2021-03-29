import "./Choose.css";

const Choose = ({ onSubmit }) => {
	const submitOptions = () => {
		const rowCount = document.getElementById("rowCount").value;
		const columnCount = document.getElementById("columnCount").value;
		onSubmit(rowCount, columnCount);
	};

	let options = [];
	for (let i = 1; i < 11; i++) {
		options.push(
			<option key={i} value={i}>
				{i}
			</option>
		);
	}

	return (
		<div className="vcenter hcenter full">
			<div className="floating front">
				<p className="inner-text instructions">
					Please select the dimensions for a matrix m x n then click
					the "Submit" button
				</p>
				<br />
				<div className="offset">
					<ul>
						<li>
							<label htmlFor="rowCount">
								Number of rows: m ={" "}
							</label>
							<select id="rowCount">{options}</select>
						</li>
						<br /> <br />
						<li>
							<label htmlFor="columnCount">
								Number of columns: n ={" "}
							</label>
							<select
								id="columnCount"
								style={{ marginRight: 1 + "em" }}
							>
								{options}
							</select>
						</li>
					</ul>
				</div>
				<br /> <br />
				<button
					className="specialbutton submit"
					onClick={submitOptions}
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Choose;
