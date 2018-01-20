var guesses= 9;
var wins=0;
var looses=0;
var userChoice;
var computerGuess;
var guessed="";

var choices=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function choosing(){ 	//The computer chooses a random letter from the 26 posible choices.
	computerGuess= choices[Math.floor(Math.random() *26)];
	console.log (computerGuess); 	//NOTE: I console log everything to check that every part of the code worked while I was writing it.
}									//The player can cheat if he/she wants to.

choosing(); 	//I call this function to start the game

document.onkeyup= function(event){ 		//Once the player presses a key, this function triggers and we store the value un "userChoice"
	userChoice=event.key;
	console.log(userChoice);

	if (userChoice===computerGuess) {	 // If both match wins are incremented in one and we reset the remaining guesses and the guessed to default.
		wins=wins+1;
		guesses=9;
		guessed="";
		choosing();		//The computer also chooses a new letter
	}

	else{			//If player misses the reamining guesses are reduced by 1 and we add the pressed to "guessed"
		guesses=guesses-1;
		guessed=guessed+userChoice+", ";
		console.log(guessed);

		if (guesses===0) {		//Once the total guesses are over "looses" are incremented by one and reset to 9. "guessed" is also reset.
			looses=looses+1;	
			guesses=9;
			guessed="";
			choosing(); 	 //The computer also chooses a new letter
		}
	}
	document.querySelector("#wins").innerHTML=wins;		//Here we send back all the info to the HTML.
	document.querySelector("#looses").innerHTML=looses;		//Note that I initially added this to every condition. 
	document.querySelector("#gLeft").innerHTML=guesses;		//but when it was finished I realiced they were repeated and I could write them after the conditionals.
	document.querySelector("#guessed").innerHTML=guessed;
}






