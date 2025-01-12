/* INTERACTION */
// Mouse pressed: Create a firework at the mouse position
// Key pressed: Change the text 

let fireworks = [];
let textVisible = false; // Text is not visible by default
let currentText = "Happy New Year 2025"; 
let textSizeValue = 64; 
let fadeAmount = 255; // Opacity of the text
let scalingUp = true; // Flag to control text scaling
let scalingSpeed = 0.8; // Speed of text scaling
let fadeSpeed = 1; // Speed of text fade
let scalingStep = 1; // Step size for scaling effect
let fadeStep = 5; // Step size for fading effect
let isChangingText = false; // Flag to control text change

// CANVAS
function setup() {
  createCanvas(1500, 800);
  background(0);
  textFont('Protest Revolution'); // using Google fonts
  textSize(48);
  fill(255);
  textAlign(CENTER, CENTER);
}

// DRAW FUNCTION WITH ANIMATION
function draw() {
  background(0, 50); // Light black background to create a trail effect

  // Update and show the fireworks in the array
  if (fireworks.length > 0) {
    fireworks[fireworks.length - 1].update(); // Update the latest firework
    fireworks[fireworks.length - 1].show();  // Show the latest firework
    
    // Remove the firework when it's done
    if (fireworks[fireworks.length - 1].isDone()) {
      fireworks.pop(); // Remove the latest firework from the array
    }
  }

  // TEXT ANIMATION (only if text is visible)
  if (textVisible) {
    // Scaling animation for the text
    if (scalingUp) {
      textSizeValue += scalingStep; // Text grows
      fadeAmount -= fadeStep; // Transparent effect
      if (textSizeValue > 100) {
        scalingUp = false; // If text size is bigger than 100, it will start to shrink
      }
    } else {
      textSizeValue -= scalingStep; // Text shrinks
      if (textSizeValue <= 64) {
        scalingUp = true; // If text size is smaller than 64, it will start to grow
        fadeAmount = 255; // Reset opacity
        textVisible = false; // Text is not visible anymore
        isChangingText = false; // Done changing text
      }
    }

    // Show the text in the center of the canvas
    push();
    textSize(textSizeValue);
    textAlign(CENTER, CENTER);
    fill(255, fadeAmount); // Color of the text with opacity
    text(currentText, width / 2, height / 2);
    pop();
  }
}

// MOUSE PRESSED FUNCTION TO CREATE FIREWORK
function mousePressed() {
  // Create a new firework if mouse is pressed
  fireworks.push(new Firework(mouseX, mouseY));
}

// KEY PRESSED FUNCTION TO CHANGE TEXT
function keyPressed() {
  // Ff space is pressed, the text will change
  if (key === ' ' && !isChangingText) {
    textVisible = true; 
    isChangingText = true; // Start changing text

    if (currentText === "Happy New Year 2025") {
      currentText = "Chúc mừng năm mới 2025"; // Change text
    } else {
      currentText = "Happy New Year 2025"; // if text is not the same, change it back
    }
  }
}

// FIREWORK CLASS
class Firework {
  constructor(targetX, targetY) {
    this.x = targetX;
    this.y = height; // Firework starts at the bottom of the screen
    this.targetY = targetY; // Target position for the firework
    this.triggerExplode = false; // Trigger the explosion
    this.exploded = false; 
    this.particles = [];
    this.rotation = 0; // Rotation of the firework (for the rising point)

    // Random color for the firework
    let colors = [
      color(255, 0, 0),    // Red
      color(255, 165, 0),  // Orange
      color(255, 255, 0)   // Yellow
    ];
    this.color = random(colors);
  }

  // ANIMATION FOR THE FIREWORK
  update() {
    if (!this.triggerExplode) {
      // Firework goes up until it reaches the target position
      if (this.y > this.targetY) {
        this.y -= 10; // Firework moves up by 10px
        this.rotation += 0.1; // Rotation of the firework (for the rising point)
      } else {
        this.triggerExplode = true; // Trigger the explosion
      }
    } else if (!this.exploded) {
      // Explode the firework
      this.explode();
      this.exploded = true;
    } else {
      // Update all particles
      for (let particle of this.particles) {
        particle.update();
      }
    }
  }

  // SHOW FIREWORK WITH TRANSLATE AND ROTATE FUNCTION
  show() {
    if (!this.triggerExplode) {
      // Show the rising point with rotation
      push();
      translate(this.x, this.y); // Move the coordinate system to the firework
      rotate(this.rotation); // Rotate the firework
      fill(this.color);
      // Draw the firework explosion
      noStroke();
      for (let i = 0; i < 8; i++) {
        let angle = (PI / 4) * i;
        let px = cos(angle) * 10;
        let py = sin(angle) * 10;
        ellipse(px, py, 5, 5);
      }
      // Draw the firework explosion
      pop();
    } else if (this.exploded) {
      // Show all particles
      for (let particle of this.particles) {
        particle.show();
      }
    }
  }

  // CREATE PARTICLES FOR THE EXPLOSION
  explode() {
    // Create a number of particles for the explosion
    let numParticles = int(random(30, 50));
    for (let i = 0; i < numParticles; i++) {
      let angle = random(TWO_PI);
      let speed = random(2, 6);
      this.particles.push(new Particle(this.x, this.y, angle, speed, this.color));
    }
  }

  // CHECK IF THE FIREWORK IS DONE
  isDone() {
    // Check if the firework is done
    return this.exploded && this.particles.every(p => p.isFaded());
  }
}

// PARTICLE CLASS FOR FIREWORK EXPLOSION
class Particle {
  constructor(x, y, angle, speed, color) {
    this.x = x;
    this.y = y;
    this.vx = cos(angle) * speed;
    this.vy = sin(angle) * speed;
    this.lifespan = 255; // Lifespan of the particle
    this.color = color;
    this.rotation = random(TWO_PI); // Initial rotation
    this.rotationSpeed = random(-0.1, 0.1); // random rotation speed
  }

  // ANIMATION FOR THE PARTICLE
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.lifespan -= 5; // Decrease the lifespan
    this.rotation += this.rotationSpeed; // Rotate the particle
  }

  // SHOW PARTICLE WITH TRANSLATE AND ROTATE FUNCTION
  show() {
    push();
    translate(this.x, this.y); // Move the coordinate system to the particle
    rotate(this.rotation); // Rotate the particle
    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), this.lifespan);
    ellipse(0, 0, 8, 8); // Show the particle
    pop();
  }

  isFaded() {
    return this.lifespan <= 0;
  }
}
