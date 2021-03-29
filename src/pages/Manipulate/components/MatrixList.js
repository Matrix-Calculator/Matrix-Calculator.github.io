import { memo, Fragment } from "react";
import MatrixDisplay from "./MatrixDisplay";
import Comment from "./Comment";

const MatrixList = ({ matricies, messages, id, setId }) => {
	return (
		<>
			<p style={{ textAlign: "center" }}>
				Dynamic History (Click on any matrix to revert to it)
			</p>
			{matricies.map((matrix, index) => (
				<Fragment key={index}>
					{/* Bad fix for not having the same amount of comments and matricies */}
					{index > 0 && <Comment message={messages[index - 1]} />}
					<div
						key={index}
						id={index}
						className={index === id ? "active" : ""}
					>
						<MatrixDisplay
							onClick={setId}
							matrix={matrix}
							key={index}
							activeId={id}
							id={index}
						/>
					</div>
				</Fragment>
			))}
		</>
	);
};

const areEqual = (oldProps, newProps) => oldProps.id === newProps.id;

export default memo(MatrixList, areEqual);
