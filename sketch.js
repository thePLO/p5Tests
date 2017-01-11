var capture;

function setup() {
	pixelDensity(1);
  	createCanvas(320, 240);
  	capture = createCapture(VIDEO);
  	capture.size(320, 240);
  	//capture.hide();
}

function draw() {
  	background(255);
  	capture.loadPixels();
	for (var j = 0; j<capture.pixels.length; j+=4) {
  		capture.pixels[j] = capture.pixels[j+1];
  		capture.pixels[j+1] = capture.pixels[j];
  		capture.pixels[j+2] = capture.pixels[j+2];
  		capture.pixels[j+3] = 255;
    }
  	capture.updatePixels();
  	image(capture, 0, 0, 320, 240);
}

/*var bugs = []; // array of Jitter objects

function setup() {
  createCanvas(710, 400);
  // Create objects
  for (var i=0; i<50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  background(50, 89, 100);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}*/

/*function setup(){

}

function draw(){

}*/