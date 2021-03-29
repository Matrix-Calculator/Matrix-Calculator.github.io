import Holder from "./Holder";
import { equal, add, multiply } from "mathjs";

export default class Matrix {
	constructor(data, impactedRows = []) {
		this.rowCount = data.length;
		this.columnCount = data[0].length;
		this.impactedRows = impactedRows;
		this.data = [];
		for (let row = 0; row < this.rowCount; row++) {
			let currentRow = [];
			for (let column = 0; column < this.columnCount; column++) {
				currentRow.push(new Holder(data[row][column].display));
			}
			this.data.push(currentRow);
		}
	}

	static fromSize(rowCount, columnCount) {
		// TODO: Fix bad double looping of list when initialized this way
		let data = [];
		for (let row = 0; row < rowCount; row++) {
			let currentRow = [];
			for (let column = 0; column < columnCount; column++) {
				currentRow.push(new Holder("123"));
			}
			data.push(currentRow);
		}
		return new Matrix(data);
	}

	// Check if there are any differences between two rows
	hasChanged(oldRow, newRow) {
		for (let col = 0; col < oldRow.length; col++) {
			if (!equal(oldRow[col].value, newRow[col].value)) return true;
		}
		return false;
	}

	add(from, scalar, to) {
		console.log("got inside of add");
		let newRow = [...this.data[to]];
		console.log("got inside of add");
		newRow = newRow.map((holder, index) => {
			console.log(holder.value, this.data[from][index].value, scalar);
			return new Holder(
				add(
					holder.value,
					multiply(this.data[from][index].value, scalar)
				)
			);
		});
		console.log("got inside of add");

		if (!this.hasChanged(this.data[to], newRow)) {
			console.log("Nothing is changing!");
			return;
		}
		console.log("got inside of add");
		return new Matrix(
			this.data.map((val, index) => (index === to ? newRow : val)),
			[to]
		);
	}

	// Multiply a row by a scalar and return a new matrix with that applied
	multiply(row, scalar) {
		let newRow = [...this.data[row]];
		// Create a new row from multiplication applied to current values
		newRow = newRow.map(
			(holder) => new Holder(multiply(holder.value, scalar))
		);
		// If the same as before, don't return a new matrix
		if (!this.hasChanged(this.data[row], newRow)) {
			console.log("You failure, nothing changed!!");
			return;
		}
		// Create and return a new matrix with new row
		return new Matrix(
			this.data.map((val, index) => (index === row ? newRow : val)),
			[row]
		);
	}

	swap(a, b) {
		if (!this.hasChanged(this.data[a], this.data[b])) {
			console.log("Those are the same! Nothing change!");
			return;
		}
		return new Matrix(
			this.data.map((val, index) => {
				if (index === a) return this.data[b];
				if (index === b) return this.data[a];
				return val;
			}),
			[a, b]
		);
	}
}
