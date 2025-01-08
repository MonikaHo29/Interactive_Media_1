let numSegments = 16; // Anzahl der Segmente des Kaleidoskops
let angle;

function setup() {
  createCanvas(800, 800);
  angle = TWO_PI / numSegments; // Berechnet den Winkel jedes Segments
  pixelDensity(1); // Stellen sicher, dass die Pixelanzeige korrekt ist
  noLoop(); // Zeichnet das Muster nur einmal
}

function draw() {
  background(255); // Hintergrund auf Weiß setzen
  translate(width / 2, height / 2); // Setzt den Ursprung in die Mitte des Canvas
  
  loadPixels(); // Lädt die Pixeldaten des Canvas

  for (let i = 0; i < numSegments; i++) {
    push();
    rotate(i * angle); // Dreht jedes Segment
    drawPattern(); // Zeichnet das Muster im Segment
    pop();
  }

  updatePixels(); // Wendet die Pixeländerungen an
}

// Funktion zum Zeichnen des Kaleidoskop-Musters als Pixel
function drawPattern() {
  let radius = 200; // Abstand vom Zentrum für die Formen
  let size = 40; // Größe der Formen
  let rectWidth = 50; // Breite der Rechtecke
  let rectHeight = 20; // Höhe der Rechtecke

  // Zufällige Positionen innerhalb des Kreises
  let angle1 = random(TWO_PI);
  let angle2 = random(TWO_PI);
  let angle3 = random(TWO_PI);

  let x1 = radius * cos(angle1); // X-Position des ersten Kreises
  let y1 = radius * sin(angle1); // Y-Position des ersten Kreises

  let x2 = radius * cos(angle2); // X-Position des ersten Rechtecks
  let y2 = radius * sin(angle2); // Y-Position des ersten Rechtecks

  let x3 = radius * cos(angle3); // X-Position des zweiten Rechtecks
  let y3 = radius * sin(angle3); // Y-Position des zweiten Rechtecks

  // Färbt Pixel im Canvas
  let c1 = color(random(150, 255), random(100, 200), random(100, 255), 180); 
  let c2 = color(random(100, 255), random(50, 200), random(150, 255), 150);

  // Zeichnet den ersten Kreis (Pixelweise)
  drawCircle(x1, y1, size, c1); 
  
  // Zeichnet das erste Rechteck (Pixelweise)
  drawRect(x2, y2, rectWidth, rectHeight, c2); 
  
  // Zeichnet das zweite Rechteck (Pixelweise)
  drawRect(x3, y3, rectWidth, rectHeight, c2); 

  // Spiegelung entlang der y-Achse (Pixelweise)
  drawCircle(x1, -y1, size, c1); 
  drawRect(x2, -y2, rectWidth, rectHeight, c2); 
  drawRect(x3, -y3, rectWidth, rectHeight, c2); 
}

// Hilfsfunktion, um einen Kreis als Pixel zu zeichnen
function drawCircle(x, y, d, c) {
  let radius = d / 2;
  let left = x - radius;
  let top = y - radius;
  let right = x + radius;
  let bottom = y + radius;

  for (let px = left; px < right; px++) {
    for (let py = top; py < bottom; py++) {
      let distance = dist(x, y, px, py);
      if (distance < radius) {
        setPixel(px, py, c);
      }
    }
  }
}

// Hilfsfunktion, um ein Rechteck als Pixel zu zeichnen
function drawRect(x, y, w, h, c) {
  for (let px = x - w / 2; px < x + w / 2; px++) {
    for (let py = y - h / 2; py < y + h / 2; py++) {
      setPixel(px, py, c);
    }
  }
}

// Funktion zum Setzen eines Pixels im Canvas
function setPixel(x, y, c) {
  let index = int((x + width / 2) + (y + height / 2) * width);
  if (index >= 0 && index < pixels.length) {
    pixels[index] = c.levels[0];     // R
    pixels[index + 1] = c.levels[1]; // G
    pixels[index + 2] = c.levels[2]; // B
    pixels[index + 3] = c.levels[3]; // A
  }
}
