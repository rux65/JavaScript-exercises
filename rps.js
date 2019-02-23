//cash the DOM

let userScore=0;
let compScore=0;
const userScore_span= document.getElementById("user-score");
const compScore_span= document.getElementById("computer-score");

const scoreBoard_div= document.querySelector("score-board");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices= ["r","p","s"];
	const randomNumber =Math.floor(Math.random()*3); // gives a random number between 0 and 1
	// never reach 3
	return choices[randomNumber];
}

function convert(letter){
	if (letter === "r") return "Rock";
	if (letter ==="p") return "Paper";
	return "Scissors"; // see here no else
};

function win(user, comp){
	userScore++; // score gets updated
	userScore_span.innerHTML=userScore;	
	compScore_span.innerHTML=compScore;
	//console.log("user")
	//console.log("compuer")
	const smallUserWord = "user".fontsize(3).sup()
	const smallCompWord = "comp".fontsize(3).sup()
	result_div.innerHTML = convert(user)+smallUserWord+ " beats "+convert(comp)+smallCompWord+". You win! ";
	document.getElementById(user).classList.add("green-glow");// array on all the specific classes ont hat element
	setTimeout (function(){ document.getElementById(user).classList.remove("green-glow")},1000)
	}

//setTimeout (function(){ console.log("hallo")},1500);


function lose(user, comp){
	compScore++; // score gets updated
	userScore_span.innerHTML=userScore;	
	compScore_span.innerHTML=compScore;
	//console.log("user")
	//console.log("compuer")
	const smallUserWord = "user".fontsize(3).sup()
	const smallCompWord = "comp".fontsize(3).sup()
	result_div.innerHTML = convert(user)+smallUserWord+ " loses to "+convert(comp)+smallCompWord+". You lost! ";
	document.getElementById(comp).classList.add("red-glow");
	setTimeout (function(){ document.getElementById(comp).classList.remove("red-glow")},1500);

	}

function draw(user, comp){
	const smallUserWord = "user".fontsize(3).sup()
	const smallCompWord = "comp".fontsize(3).sup()
	result_div.innerHTML = convert(user)+smallUserWord+ " equals "+convert(comp)+smallCompWord+". It's a draw! ";
}

function game(userChoice){
	const computerChoice=getComputerChoice();
	switch(userChoice+computerChoice){
		case"rs":
		case"pr":
		case"sp":
			win(userChoice,computerChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			lose(userChoice,computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,computerChoice);
			break;		
};
};


function main(){
	
rock_div.addEventListener("click", function(){
	game("r");
});

paper_div.addEventListener("click", function(){
	game("p");
});

scissors_div.addEventListener("click", function(){
	game("s");
});
};

main();

// event listener - records the clicks
