const Add = ({ options, action }) => {
	const add = () => {
		const from = Math.floor(document.getElementById("addFrom").value) - 1;
		const scalar = document.getElementById("addMultiplier").value;
		const to = Math.floor(document.getElementById("addTo").value) - 1;
		action(from, scalar, to);
	};

	return (
		<div className="inner-text">
			Add row
			<select id="addFrom">{options}</select>
			<span>multiplied by</span>
			<input id="addMultiplier" placeholder="0"></input> to row
			<select id="addTo">{options}</select>
			<button onClick={add}>Confirm</button>
		</div>
	);
};

export default Add;
