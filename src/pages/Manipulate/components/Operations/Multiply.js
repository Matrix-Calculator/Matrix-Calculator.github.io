const Multiply = ({ options, action }) => {
	const multiply = () => {
		const to = Math.floor(document.getElementById("multiplyTo").value) - 1;
		const scalar = document.getElementById("multiplyScalar").value;
		action(to, scalar);
	};

	// <button onClick={() => action(1, 321)}>Multiply row 1 by 30</button>
	return (
		<div className="inner-text">
			Multiply row
			<select id="multiplyTo">{options}</select>
			<span>by</span>
			<input id="multiplyScalar" placeholder="1"></input>
			<button onClick={multiply}>Confirm</button>
		</div>
	);
};

export default Multiply;
