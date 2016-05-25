$(document).ready(function(){
	var counter;
 	var correct = '';
 	var wrong = '';
  	var value = document.getElementById('rightanswer');
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
		}

	};
	
	for (var prop in questions){
		console.log(prop);
		console.log(questions[prop]);
		askQuestion(questions[prop])
		// <input type="radio" value='Fine' />
		
	};

	function askQuestion(questions) {
		$("#questions").empty();
		$("#questions").html(questions.text);
	
		// $("#A").append(questions.answers.a);
		// $("#B").append(questions.answers.b);
		// $("#C").append(questions.answers.c);
		// $("#D").append(questions.answers.d);
		var answers = questions.answers;
		console.log(answers)

		// need to create input for each answer.....
		// loop through answers creating input for each.....
		// when creating input give it a value of the answers text
		// in submit, chek the value of the input..........
	}

	// $("#questions").html(questions[prop].text);
	
	// $("#A").append(questions[prop].answers.a);
	// $("#B").append(questions[prop].answers.b);
	// $("#C").append(questions[prop].answers.c);
	// $("#D").append(questions[prop].answers.d);
	
	$("#submitButton").on('click', function() {
		if ( value=== questions.Q1.correctAnswer) {
			correct++;
			alert("Correct");

		}
		 else {
			wrong++;
			alert("Wrong");
		}
	})

//-----------------Timer -----------------------------------------

	var number = 10;

	function run(){
		counter = setInterval(decrement, 1000);
	}
	
	function decrement(){
		number--;
		$("#timer").html("Time Remaining:  " + number + " ");
		if (number === 0) {
			stop();
			alert("Times Up!")
		}
	}

	function stop(){
		clearInterval(counter);
	}
	
	
	run();	
	

});





//--------------!!!!!NOTES!!!!!!!-----------------------------------------------	
// Google Radio Buttons and adding to empty div.

//Timer, SetTimeOut,


// Q2{
	// 	text:'',
	// 	answers:{
	// 	a:'',
	// 	b:'',
	// 	c:'',
	// 	d:'',
	// 	},
	// 	correctAnswer:'',
	// }
	

// Q2{
// 		text:'How many NBA MVP Awards has Tim Duncan won?',
// 		answers:{
// 		a:'1',
// 		b:'2',
// 		c:'3',
// 		d:'4',
// 		},
// 		correctAnswer:'2',
// 	}

//Q3{
	// 	text:'How many Defensive MVPs has Kawhi Leonard won?',
	// 	answers:{
	// 	a:'4',
	// 	b:'3',
	// 	c:'2',
	// 	d:'1',
	// 	},
	// 	correctAnswer:'2',
	// }

//Q4{
	// 	text:'How many NBA Finals MVP has Tim Duncan won?',
	// 	answers:{
	// 	a:'3',
	// 	b:'2',
	// 	c:'1',
	// 	d:'0',
	// 	},
	// 	correctAnswer:'3',
	// }

//Q5{
	// 	text:'How many NBA Titles have the Spurs Won?',
	// 	answers:{
	// 	a:'6',
	// 	b:'5',
	// 	c:'4',
	// 	d:'3',
	// 	},
	// 	correctAnswer:'5',
	// }









