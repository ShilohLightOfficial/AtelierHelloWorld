
var circles = [];

function setup(){

	createCanvas(500,500);
	
}

function draw(){

	noStroke();
	background(255,255,255,100);

	for (var i = 0;i < circles.length; i ++){

		fill (circles[i].x, circles[i].y, 150, 255 - circles[i].lifetime);

		ellipse(circles[i].x,circles[i].y,50,50);

		circles[i].x += circles[i].xspeed;
		circles[i].y += circles[i].yspeed;

		circles[i].lifetime += 4;


		if (circles[i].y >= height - 25 && circles[i].yspeed > 2){
			circles[i].yspeed *= -0.75;
		}

		if (circles[i].y >= height -25 && circles[i].yspeed < 2){

			//circles[i].yspeed = 0;

		} else {

			circles[i].yspeed += circles[i].y/100;
		}
	}
}
function mouseClicked(){

	var circle = {

		x: mouseX,
		y: mouseY,
		xspeed: 0.1,
		yspeed: -4,
		lifetime: 0

	}


	circles.push(circle);
}

function mouseDragged(){

	var circle = {

		x: mouseX,
		y: mouseY,
		xspeed: 0.1,
		yspeed: -4,
		lifetime: 0

	}


	circles.push(circle);
}