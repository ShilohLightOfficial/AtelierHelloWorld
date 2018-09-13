

var mouseClicks = [];

function setup(){

	createCanvas(500,500);
	var button = createButton("Add Particle");
	button.mousePressed(addParticle);
}


function draw(){

	background (255,255,255,100);

	for (var i = 0; i <mouseClicks.length; i++){



		if (mouseClicks[i].x < mouseX){

			mouseClicks[i].xspeed += 0.02 * (mouseX - mouseClicks[i].x) / 1000;

		} else{

			mouseClicks[i].xspeed += -0.02 * (mouseX - mouseClicks[i].x) / -1000;
		}

		if (mouseClicks[i].y < mouseY){

			mouseClicks[i].yspeed += -0.02;

		} else{
			
			mouseClicks[i].yspeed += 0.02;
		}

		mouseClicks[i].x += mouseClicks[i].xspeed;
		mouseClicks[i].y -= mouseClicks[i].yspeed;
		mouseClicks[i].c += 1;

		fill(mouseClicks[i].x, mouseClicks[i].y, 150);

		ellipse (mouseClicks[i].x, mouseClicks[i].y, mouseClicks[i].size, mouseClicks[i].size,);
	}




}

function addParticle(){

	var clickPosition = {
		x:random(width), 
		y:random(height), 
		size: 10,  
		xspeed: 0,
		yspeed: 0



	};


	mouseClicks.push(clickPosition);

	

}