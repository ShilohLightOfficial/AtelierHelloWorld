
var circles = [];
var time = 0;
var type = 5;

function setup(){

  var cnv = createCanvas(window.innerWidth,window.innerHeight);

}

function draw(){

	time += 0.2;

	background(255);

	noStroke();
	

	for (var i = 0; i < 10; i++){

		for (var j = 0; j < 10; j++){

			var circle = {
				size:10
			}

			circles.push (circle);

			fill(i * 30+ 100, time /2,  j * 30);
			circle = ellipse( (j * 30) + (width/2 - 75), (i * 30) + (height/2 -75), circles[i +j].size, circles[i+j].size);

			
		}
	}

	for (var i = 0; i < 19; i++){

		circles[i].size = (sin(time + (i*time/50)) * 10) + 20;

	}

}
