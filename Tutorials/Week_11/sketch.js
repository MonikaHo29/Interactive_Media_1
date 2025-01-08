/*let temp = 40; // Variable 

//If/else statement is like a condition to check if statement is true or false, have to be in boolean to compare the value
if(temp > 30) {
  console.log("It's hot!");
}else{
  console.log("It's not hot!");
}
*/


function setup() {
  createCanvas(800, 800);
}

/*
function draw() {
  /*tell me is it left or right
  if(mouseX < width/2){
    print ("mouse is in the left half");
    background(255, 0, 0);
  } else{
    print ("mouse is in the right half");
    background(0, 0, 255);
  }
}
*/

/*
function draw() {
  background(220);
  fill(255, 255, 0);
  ellipse(200, 200, 150, 150);
}
*/

function draw() {
  /*SEQUENTIAL = when you have a condition after another condition
  if(mouseX < width/2 && mouseY < height/2){
    fill(255, 0, 0);
    rect(0, 0, width/2, height/2);
  }
  else if(mouseX < width/2 && mouseY >= height/2){
  fill(0,255,0);
  rect(0, height/2, width/2, height/2);
  }
  else if(mouseX >= width/2, mouseY < height/2){
    fill(0,0,255);
    rect(width/2, 0, width/2, height/2);
  }
  else{
    fill(255, 255, 0);
    rect(width/2, height/2, width/2, height/2);
  }
  */

  /*NESTED = when you have a condition inside another condition*/
  if(mouseX < width/2) {     
    if (mouseY < width/2){  //condition in another condition
      fill(255, 0, 0);
      rect(0, 0, width/2, height/2);
    } else {
      fill(0, 255, 0);
      rect(0, height/2, width/2, height/2);
    }
  } else {
    if (mouseY < height/2){
      fill(0, 0, 255);
      rect(width/2, 0, width/2, height/2);
    } else {
      fill(255, 255, 0);
      rect(width/2, height/2, width/2, height/2);
    }
  }
}