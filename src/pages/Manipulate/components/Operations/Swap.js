const Swap = ({ options, action }) => {
	const swap = () => {
		const a = Math.floor(document.getElementById("swapA").value) - 1;
		const b = Math.floor(document.getElementById("swapB").value) - 1;
		action(a, b);
	};

	return (
		<div className="inner-text">
			Swap rows
			<select id="swapA">{options}</select>
			<span>and</span>
			<select id="swapB">{options}</select>
			<button onClick={swap}>Confirm</button>
		</div>
	);
};

export default Swap;
