function setup(){

    createCanvas(1000,500);
}


function draw(){

	
    for (var i = 0; i < 1000; i++){

    	var x = random(width);
		var y = random(height);

		noStroke();

    	fill(y, x, map(mouseX,0,1000,0,255));

    	ellipse(x,y,10,10);
    }

}

function map (num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


//FOUND THIS CODE HERE
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers