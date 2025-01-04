//VARIABLES
let arcColor; 
let showArc = true; 
let triangleAngle1 = 0; 
let triangleAngle2 = 0; 
let triangleAngle3 = 0; 
let triangleAngle4 = 0; 
let triangleAngle5 = 0; 
let triangleAngle6 = 0; 
let showSecondTriangle = false; 
let showThirdTriangle = false; 
let keyPressCount = 0;

//create canvas
function setup() {
    createCanvas(860, 860); 
    background(220); 
    arcColor = color(255, 255, 0); // Primary color of the arc (yellow)
}

//draw function with all geometries
function draw() {

    //retrangle background with different colors
    noStroke();
    fill(255, 161, 161); rect(100, 100, 220, 220); 
    fill(161, 255, 246); rect(320, 100, 220, 220); 
    fill(255, 197, 161); rect(540, 100, 220, 220); 
    fill(255, 197, 161); rect(100, 320, 220, 220); 
    fill(255, 161, 161); rect(320, 320, 220, 220); 
    fill(161, 255, 246); rect(540, 320, 220, 220); 
    fill(161, 255, 246); rect(100, 540, 220, 220); 
    fill(255, 197, 161); rect(320, 540, 220, 220); 
    fill(255, 161, 161); rect(540, 540, 220, 220); 

   // First triangle within the first rectangle
   push();
   translate(210, 210);  // position triangle in center of rectangle
   rotate(triangleAngle1); // rotate triangle
   fill(196, 98, 98);  // color
   triangle(-50, -50, 50, -50, 0, 50); // draw triangle
   pop(); 

   // second triangle within the fifth rectangle
   push();
   translate(650, 650);  
   rotate(triangleAngle2);
   fill(196, 98, 98);  
   triangle(-50, -50, 50, -50, 0, 50); 
   pop();

   // more triangle will be shown after key press
   if (showSecondTriangle) {
        // triangle within the second rectangle
        push();
        translate(430, 210);  
        rotate(triangleAngle3); 
        fill(61, 179, 167);  
        triangle(-50, -50, 50, -50, 0, 50); 
        pop();

        // triangle within the eighth rectangle
        push();
        translate(430, 650);  
        rotate(triangleAngle4);
        fill(214, 120, 62); 
        triangle(-50, -50, 50, -50, 0, 50); 
        pop();
   }

   if (showThirdTriangle) {
        // triangle within the fourth rectangle
        push();
        translate(210, 430); 
        rotate(triangleAngle5);
        fill(214, 120, 62); 
        triangle(-50, -50, 50, -50, 0, 50); 
        pop();

        // triangle within the sixth rectangle
        push();
        translate(650, 430); 
        rotate(triangleAngle6);
        fill(61, 179, 167);
        triangle(-50, -50, 50, -50, 0, 50);
        pop();
   }

    //if showArc is true, draw the arc
    if (showArc) {
        noStroke();
        fill(arcColor); // use the color defined in the setup function
        // calculate the start and end angles for the arc
        let biteSize = PI / 16;
        let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
        let endAngle = TWO_PI - startAngle;
      
        //draw the arcs
        arc(650, 210, 200, 200, startAngle, endAngle, PIE);
        arc(430, 430, 200, 200, startAngle, endAngle, PIE);
        arc(210, 650, 200, 200, startAngle, endAngle, PIE);
    }
}

function mousePressed() {
    //triangles will rotate 15 degrees
    triangleAngle1 += radians(15);  
    triangleAngle2 += radians(15);  
    triangleAngle3 += radians(15);  // after key press, the triangles will rotate 15 degrees
    triangleAngle4 += radians(15);  
    triangleAngle5 += radians(15);  
    triangleAngle6 += radians(15);  
    
    // change the color of the arc to a random color
    arcColor = color(random(255), random(255), random(255));
}

function keyPressed() {
    // showArc will be shown/hidden
    showArc = !showArc; //reverse the value of showArc

    keyPressCount++; // increment the keyPressCount variable

    if (keyPressCount === 1) {
        //show the triangles in the second and eighth rectangle after 1 key
        showSecondTriangle = true;
    } else if (keyPressCount === 3) {
        // show the triangles in the fourth and sixth rectangle after 3 keys
        showThirdTriangle = true;
    }
}
