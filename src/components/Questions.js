import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Questions(props) {
	return (
		<>
			<div className="question-text">{props.questionsText}</div>
			{props.highlightedCode && (
				<SyntaxHighlighter language="javascript" style={docco}>
					{props.highlightedCode}
				</SyntaxHighlighter>
			)}
		</>
	);
}

export default Questions;
