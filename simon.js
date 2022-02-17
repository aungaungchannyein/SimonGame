// $("#green").click(function()
// {
// 	console.log("hello");
// }
// );
buttonColors=["red","blue","green","yellow"]


gamePattern =[]
userClickedPattern =[]
level = 0
$("h1").click(function(){
	$("h1").text("level "+level)
	nextSequence()
})

function startOver(){
	level = 0;
	gamePattern =[]
	userClickedPattern =[]

}


function nextSequence(){
	userClickedPattern=[]
	level+=1
	$("h1").text("level "+level)
	randomNumb = Math.floor(Math.random()*4)
	// console.log(randomNumb)
	randomChosenColor = buttonColors[randomNumb]
	gamePattern.push(randomChosenColor) 
	$("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
	makeSound(randomChosenColor)

}

$(".btn").click(function(){
	userChosenColour= this.getAttribute("id")
	makeSound(userChosenColour)
	animatePress(userChosenColour)
	userClickedPattern.push(userChosenColour)
	console.log(userClickedPattern)
	checkAnswer(userClickedPattern.length -1 )
})

function animatePress(currentColor){
	$("#"+currentColor).addClass("pressed")

	setTimeout(function(){
		$("#"+currentColor).removeClass("pressed")
	}, 100)
}

function makeSound(key){
	var tom1 = new Audio("sounds/"+key+".mp3");
	tom1.play();
}

function checkAnswer(currentLevel){

	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){

		if (gamePattern.length === userClickedPattern.length){

			setTimeout(nextSequence,1000)
		}
		console.log("success")
	}
	else{
		console.log("fail")
		makeSound("wrong")
		$("h1").text("Game Over, Press here to Restart")
		$("body").addClass("game-over")
		setTimeout(function(){
		$("body").removeClass("game-over")
	}, 100)
		startOver()

	}



}


