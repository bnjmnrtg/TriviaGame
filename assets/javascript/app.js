$(document).ready(function(){
	var counter;
	var myValue;
	var a;
	var b;
	var rightAnswer;
 	var correct = 0;
 	var wrong = 0;
<<<<<<< HEAD
 	var questionsAnswered = 0;
=======
 	var questionsAnswered;
>>>>>>> e548badf5939a1f34a995d4f088bc60608bceb4c
 	var currentQuestion = 1;
 	
  	
	var questions = {
		Q1:{
			text:'Who does not play for the Spurs?',
			answers:
				[
					'Miller',
					'Ginobili',
					'Bonner',
					'Gobert'
				],
			correctAnswer: 'Gobert',
		},
		
		Q2:{
			text:'How many NBA MVP Awards has Tim Duncan won?',
			answers:[
				'1',
				'2',
				'3',
				'4',
			],
			correctAnswer:'2',
		},
		Q3:{
			text:'How many Defensive MVPs has Kawhi Leonard won?',
			answers:[
				'4',
				'3',
				'2',
				'1',
			],
			correctAnswer:'2',
		},
		Q4:{
			text:'How many NBA Finals MVP has Tim Duncan won?',
			answers:[
				'3',
				'2',
				'1',
				'0',
			],
			correctAnswer:'3',
		},

		Q5:{
			text:'How many NBA Titles have the Spurs Won?',
			answers:[
				'6',
				'5',
				'4',
				'3',
				],
			correctAnswer:'5',
			}

	};
	
	// for (var prop in questions){
	// 	console.log(prop);
	// 	console.log(questions[prop]);
	// 	askQuestion(questions[prop])
	// 	rightAnswer = (questions[prop].correctAnswer);
		
		
		
	// };

	function askQuestion(currentQuestionObject) {
<<<<<<< HEAD
		console.log(questionsAnswered);
=======
		console.log('fn ran')
>>>>>>> e548badf5939a1f34a995d4f088bc60608bceb4c
		if (currentQuestion >= 6) {
			$("#title").html("Results:");
			$("#timer").html("Game Over");
			$("#options").empty();
			$("#questions").html("Correct:  " + correct);			
			$("#wrong").html("Wrong: " + wrong);
			return;
		}
		run();
<<<<<<< HEAD
		console.log(currentQuestion);
=======
		console.log(currentQuestion)
>>>>>>> e548badf5939a1f34a995d4f088bc60608bceb4c
		$("#questions").empty();
		$("#options").empty();
		a = "";
		b = "";
		$("#questions").html(currentQuestionObject.text);
		console.log(questions)
		rightAnswer = questions['Q'+currentQuestion].correctAnswer;

		// check if rightAnswer is undefined and if so game is over
		b = currentQuestionObject.answers;

		for (var i = 0; i < b.length; i++) {
			// myValue = b[i];
			// console.log(myValue);
			a =  $('<input type="radio" name="options" value='+b[i]+'>'+ b[i] +" "+ '</input>');
			$("#options").append(a);
		};
	};

	// console.log(myValue + " ,why is this my value??");
	// console.log(rightAnswer);
	
		// need to create input for each answer.....
		// loop through answers creating input for each.....
		// when creating input give it a value of the answers text
		// in submit, chek the value of the input..........
	

	$("#submitButton").on('click', function() {
		// console.log(rightAnswer)
		// console.log(myValue)
<<<<<<< HEAD

=======
>>>>>>> e548badf5939a1f34a995d4f088bc60608bceb4c
		var userChoice = $('input[name=options]').filter(':checked').val()
		// find which radio btn is selected if .checked == true
		// if the value of tht btn == rightAnswer then correct else wrong
		if ( userChoice === rightAnswer) {
			correct++;
			questionsAnswered++;
			alert("Correct");
			stop();

		}
		 else {
			wrong++;
			questionsAnswered++;
			alert("Wrong");
			stop();
		};
		currentQuestion++
		askQuestion(questions['Q'+currentQuestion]);
<<<<<<< HEAD

		if(questionsAnswered === 5){
			$('#submitButton').remove();
		}
		

=======
>>>>>>> e548badf5939a1f34a995d4f088bc60608bceb4c
	})

	askQuestion(questions.Q1);
	// rightAnswer = questions.Q1.correctAnswer;
	
// 

//-----------------Timer -----------------------------------------

	var number = 10;

	function run(){
		number = 10
		counter = setInterval(decrement, 1000);

	}
	
	function decrement(){
		number--;
		$("#timer").html("Time Remaining:  " + number + " ");
		if (number === 0) {
			stop();
			questionsAnswered++;
			wrong++;
			currentQuestion++;
			askQuestion(questions['Q'+currentQuestion]);
			alert("Times Up!")
		}
	}

	function stop(){
		clearInterval(counter);
	}
	
	
	// run();	
<<<<<<< HEAD
	// console.log(wrong)
=======
	console.log(wrong)
>>>>>>> e548badf5939a1f34a995d4f088bc60608bceb4c

});





//--------------!!!!!Questions!!!!!!!-----------------------------------------------	



// Q2:{
	// 	text:'',
	// 	answers:[
	// 		a:'',
	// 		b:'',
	// 		c:'',
	// 		d:'',
	// 	],
	// 	correctAnswer:'',
	// },
	

// Q2{ USING
// 		text:'How many NBA MVP Awards has Tim Duncan won?',
// 		answers:[
// 		'1',
// 		'2',
// 		'3',
// 		'4',
// 		],
// 		correctAnswer:'2',
// 	}

//Q3{
	// 	text:'How many Defensive MVPs has Kawhi Leonard won?',
	// 	answers:[
	// 	'4',
	// 	'3',
	// 	'2',
	// 	'1',
	// 	],
	// 	correctAnswer:'2',
	// }

//Q4{
	// 	text:'How many NBA Finals MVP has Tim Duncan won?',
	// 	answers:[
	// 	'3',
	// 	'2',
	// 	'1',
	// 	'0',
	// 	],
	// 	correctAnswer:'3',
	// }

//Q5{
	// 	text:'How many NBA Titles have the Spurs Won?',
	// 	answers:[
	// 	'6',
	// 	'5',
	// 	'4',
	// 	'3',
	// 	],
	// 	correctAnswer:'5',
	// }









