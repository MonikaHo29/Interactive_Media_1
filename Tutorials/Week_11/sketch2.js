/*LOOP*/
//Loop is a way to repeat a block of code multiple times, but it has to have a condition to stop the loop

/*WHILE STATEMENT*/
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
/*FOR STATEMENT = initialise a variable, set a condition, and increment the variable inside the loop*/
let j;
for (j = 0; j < 10; j++){
    console.log(j);
}

/*
function setup(){
    createCanvas(800, 800);
}

function draw(){
    if (x <width/2){
        x += 1;
    }
    fill(255, 0, 0);
    noStroke();
    ellipse(x, height/2, 50, 50);
}
*/
let x = 0;

let lefToRight;
let topToBottom;

function setup(){
    createCanvas(800, 800);
    strokeWeight(5);
    stroke(0, 0, 255);

    /*
    let x = 0;
    let y = 0;
    while(x <= width){
        line(x, 0, x, height);
        x += 40;
    }
    while(y <= height){
        line(0, y, width, y);
        y += 40;
    }
    */
   // for make the code more readable and more compact
   /*
   for (let x = 0; x <= width; x += 40){
       line(x, 0, x, height);
   }
   for (let y = 0; y <= height; y += 40){
       line(0, y, width, y);
   }
    */
}  

// make it interactive with mouseX and mouseY and for loop
function draw(){
    background(255);

    /*
    for (let x = 0; x <= mouseX; x += 40){
        line(x, 0, x, height);
    }
    for (let y = 0; y <= mouseY; y += 40){
        line(0, y, width, y);
    }
    */

    if (lefToRight) {
        for (let x = 0; x <= mouseX; x += 40){
            line(x, 0, x, height);
        }
    } else {
        for (let x = width; x >= mouseX; x -= 40){
            line(x, 0, x, height);
        }
    }
    if (topToBottom){
        for (let y = 0; y <= mouseY; y += 40){
            line(0, y, width, y);
        }
    }else{
        for (let y = height; y >= mouseY; y -= 40){
            line(0, y, width, y);
        }
    }
}