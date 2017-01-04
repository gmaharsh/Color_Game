var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");

var pickedcolor = pickcolor();

var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.getElementById("message");

var h1 = document.getElementById("heading")

colorDisplay.textContent = pickedcolor;

for(var i=0;i<squares.length;i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;

		if(clickedColor === pickedcolor){
			messageDisplay.textContent = "Correct";
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
