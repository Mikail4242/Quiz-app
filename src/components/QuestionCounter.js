function QuestionCounter(props) {
	return (
		<div className="question-count">
			<span>{props.currentQuestion + 1}</span>/{props.questions}
		</div>
	);
}

export default QuestionCounter;
