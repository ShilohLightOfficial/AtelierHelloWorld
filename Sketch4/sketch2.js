


var bubble = {};

function setup(){

	createCanvas(500,500);
	
	bubble = {

		x:width/2,
		y:height/2
	}
}


function draw(){

	background(255,255,255,100);


		
	ellipse(bubble.x,bubble.y,50,50);

	bubble.xspeed = random(-3,3);
	bubble.yspeed = random(-3,3);
	bubble.x += bubble.xspeed;
	bubble.y += bubble.yspeed;
}

function mouseClicked(){

	var circle = {

		x: random(width),
		y: random (height),
		c: 255,
		xspeed: 0,
		yspeed: 0

	}

		if (dist(bubble.x, bubble.y, mouseX,mouseY) < 25){

			fill(0);
			console.log("tes");
		}
	

}