var colors = 
["rgb(255, 0, 0)",
 "rgb(0, 0, 255)",
 "rgb(0, 255, 0)",
 "rgb(255, 0, 255)",
 "rgb(255, 255, 0)",
 "rgb(0, 255, 255)"
]

var squares = document.querySelectorAll(".square");

var pickedcolor = colors[2];

var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedcolor;

for(var i=0;i<squares.length;i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
        

        alert(clickedColor);
		if(clickedColor === pickedcolor){
			alert("Correct!!!");
		}
		else
		{
			alert("Wrong!!!");
		}
	});
}
