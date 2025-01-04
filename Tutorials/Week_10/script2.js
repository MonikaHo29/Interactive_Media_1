// variable:
// are placeholders to store/alter stuff in containers.
// the name and the kind of container matters

/*
Useful system variables:
• width: Width (in pixels) of sketch window.
• height: Height (in pixels) of sketch window.
• key: Most recent key pressed on the keyboard.
• keyCode: Numeric code for key pressed on keyboard.
• keyPressed: True or false? Is a key pressed?
• mousePressed: True or false? Is the mouse pressed?
• mouseButton — Which button is pressed? Left, right, or center?
*/

// let number; // declares a variable of the type integer
// number = 50; // initializes variable

let circleX = 100; // declares and initializes at once
let circleY = 100; // declares and initializes at once 
let diameter = 100;
let colorR;
let colorG;
let colorB;

function setup() {
  createCanvas(800, 800); 
  background(255); 
  switchColor();
}

function draw() {
  background(255); 
  ellipse(circleX, circleY, diameter, diameter); 
  circleX = circleX + 1;
  // print(circleX);
}

function mousePressed() {
  circleX = 100;
  circleY = circleY + diameter;
  // print(circleY);
  switchColor();
}

function keyPressed() {
  circleX = 100;
  circleY = 100;
  switchColor();
}

function switchColor() {
  colorR = random(0, 255);
  colorG = random(0, 255);
  colorB = random(0, 255);
  print("The color is: " + colorR + " R, " + colorG + " G, " + colorB + " B, ");
  fill(colorR, colorG, colorB);
}