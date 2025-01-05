// INTERACTION
// mouse input
// key input (space and arrow keys right & left)

// VARIABLES
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

// create CANVAS
function setup() {
    createCanvas(600, 600); // Adjusted canvas size to fit tightly
    background(255); 
    arcColor = color(255, 255, 0); // Primary color of the arc (yellow)
}

// draw function with all geometries
function draw() {
    // Size for rectangles
    let rectSize = width / 3;

    // Rectangle background 
    noStroke();
    fill(255, 161, 161); rect(0, 0, rectSize, rectSize);
    fill(161, 255, 246); rect(rectSize, 0, rectSize, rectSize);
    fill(255, 197, 161); rect(2 * rectSize, 0, rectSize, rectSize);
    fill(255, 197, 161); rect(0, rectSize, rectSize, rectSize);
    fill(255, 161, 161); rect(rectSize, rectSize, rectSize, rectSize);
    fill(161, 255, 246); rect(2 * rectSize, rectSize, rectSize, rectSize);
    fill(161, 255, 246); rect(0, 2 * rectSize, rectSize, rectSize);
    fill(255, 197, 161); rect(rectSize, 2 * rectSize, rectSize, rectSize);
    fill(255, 161, 161); rect(2 * rectSize, 2 * rectSize, rectSize, rectSize);

    // First triangle in the first rectangle
    push();
    translate(rectSize / 2, rectSize / 2); // Centered in the first rectangle
    rotate(triangleAngle1); // Rotate triangle
    fill(196, 98, 98); // Color
    triangle(-40, -40, 40, -40, 0, 40); // Draw triangle
    pop();

    // Second triangle in the last rectangle
    push();
    translate(2.5 * rectSize, 2.5 * rectSize);
    rotate(triangleAngle2);
    fill(196, 98, 98);
    triangle(-40, -40, 40, -40, 0, 40);
    pop();

    // Additional triangles shown after key presses
    if (showSecondTriangle) {
        // Triangle in the second rectangle
        push();
        translate(1.5 * rectSize, rectSize / 2);
        rotate(triangleAngle3);
        fill(61, 179, 167);
        triangle(-40, -40, 40, -40, 0, 40);
        pop();

        // Triangle in the eighth rectangle
        push();
        translate(1.5 * rectSize, 2.5 * rectSize);
        rotate(triangleAngle4);
        fill(214, 120, 62);
        triangle(-40, -40, 40, -40, 0, 40);
        pop();
    }

    if (showThirdTriangle) {
        // Triangle in the fourth rectangle
        push();
        translate(rectSize / 2, 1.5 * rectSize);
        rotate(triangleAngle5);
        fill(214, 120, 62);
        triangle(-40, -40, 40, -40, 0, 40);
        pop();

        // Triangle in the sixth rectangle
        push();
        translate(2.5 * rectSize, 1.5 * rectSize);
        rotate(triangleAngle6);
        fill(61, 179, 167);
        triangle(-40, -40, 40, -40, 0, 40);
        pop();
    }

    // If showArc is true, draw the arcs
    if (showArc) {
        noStroke();
        fill(arcColor); // Use the color defined in the setup function
        // Calculate the start and end angles for the arc
        let biteSize = PI / 16;
        let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
        let endAngle = TWO_PI - startAngle;

        // Draw the arcs
        arc(2.5 * rectSize, rectSize / 2, 180, 180, startAngle, endAngle, PIE);
        arc(1.5 * rectSize, 1.5 * rectSize, 180, 180, startAngle, endAngle, PIE);
        arc(rectSize / 2, 2.5 * rectSize, 180, 180, startAngle, endAngle, PIE);
    }
}

function mousePressed() {
    // Triangles will rotate with 15 degrees
    triangleAngle1 += radians(15);
    triangleAngle2 += radians(15);
    triangleAngle3 += radians(15);
    triangleAngle4 += radians(15);
    triangleAngle5 += radians(15);
    triangleAngle6 += radians(15);

    // Change the color of the arc to a random color
    arcColor = color(random(255), random(255), random(255));
}

function keyPressed() {
    // Show/hide arcs
    if (key === ' ') {
        showArc = !showArc; // Toggle the value of showArc
    }

    keyPressCount++; // Increment the keyPressCount variable

    if (keyPressCount === 1) {
        // Show the triangles in the second and eighth rectangle after 1 key press
        showSecondTriangle = true;
    } else if (keyPressCount === 3) {
        // Show the triangles in the fourth and sixth rectangle after 3 key presses
        showThirdTriangle = true;
    }

    // Rotate triangles with the right arrow key (clockwise)
    if (keyCode === RIGHT_ARROW) {
        triangleAngle1 += radians(15);
        triangleAngle2 += radians(15);
        if (showSecondTriangle) {
            triangleAngle3 += radians(15);
            triangleAngle4 += radians(15);
        }
        if (showThirdTriangle) {
            triangleAngle5 += radians(15);
            triangleAngle6 += radians(15);
        }
    }

    // Rotate triangles with the left arrow key (counterclockwise)
    if (keyCode === LEFT_ARROW) {
        triangleAngle1 -= radians(15);
        triangleAngle2 -= radians(15);
        if (showSecondTriangle) {
            triangleAngle3 -= radians(15);
            triangleAngle4 -= radians(15);
        }
        if (showThirdTriangle) {
            triangleAngle5 -= radians(15);
            triangleAngle6 -= radians(15);
        }
    }
}
