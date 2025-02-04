let contents = "";
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(200);
  fill(255);
  textSize(24);
  text(contents, 50, 50, 300, 300);
}
function keyTyped() {
  contents += key;
}

