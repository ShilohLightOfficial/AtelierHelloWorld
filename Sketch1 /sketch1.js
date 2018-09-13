function setup(){

    createCanvas(1000,500);
}


function draw(){

	var x = random(width);
	var y = random(height);

    fill(x, y, 150);

    for (var i = 0; i < 1000; i++){

    	ellipse(x,y,50	,50);
    }

}