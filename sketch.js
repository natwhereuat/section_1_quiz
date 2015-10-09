function setup() {
	// create a place to draw
	createCanvas(640, 360);

}

function draw() {

	//flashing lights
	if (mouseIsPressed) {
		background(random(0, 100), random(0, 1000), random(0, 300));

	} else {
		background(15, 28, 66);
	}

	//draw forest

	noStroke();
	fill(40, 87, 60);
	rect(0, 280, 640, 100);
	fill(0, 46, 1);
	rect(0, 240, 640, 40);
	triangle(150, 245, 178, 190, 206, 245);

	// draw UFO
	fill(170, 179, 182);
	ellipse(mouseX, mouseY, 60, 80);
	ellipse(mouseX, mouseY + 15, 100, 50);

	//flashing UFO shadow

	if (mouseIsPressed) {
		fill(random(0, 100), random(0, 1000), random(0, 500));
		ellipse(mouseX, 300, 70, 20);
	}

}
