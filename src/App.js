import { useState, useEffect } from "react";
import { SHA256, enc } from "crypto-js";
import copy from "copy-to-clipboard";
import { fraction } from "mathjs";
import Holder from "./Holder";
import Matrix from "./Matrix";
import ThemePage from "./pages/ThemePage/ThemePage";
import Choose from "./pages/Choose/Choose";
import Configure from "./pages/Configure/Configure";
import Manipulate from "./pages/Manipulate/Manipulate";

const App = () => {
	const [stage, setStage] = useState(0);
	const [id, setIdFinal] = useState(0);
	const [messages, setMessages] = useState([]);
	const [matricies, setMatricies] = useState([]);
	const [operationList, setOpList] = useState([]);
	const [currOpList, setCurrOpList] = useState([""]);

	//const URL = "https://gastongonnerman.com";
	const URL = "https://matrix-calculator.github.io";
	//const URL = "http://192.168.1.104:3000";
	//const URL = "http://172.16.78.63:3000";
	// TODO: Unless this gets used, delete it and rename setIdFinal to setId
	const setId = (newId) => {
		setIdFinal(newId);
	};

	const reset = () => {
		setStage(0);
		setId(0);
		setMessages([]);
		setMatricies([]);
		setOpList([]);
		setCurrOpList([]);
	};

	const getRowNumber = (value) => {
		return value.charCodeAt(0) - 97;
	};

	useEffect(() => {
		let params = new URLSearchParams(document.location.search.substring(0));
		window.history.replaceState("", "", "?");

		let x = params.get("share");
		if (!x) return;

		/*console.log(
			SHA256("g(aG4a{$" + prompt("Input a password")).toString(enc.Hex)
		);*/

		const pd = SHA256("g(aG4a{$" + prompt("Input a password")).toString(
			enc.Hex
		);

		if (
			pd !==
			"1ae59cf212dd6d82bd30131603e4bca8b27693062f724cbe4541adbd6c6e7b59"
		) {
			if (
				pd ===
				"3e42cac644edbc1b64b2ad6fef4f486a92abcfa00fd1e5065e06ed8745f1e9df"
			) {
				window.location.assign("https://youtu.be/dQw4w9WgXcQ");
			} else {
				alert("Verification Failed");
			}
			return;
		}

		const lastIndex = x.lastIndexOf("]") + 1;

		let firstMatrix = x.substr(0, lastIndex);
		let operations = x.substr(lastIndex);

		const matrix = firstMatrix.split("],[").map((x) => {
			return x
				.replace("[", "")
				.replace("]", "")
				.split(",")
				.map((x) => new Holder(x));
		});

		if (operations) {
			operations = operations
				.match(new RegExp("[A-Z][^A-Z]*", "g"))
				.map((x) => x.toLowerCase());

			setOpList(
				operations.map((operation) => {
					const isAlpha = new RegExp("[A-Za-z]+");
					let typeOfOperation = 0;
					let ops = [];

					// Copy down the first value of the operation
					ops.push(getRowNumber(operation.charAt(0)));
					operation = operation.substr(1);

					// Loop through and manipulate based on specific type
					// 2 = Add; 1 = Swap; 0 = Mult
					if (operation[operation.length - 1].match(isAlpha)) {
						if (operation.length === 1) {
							typeOfOperation = 1;
						} else {
							typeOfOperation = 2;
						}
					}

					// Everything besides mult, grab last row
					if (typeOfOperation !== 0) {
						ops.push(
							getRowNumber(operation.charAt(operation.length - 1))
						);
						operation = operation.substr(0, operation.length - 1);
					}

					// Everything besides swap, add fractional value
					if (typeOfOperation !== 1) {
						ops.splice(1, 0, operation);
					}

					return [typeOfOperation, ...ops];
				})
			);
		}

		console.log("First", matrix);
		console.log("Op", operationList);

		document.documentElement.style.setProperty(
			"--matrixColumnCount",
			matrix[0].length
		);
		setId(0);
		setStage(2);
		setMatricies([new Matrix(matrix)]);
	}, []);

	useEffect(() => {
		if (operationList.length === 0) return;
		let currentOperation = [...operationList].shift();
		const operationType = currentOperation.shift();
		if (operationType === 0) {
			console.log("Mult", currentOperation);
			multiply(...currentOperation);
		} else if (operationType === 1) {
			swap(...currentOperation);
		} else if (operationType === 2) {
			add(...currentOperation);
		}
		setOpList((old) => old.slice(1));
	}, [operationList]);

	useEffect(() => {
		setId((old) => old);
	}, [stage, matricies]);

	const fakeUpdate = () => {
		console.log("AWWWW");
		setId((old) => old);
	};

	const share = () => {
		let matrix = matricies[0];
		let firstMatrix = [];
		for (let i = 0; i < matrix.rowCount; i++) {
			let row = [];
			for (let j = 0; j < matrix.columnCount; j++) {
				row.push(matrix.data[i][j].toString());
			}
			firstMatrix.push("[" + row.join(",") + "]");
		}
		firstMatrix = firstMatrix.join(",");
		let ops = currOpList.slice(0, id + 1).join("");
		console.log("Cur", currOpList);

		copy(URL + "/?share=" + firstMatrix + ops, { format: "text/plain" });
	};

	// Update a specific square while in editing phase
	const updateSquare = (row, column, value) => {
		console.log(row, column);
		// let initialMatrix = { ...matricies[0] };
		let initialMatrix = matricies[0];
		try {
			initialMatrix.data[row][column] = new Holder(value);
			setMatricies([initialMatrix]);
		} catch (e) {
			console.log("Error occured while updating matrix");
			initialMatrix.data[row][column] = new Holder("0", true);
			setMatricies([initialMatrix]);
		}
	};

	// After given the rows and columns, create an initial matrix
	const confirmRowsAndColumns = (rows, columns) => {
		setMatricies([Matrix.fromSize(rows, columns)]);
		document.documentElement.style.setProperty(
			"--matrixColumnCount",
			columns
		);
		setStage(1);
	};

	// Finalize the initial matrix, do validation, replace some values
	const confirmConfiguration = (data) => {
		setMatricies([new Matrix(data)]);
		setStage(2);
	};

	const doOperation = (newMatrix, message) => {
		console.log("on op");
		if (addMatrix(newMatrix)) {
			addMessage(message);
			setId((id) => id + 1);
			return true;
		}
	};

	const addMatrix = (newMatrix) => {
		if (!newMatrix) return false;
		let listOfMatricies = [...matricies];
		listOfMatricies = listOfMatricies.slice(0, id + 1);
		console.log("Matricies", listOfMatricies);
		setMatricies([...listOfMatricies, newMatrix]);
		return true;
	};

	const addMessage = (message) => {
		while (message.length < 6) {
			message.push("");
		}
		setMessages((prevMessages) => {
			let listOfMessages = prevMessages.slice(0, id);
			listOfMessages.push(message.map((x) => x.toString()));
			console.log("Messages", listOfMessages);
			return listOfMessages;
		});
	};

	const mapToChar = (x) => String.fromCharCode(x + 97);

	const add = (from, scalar, to) => {
		try {
			setCurrOpList((x) => [
				...[...x].slice(0, id + 1),
				`${mapToChar(from).toUpperCase()}${new Holder(
					scalar
				)}${mapToChar(to)}`,
			]);
			return doOperation(matricies[id].add(from, fraction(scalar), to), [
				"Added row ",
				from + 1,
				" times ",
				new Holder(scalar),
				" to row ",
				to + 1,
			]);
		} catch (e) {
			console.log("Error when adding");
		}
	};

	const multiply = (row, scalar) => {
		console.log(row, scalar);
		try {
			setCurrOpList((x) => [
				...[...x].slice(0, id + 1),
				`${mapToChar(row).toUpperCase()}${new Holder(scalar)}`,
			]);
			console.log(id);
			console.log(matricies);
			return doOperation(matricies[id].multiply(row, fraction(scalar)), [
				"Multiplied row ",
				row + 1,
				" by ",
				new Holder(scalar),
			]);
		} catch (e) {
			console.log("Error when multiplying");
		}
	};

	const swap = (a, b) => {
		setCurrOpList((x) => [
			...[...x].slice(0, id + 1),
			`${mapToChar(a).toUpperCase()}${mapToChar(b)}`,
		]);
		return doOperation(matricies[id].swap(a, b), [
			"Swapped rows ",
			a + 1,
			" and ",
			b + 1,
		]);
	};

	if (stage === 0) {
		return (
			<ThemePage>
				<Choose onSubmit={confirmRowsAndColumns} />
			</ThemePage>
		);
	} else if (stage === 1) {
		return (
			<ThemePage>
				<Configure
					rowCount={matricies[0].rowCount}
					columnCount={matricies[0].columnCount}
					onSubmit={confirmConfiguration}
					reset={reset}
				/>
			</ThemePage>
		);
	} else if (stage === 2) {
		return (
			<ThemePage removeBirds={true}>
				<Manipulate
					id={id}
					messages={messages}
					matricies={matricies}
					share={share}
					setId={setId}
					add={add}
					multiply={multiply}
					swap={swap}
					reset={reset}
					fakeUpdate={fakeUpdate}
				/>
			</ThemePage>
		);
	} else {
		return <p>ERROR</p>;
	}
};

export default App;
