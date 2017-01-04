var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.getElementById("heading")
colorDisplay.textContent = pickedcolor;
var reset = document.getElementById("newgame");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

easy.addEventListener("click",function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");

    numSquares = 3;
    colors = generateRandomColors(numSquares);

    pickedcolor = pickcolor();

    colorDisplay.textContent = pickedcolor;

    for(var i=0;i<squares.length;i++){
    	if(colors[i]){
            squares[i].style.background = colors[i];
    	}else{
    		squares[i].style.display = "none";
    	}
    }
});

hard.addEventListener("click",function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");

    numSquares = 6;
    colors = generateRandomColors(numSquares);

    pickedcolor = pickcolor();

    colorDisplay.textContent = pickedcolor;

    for(var i=0;i<squares.length;i++){
    	if(colors[i]){
            squares[i].style.background = colors[i];
    		squares[i].style.display = "block";
    }
}
});


reset.addEventListener("click",function(){
	colors = generateRandomColors(6);

	pickedcolor = pickcolor();

	colorDisplay.textContent = pickedcolor;

	for(var i=0;i<squares.length;i++){
		squares[i].style.background = colors[i];
	}
     h1.style.background = "#232323";
});
for(var i=0;i<squares.length;i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;

		if(clickedColor === pickedcolor){
			messageDisplay.textContent = " Correct!!!";
			reset.textContent = "Play Again?";
			changeColor(clickedColor);
			h1.style.background = pickedcolor;
		}
		else
		{
			messageDisplay.textContent = "Try Again!!!";
			this.style.background = "#232323";
		}
	});
}

function changeColor(color){
	for(var i= 0;i<squares.length;i++){
		squares[i].style.background = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr =[]
    
    for(var i=0;i<num;i++){
    	arr.push(randomcolor());
    }

	return arr;
}

function randomcolor(){
	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r +", " + g + ", " + b +")";
}

function reset(){

}
