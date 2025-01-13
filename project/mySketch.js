function setup() {
  createCanvas(600, 600);
  eyeOfRah(100,200);
  eyeOfRah(350, 200);
}

function draw() {
}

function eyeOfRah(x,y) {
   fill("orange")
   ellipse(x + 100, y + 100, 80, 50);
   fill("blue")
   ellipse(x + 95, y + 100,30,30)
  fill("orange")
   circle(x + 92, y + 95, 10);
}

