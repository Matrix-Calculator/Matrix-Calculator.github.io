import { fraction } from "mathjs";

export default class Holder {
	constructor(value) {
		this.isFailure = false;
		try {
			// Try to processes input value
			this.value = fraction(
				typeof value !== "undefined" && value !== null && value !== ""
					? value
					: "0"
			);
		} catch (e) {
			// If unable, log, denote, and set fraction to 0
			console.log(`Unable to process matrix with value "${value}"`);
			this.value = fraction("0");
			this.isFailure = true;
		}
		// Set display to nothing if no value, otherwise formatted string
		this.display = this.toString();
	}

	// Correctly format value as a fraction
	toString() {
		let stringValue = this.value.n;
		if (this.value.s === -1) stringValue = "-" + stringValue;
		if (this.value.d !== 1) stringValue = stringValue + "/" + this.value.d;
		return stringValue;
	}
}
