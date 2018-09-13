

var mouseClicks = [];

function setup(){

	createCanvas(500,500);

}


function draw(){

	for (var i = 0; i <mouseClicks.length; i++){
		ellipse (mouseClicks[i].x, mouseClicks[i].y, 50, 50);
	}


}

function mouseClicked(){

	var clickPosition = {x:mouseX, y:mouseY};


	mouseClicks.push(clickPosition);

	

}