import "./Operations.css";
import Add from "./Add";
import Multiply from "./Multiply";
import Swap from "./Swap";

const Operations = ({ height, add, multiply, swap }) => {
	// Create a list of options for row selectors
	const options = [];
	for (let i = 1; i <= height; i++) {
		options.push(
			<option value={i} key={i}>
				{i}
			</option>
		);
	}

	// Reset the value of a selector or input given its id
	const resetSelector = (id) => (document.getElementById(id).value = 1);
	const resetInput = (id) => (document.getElementById(id).value = "");

	// Reset every value in the input section
	const reset = () => {
		resetSelector("addFrom");
		resetInput("addMultiplier");
		resetSelector("addTo");

		resetSelector("multiplyTo");
		resetInput("multiplyScalar");

		resetSelector("swapA");
		resetSelector("swapB");
	};

	// Call the function with given args and if successful reset
	const processor = (fn, ...args) => fn(...args) && reset();

	return (
		<div id="controls">
			<Add
				options={options}
				action={(...args) => processor(add, ...args)}
			/>
			<br />
			<Multiply
				options={options}
				action={(...args) => processor(multiply, ...args)}
			/>
			<br />
			<Swap
				options={options}
				action={(...args) => processor(swap, ...args)}
			/>
			<br />
		</div>
	);
};

export default Operations;
