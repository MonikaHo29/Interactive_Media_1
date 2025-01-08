let brushColor;
let brushSize;
let brushShape;
let keyCode;
/* 0 is filled circle, 1 is stroked circle, 2 is filled rectangle, 3 is stroked rectangle*/

function setup() {
  createCanvas(windowWidth, windowHeight); //full screen Canvas
  background(255);
  /* initializing the variables*/
  brushSize = 50; 
  brushColor = color(255, 0, 0);
  brushShape = 0;
} 
function draw() {

    /* implement different brush shapes*/
    /*
    fill(brushColor);
    ellipse(mouseX, mouseY, brushSize, brushSize);
    */
   if (brushShape == 0){
    fill(brushColor);
    noStroke();
    ellipse(mouseX, mouseY, brushSize, brushSize);
   } else if (brushShape == 1){
    stroke(brushColor);
    noFill();
    ellipse(mouseX, mouseY, brushSize, brushSize);
   } else if (brushShape == 2){
    fill(brushColor);
    noStroke();
    rectMode(CENTER);
    rect(mouseX, mouseY, brushSize, brushSize);
   } else if (brushShape == 3){
    stroke(brushColor);
    noFill();
    rectMode(CENTER);
    rect(mouseX, mouseY, brushSize, brushSize);
   }
}

// fellow system variables are possible for key =  BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, and RIGHT_ARROW
function keypressed(){
    //change the brush size
    if (keyCode == UP_ARROW){
        brushSize +=10;
    }
    else if (keyCode == DOWN_ARROW){
        brushSize -=10;
    }

    // change the brush color
    /* using if statements
    if(key == '1'){ brushColor = color(255, 0, 0); };
    if(key == '2'){ brushColor = color(0, 255, 0); };
    if(key == '3'){ brushColor = color(0, 0, 255); };
    if(key == '4'){ brushColor = color(255, 255, 0); };
    if(key == '5'){ brushColor = color(255, 0, 255); };
    if(key == '6'){ brushColor = color(0, 255, 255); };
    if(key == '7'){ brushColor = color(220)}; //grey
    if(key == '8'){ brushColor = color(110)}; //dark grey
    if(key == '9'){ brushColor = color(0)}; //black
    if(key == '0'){ brushColor = color(255)}; //white
    */
    /* using switch statements*/
    switch(key){
        case '1': brushColor = color(255, 0, 0); break;
        case '2': brushColor = color(0, 255, 0); break;
        case '3': brushColor = color(0, 0, 255); break;
        case '4': brushColor = color(255, 255, 0); break;
        case '5': brushColor = color(255, 0, 255); break;
        case '6': brushColor = color(0, 255, 255); break;
        case '7': brushColor = color(220); break;
        case '8': brushColor = color(110); break;
        case '9': brushColor = color(0); break;
        case '0': brushColor = color(255); break;
    }

    /*press ENTER to wipe*/
    if (keyCode == ENTER){
        background(255);
    }
}

function mousepressed(){
    /*change the brush shape by clicking the mouse*/
    brushShape++;
    if (brushShape > 3){
        brushShape = 0;
    }
}