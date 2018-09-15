

var mouseClicks = [];

function setup(){

	createCanvas(500,500);
}


function draw(){

	background (255,255,255,100);

	for (var i = 0; i <mouseClicks.length; i++){

		mouseClicks[i].x += mouseClicks[i].offset;
		mouseClicks[i].y -= mouseClicks[i].speed;
		mouseClicks[i].c += 1;
		mouseClicks[i].size += 1;

		fill(mouseClicks[i].x, mouseClicks[i].y, 150);

		ellipse (mouseClicks[i].x, mouseClicks[i].y, mouseClicks[i].size, mouseClicks[i].size,);
	}




}

function mouseClicked(){

	var clickPosition = {
		x:mouseX, 
		y:mouseY, 
		size: 10,  
		speed: random(2,3),
		offset:random(-1,1)



	};


	mouseClicks.push(clickPosition);

	

}
function mouseDragged(){

	var clickPosition = {
		x:mouseX, 
		y:mouseY, 
		size: 10,  
		speed: random(2,3),
		offset:random(-1,1)



	};


	mouseClicks.push(clickPosition);

	

}