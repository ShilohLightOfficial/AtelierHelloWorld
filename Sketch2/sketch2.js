

var circles = [];

function setup(){

	createCanvas(500,500);
	var button = createButton("Add Particle");
	button.mousePressed(addParticle);
}


function draw(){

	background (255,255,255,100);

	for (var i = 0; i <circles.length; i++){

		if (circles[i].x < mouseX){

			if (circles[i].xspeed < 1.2){
			circles[i].xspeed += (circles[i].x - mouseX)/-10000;
			}else {
				circles[i].xspeed -= 0.1;
			}

		} else{
			if (circles[i].xspeed < 1.2){
			circles[i].xspeed += (circles[i].x - mouseX)/-10000;
			} else {
				circles[i].xspeed -= 0.1;
			}
		}

		if (circles[i].y < mouseY){

			circles[i].yspeed += (circles[i].y - mouseY)/10000;

		} else{
			
			circles[i].yspeed += (circles[i].y - mouseY)/10000;
		}

		circles[i].x += circles[i].xspeed;
		circles[i].y -= circles[i].yspeed;
		circles[i].c += 1;

		fill(circles[i].x, circles[i].y, 150);

		ellipse (circles[i].x, circles[i].y, circles[i].size, circles[i].size,);
	}




}

function addParticle(){

	var circle = {
		x:random(width), 
		y:random(height), 
		size: 10,  
		xspeed: 0,
		yspeed: 0
	};


	circles.push(circle);

	

}