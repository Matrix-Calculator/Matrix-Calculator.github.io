import { memo } from "react";

const MatrixConfigureSquare = ({ id, value, onUpdate }) => {
	return <input value={value} onChange={(e) => onUpdate(id, e)}></input>;
};

const areEqual = (oldProps, newProps) => {
	return oldProps.value === newProps.value;
};

export default memo(MatrixConfigureSquare, areEqual);
