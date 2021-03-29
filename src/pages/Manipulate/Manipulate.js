/* eslint-disable react-hooks/exhaustive-deps */
import "./Manipulate.css";
import MatrixPrimary from "./components/MatrixPrimary";
import MatrixList from "./components/MatrixList";
import { useState, useEffect } from "react";

const Manipulate = ({
	id,
	messages,
	matricies,
	share,
	setId,
	add,
	multiply,
	swap,
	reset,
	fakeUpdate,
}) => {
	const [largeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);
	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 1000);
		};
		window.addEventListener("resize", handleResize);
	});

	useEffect(() => {
		// TODO: Make this "id" or "bottom" depending on
		// if we want it to scroll to the bottom of the page or to selected matrix
		// If we want to scroll to selected matrix, potentially use something from
		// https://stackoverflow.com/questions/8922107/javascript-scrollintoview-middle-alignment#50453912
		// to put it into the middle to visually look better
		if (largeScreen) document.getElementById("bottom").scrollIntoView();
	}, [matricies, largeScreen]);

	// If large screen, have two seperate columns for active vs history
	// Overwise put everything under one column
	if (largeScreen) {
		return (
			<div id="primaryLayout">
				<div className="vcenter hcenter dontoverflow">
					<div className="floating front">
						<div className="hcenter activeMatrix">
							<MatrixPrimary
								matrix={matricies[id]}
								add={add}
								multiply={multiply}
								swap={swap}
								fakeUpdate={fakeUpdate}
							/>
						</div>
						<div className="tooltip">
							<button
								className="specialbutton reset"
								onClick={reset}
								tabIndex="-1"
							>
								Reset
							</button>
							<button className="share" onClick={share}>
								<span className="tooltiptext" id="myTooltip">
									Copied URL
								</span>
								Share
							</button>
						</div>
					</div>
				</div>
				<div className="vcenter hcenter dontoverflow">
					<div className="floating front scrollbarParent">
						<div className="hcenter scrollbar">
							<MatrixList
								matricies={matricies}
								messages={messages}
								id={id}
								setId={setId}
							/>
							<div id="bottom"></div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<>
				<div className="vcenter hcenter full dontoverflow">
					<div className="floating front scrollbarParent">
						<div className="hcenter scrollbar">
							<MatrixPrimary
								matrix={matricies[id]}
								add={add}
								multiply={multiply}
								swap={swap}
								fakeUpdate={fakeUpdate}
							/>
							<div className="tooltip" style={{ width: "100%" }}>
								<button
									tabIndex="-1"
									className="specialbutton reset"
									onClick={reset}
								>
									Reset
								</button>
								<button className="share" onClick={share}>
									<span
										className="tooltiptext"
										id="myTooltip"
									>
										Copied URL
									</span>
									Share
								</button>
							</div>
							<MatrixList
								matricies={matricies}
								messages={messages}
								id={id}
								setId={setId}
							/>
						</div>
					</div>
				</div>
			</>
		);
	}
};

export default Manipulate;
