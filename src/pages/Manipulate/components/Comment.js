const Comment = ({ message }) => {
	return (
		<p>
			<span style={{fontSize: "25px"}}>&darr;</span>
			{message[0].toString()}
			<span className="standout">{message[1]}</span>
			{message[2].toString()}
			<span className="standout">{message[3]}</span>
			{message[4].toString()}
			<span className="standout">{message[5]}</span>
			<span style={{fontSize: "25px"}}>&darr;</span>
		</p>
	);
};

export default Comment;
