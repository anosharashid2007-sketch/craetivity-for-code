let points = [];

function setup() {
  createCanvas(600, 400);
  background(10);
}

function draw() {
   background(10, 25);
    points.push({ x: mouseX, y: mouseY });

  if (points.length > 60) {
    points.shift();
  }

  noStroke();

  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    let size = map(i, 0, points.length, 10, 40);

    let r = map(i, 0, points.length, 50, 255);
    let g = map(i, 0, points.length, 100, 50);
    let b = map(i, 0, points.length, 255, 150);

    fill(r, g, b, 200);
    circle(p.x, p.y, size);
  }
}