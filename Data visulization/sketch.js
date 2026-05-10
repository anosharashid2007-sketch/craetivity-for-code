let data = [];
let labels = [];
let colors = [];
let title = "World Population Projections 2026";

function setup() {
  createCanvas(800, 500);
  
   labels = ["Asia", "Africa", "Europe", "N. America", "S. America", "Oceania"];
  data = [4800, 1550, 740, 610, 445, 46]; 

 
  colors = [
    color(0, 245, 212),   // Bright Teal
    color(255, 0, 110),   // Vivid Pink
    color(131, 56, 236),  // Electric Purple
    color(255, 190, 11),  // Amber Yellow
    color(58, 134, 255),  // Royal Blue
    color(251, 86, 7)     // Orange
  ];
}

function draw() {
  background(20);  
  let graphX = width * 0.6; // Shifted right to balance with legend
  let graphY = height / 2 + 20;
  let total = data.reduce((a, b) => a + b, 0);
  let lastAngle = 0;

    textAlign(LEFT);
  fill(255);
  textSize(28);
  textStyle(BOLD);
  text(title, 50, 60);
  
  
  textSize(16);
  textStyle(NORMAL);
  for (let i = 0; i < labels.length; i++) {
    let legendY = 120 + (i * 40);
    

    fill(colors[i]);
    noStroke();
    rect(50, legendY, 20, 20, 4); 
    

    fill(200);
    let percent = nf((data[i] / total) * 100, 1, 1);
    textAlign(LEFT);
    text(`${labels[i]} (${percent}%)`, 85, legendY + 15);
  }


  let mouseAngle = atan2(mouseY - graphY, mouseX - graphX);
  if (mouseAngle < 0) mouseAngle += TWO_PI;
  let d = dist(mouseX, mouseY, graphX, graphY);
  let isOverDonut = d > 70 && d < 160;

  for (let i = 0; i < data.length; i++) {
    let angle = (data[i] / total) * TWO_PI;
    
 
    if (isOverDonut && mouseAngle > lastAngle && mouseAngle < lastAngle + angle) {
      fill(colors[i]);
      stroke(255);
      strokeWeight(3);
      
      push();
      fill(255);
      noStroke();
      textAlign(CENTER);
      textSize(18);
      text(`${data[i]} Million`, graphX, graphY + 10);
      pop();
    } else {
      fill(colors[i]);
      noStroke();
    }

    arc(graphX, graphY, 320, 320, lastAngle, lastAngle + angle, PIE);
    lastAngle += angle;
  }

  
  fill(20);
  noStroke();
  ellipse(graphX, graphY, 180, 180);
}