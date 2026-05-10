let img;

function preload() {
  img = loadImage('juice of background.jpg');
}

function setup() {
  createCanvas(400, 400);
  img.resize(width, height);
  background(220);

  // 🔺 Top Triangle
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.moveTo(width / 2, 50);
  drawingContext.lineTo(100, 200);
  drawingContext.lineTo(300, 200);
  drawingContext.closePath();
  drawingContext.clip();

  image(img, 0, 0);
  drawingContext.restore();

  // 🔻 Bottom Left Triangle
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.moveTo(100, 220);
  drawingContext.lineTo(50, 350);
  drawingContext.lineTo(180, 350);
  drawingContext.closePath();
  drawingContext.clip();

  image(img, -50, 0, width * 1.2, height * 1.2); // slight zoom
  drawingContext.restore();

  // 🔻 Bottom Right Triangle
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.moveTo(300, 220);
  drawingContext.lineTo(220, 350);
  drawingContext.lineTo(350, 350);
  drawingContext.closePath();
  drawingContext.clip();

  image(img, -100, -50, width * 1.3, height * 1.3); // different crop
  drawingContext.restore();
}