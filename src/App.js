import React, { useState, useEffect } from "react";
import Answers from "./components/Answers";
import QuestionCounter from "./components/QuestionCounter";
import Questions from "./components/Questions";
import Score from "./components/Score";
import { questions } from "./constant";

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const timeRemaining = 15;

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setSeconds(0);
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	useEffect(() => {
		let timer;
		if (seconds >= timeRemaining) {
			setSeconds(0);
			const nextQuestion = currentQuestion + 1;
			if (nextQuestion < questions.length) {
				setCurrentQuestion(nextQuestion);
			}
			if (currentQuestion + 1 === questions.length) {
				setShowScore(true);
				return () => clearTimeout(timer);
			}
		} else if (!showScore) {
			timer = setTimeout(() => {
				setSeconds(seconds + 1);
			}, 1000);
		}

		if (showScore === true) {
			return () => clearTimeout(timer);
		}
		return () => clearTimeout(timer);
	}, [seconds]);

	return (
		<div className="app">
			{showScore ? "" : <progress value={seconds} max={timeRemaining} />}
			{showScore ? (
				<Score score={score} questions={questions.length} />
			) : (
				<>
					<div className="question-section">
						<QuestionCounter
							currentQuestion={currentQuestion}
							questions={questions.length}
						/>
						<Questions
							questionsText={questions[currentQuestion].questionText}
							currentQuestion={currentQuestion}
							questions={questions}
							highlightedCode={questions[currentQuestion]?.code}
						/>
					</div>
					<Answers
						answerOptions={questions[currentQuestion].answerOptions}
						currentQuestion={currentQuestion}
						questions={questions}
						handleClick={handleAnswerOptionClick}
					 />

				</>
			)}
		</div>
	);
}
