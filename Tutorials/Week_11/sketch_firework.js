// to animate the firework, basically what i did was to rather use for loops to render, i'd have the draw() function to run and draw out every step. And then i have a 'trigger' variable, controlled by mousePressed, to determine when drawing will happen. aka: if user click the mouse mousePressed function will (1) store the position of the cursor as stopping point for the firework shooting, and (2) generate random variables determine the firework's quality, then (3) turn trigger variable on so that draw() can render the animation.


// setting up the variables. since it needs communication between functions, i'll create the variables outside of the functions
let stopX; // stopping point of the firework shooting, it'd then start going off
let stopY; // stopping point of the firework shooting, it'd then start going off
let y; // current position of the firework shooting. we don't need x since it only moves up
let scatters; // how many directions the firework will scatter
let steps; // how many steps it will move before disappear
let angle; // calculate angle between the directions

let trigger; // a variable to control whether a firework is launched

function setup() {
  createCanvas(800, 800);
  background(0);
  
  // when the sketch is set up, trigger is false so that there'd be no firework. this will be switched to true when mouse is pressed
  trigger = false;
}


function mousePressed() {
  // when mouse is pressed, record cursor's current position as stopping point where the firework will go off
  stopX = mouseX;
  stopY = mouseY;
  // starting point of the firework at the bottom of the screen
  y = height;
  
  // generating random firework's property: color, scatters, steps and calculate angle
  fill(random(255),random(255),random(255));
  noStroke(); 
  scatters = int(random(5,20))*4;
  steps = scatters/2;
  angle = TWO_PI/scatters;
  // set currentStep to 0 (not go off yet)
  currentStep = 0;
  // trigger the animation
  trigger = true;
}

function draw() {
  // clear up previous step (you can delete this line to see the whole firework graphic)
  background(0);  
  
  // only happen if mouse is pressed and trigger variable is set to true
  if(trigger == true) {
    // it's in draw() function so no for() loop needed, draw() will loop this, y-=10 will make the position move up by 10px every time until it stops at stopY
    if (y >= stopY) {
      ellipse(stopX,y,5,5);
      // go up by 10px
      y-=10;
    }
    // once it reaches stopY point the firework will go off
    else {
      // now set the coordination to the click position.
      translate(stopX,stopY);
      // agian, it's in draw() so no for() loop needed, draw() will loop this until it reaches the amount of random steps
      if (currentStep < steps) {
        // how many directions
        for (let j = 0; j < scatters; j++) {
          // using trigonomatry to calculate the position of the scatter points
          // https://en.wikipedia.org/wiki/List_of_trigonometric_identities
          let x2 = cos(angle*j)*10*currentStep; 
          let y2 = sin(angle*j)*10*currentStep;
          ellipse(x2,y2,5,5);
        }
        // count the step
        currentStep++;
      }
    }
  }
}
