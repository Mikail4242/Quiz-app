function Answers(props) {
	return (
		<div className="answer-section">
			{props.answerOptions.map((answerOption) => (
				<button
					key={answerOption.isCorrect}
					onClick={() => props.handleClick(answerOption.isCorrect)}>
					{answerOption.answerText}
				</button>
			))}
		</div>
	);
}

export default Answers;
