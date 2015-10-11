function setup() {
	// create a place to draw
	createCanvas(640, 360);

}

function draw() {

	//flashing lights (background)
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
	triangle(0, 245, 28, 190, 56, 245);
	triangle(50, 245, 78, 190, 106, 245);
	triangle(100, 245, 128, 190, 156, 245);
	triangle(150, 245, 178, 190, 206, 245);
	triangle(200, 245, 228, 190, 256, 245);
	triangle(250, 245, 278, 190, 306, 245);
	triangle(300, 245, 328, 190, 356, 245);
	triangle(350, 245, 378, 190, 406, 245);
	triangle(400, 245, 428, 190, 456, 245);
	triangle(450, 245, 478, 190, 506, 245);
	triangle(500, 245, 528, 190, 556, 245);
	triangle(550, 245, 578, 190, 606, 245);
	triangle(600, 245, 628, 190, 656, 245);



	// draw UFO
	fill(170, 179, 182);
	ellipse(mouseX, mouseY, 60, 80);
	ellipse(mouseX, mouseY + 15, 100, 50);

	// flashion UFO lights
	if (mouseIsPressed) {

		fill(random(0, 100), random(0, 1000), random(0, 300));
		ellipse(mouseX + 28, mouseY + 13, 10, 10);
		ellipse(mouseX + 48, mouseY + 13, 10, 10);
		ellipse(mouseX - 28, mouseY + 13, 10, 10);
		ellipse(mouseX - 48, mouseY + 13, 10, 10);
		ellipse(mouseX, mouseY + 13, 10, 10);
		ellipse(mouseX, 300, 70, 20);
		ellipse(mouseX, mouseY + 33, 35, 6);

	} else {

		fill(99, 103, 105);
		ellipse(mouseX + 28, mouseY + 13, 10, 10);
		ellipse(mouseX + 48, mouseY + 13, 10, 10);
		ellipse(mouseX - 28, mouseY + 13, 10, 10);
		ellipse(mouseX - 48, mouseY + 13, 10, 10);
		ellipse(mouseX, mouseY + 13, 10, 10);
	}



}
