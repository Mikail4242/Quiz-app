export const questions = [
	{
		questionText:
			"Which of the following is the correct output for the following JavaScript code:",
		code: `
		varx=5,y=1  
		var obj ={ x:10}  
		with(obj)  
		{  
			  alert(y)  
		}  
			  `,
		answerOptions: [
			{ answerText: `Error`, isCorrect: false },
			{ answerText: `1`, isCorrect: true },
		],
	},
	{
		questionText:
			"What will happen, if the following JavaScript code is executed?",
		code: `
		var count =0;  
		while (count <10)  
		{  
			 console.log(count);  
			 count++;  
		}  
			  `,
		answerOptions: [
			{
				answerText: `An exception is thrown`,
				isCorrect: false,
			},
			{
				answerText: `The values of count variable are logged or stored in a particular location or storage
			`,
				isCorrect: true,
			},
		],
	},
	{
		questionText:
			"Which of the following is the correct output for the following JavaScript code:",
		code: `
		Int x=8;  
		if(x>9)  
		{  
		document.write(9);  
		}  
		else  
		{  
		document.write(x);  
		}  
			  `,
		answerOptions: [
			{
				answerText: `Undefined`,
				isCorrect: true,
			},
			{ answerText: `8`, isCorrect: false },
		],
	},
	{
		questionText:
			" See the given code of JavaScript and choose the correct output from the following:",
		code: `
		functioncomparing()  
		{  
		intx=9;  
		chary=9;  
		if(x==y)  
		returntrue;  
		else  
		returnfalse;  
		}  
			  `,
		answerOptions: [
			{
				answerText: `runtime error`,
				isCorrect: false,
			},
			{ answerText: `true`, isCorrect: true },
		],
	},
];
