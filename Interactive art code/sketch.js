let p = [];

function setup() {
  createCanvas(400, 400);
  background(10);
}

function draw() {
  background(10, 20);

  for (let i = 0; i < 5; i++) {
    p.push(new Particle(mouseX, mouseY));
  }

  for (let i = p.length - 1; i >= 0; i--) {
    p[i].update();
    p[i].show();

    if (p[i].a <= 0) {
      p.splice(i, 1);
    }
  }

  fill(255);
  textSize(24);
  textAlign(CENTER);
  text("Move  your Mouse ✨", width / 2, 50);
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.s = random(5, 20);

    this.vx = random(-2, 2);
    this.vy = random(-2, 2);

    this.r = random(100, 255);
    this.g = random(100, 255);
    this.b = random(100, 255);

    this.a = 255;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.a -= 4;
  }

  show() {
    noStroke();
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.x, this.y, this.s);
  }
}

function mousePressed() {
  background(random(20));
}