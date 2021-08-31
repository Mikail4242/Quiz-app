function Score(props) {
	return (
		<div className="score-section">
			<p className="score-text">You scored {props.score} out of {props.questions}</p>
		</div>
	);
}

export default Score;
