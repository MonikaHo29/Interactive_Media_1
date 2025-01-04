function setup() {
    createCanvas(400, 400); // create a 400x400 canvas
  }
  
  function draw() {
    background(220); // set the background color to light gray
    
    // draw a rectangle with a red fill color
    fill(255, 0, 0); //red color
    rect(50, 50, 100, 100);
    
    // draw an ellipse with a blue stroke color
    stroke(0, 0, 255);
    strokeWeight(4);
    ellipse(250, 250, 100, 100); // x, y, width, height
    
    // draw a line with a green stroke color
    stroke(0, 255, 0);
    strokeWeight(2);
    line(100, 200, 300, 200); 
    
    // draw a triangle with a yellow fill color
    fill(255, 255, 0);
    triangle(200, 100, 250, 200, 150, 200);
  }




  function setup() {
    createCanvas(800, 800); 
    background(255);  
  }
  
  function draw() {
    // PURPLE DOTS
    // background(220, 220, 220);
    // fill(255, 0, 255);
    // noStroke();
    // ellipse(mouseX, mouseY, 60, 60);
    
    // RANDOM COLOR DOTS
    // fill(random(255), random(255), random(255));
    // noStroke();
    // ellipse(mouseX, mouseY, random(100), random(100));
    
    // RANDOM COLOR LINES
    noFill();
    stroke(random(255), random(255), random(255));
    strokeWeight(random(10, 100));
    line(pmouseX, pmouseY, mouseX, mouseY);
  }